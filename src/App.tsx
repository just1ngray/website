// import solidLogo from './assets/solid.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Router, Route } from '@solidjs/router';
import './App.css';
import { indexHtml } from './pages/index-html';
import { Layout } from './components/Layout';
import { ReadmeMd } from './pages/3dprinting/Readme-md';
import { Pyfig } from './pages/programming/pyfig';

function App() {
  return (
    <Router>
      <Route component={Layout}>
        <Route path="/" component={indexHtml} />
        <Route path="/programming/pyfig.html" component={Pyfig} />
        <Route path="/3dprinting/readme.md" component={ReadmeMd} />

        <Route path="/*" component={indexHtml} />
      </Route>
    </Router>
  );
}

export default App
