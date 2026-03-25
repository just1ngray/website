// import solidLogo from './assets/solid.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Router, Route } from '@solidjs/router';
import './App.css';
import { indexHtml } from './pages/index-html';
import { Layout } from './components/Layout';
import { ReadmeMd } from './pages/3dprinting/Readme-md';
import { Pyfig } from './pages/programming/pyfig';
import { JGit } from './pages/programming/jgit';
import { JFSWatch } from './pages/programming/jfswatch';

function App() {
  return (
    <Router>
      <Route component={Layout}>
        <Route path="/" component={indexHtml} />
        <Route path="/programming/pyfig.py" component={Pyfig} />
        <Route path="/programming/jgit.sh" component={JGit} />
        <Route path="/programming/jfswatch.rs" component={JFSWatch} />
        <Route path="/3dprinting/readme.md" component={ReadmeMd} />

        <Route path="/*" component={indexHtml} />
      </Route>
    </Router>
  );
}

export default App
