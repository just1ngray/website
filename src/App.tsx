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
import { JPGray } from './pages/programming/jpgray';
import { CovidExposures } from './pages/programming/covidexposures';
import { Pytestdir } from './pages/programming/pytestdir';
import { Website } from './pages/programming/website';
import { HoneyDripper } from './pages/3dprinting/HoneyDripper';

function App() {
  return (
    <Router>
      <Route component={Layout}>
        <Route path="/" component={indexHtml} />

        <Route path="/programming/pyfig.py" component={Pyfig} />
        <Route path="/programming/jpgray.ca" component={JPGray} />
        <Route path="/programming/jgit.sh" component={JGit} />
        <Route path="/programming/jfswatch.rs" component={JFSWatch} />
        <Route path="/programming/pytestdir.py" component={Pytestdir} />
        <Route path="/programming/covidexposures.ca" component={CovidExposures} />
        <Route path="/programming/website" component={Website} />

        <Route path="/3dprinting/readme.md" component={ReadmeMd} />
        <Route path="/3dprinting/honey-dripper" component={HoneyDripper} />

        <Route path="/*" component={indexHtml} />
      </Route>
    </Router>
  );
}

export default App
