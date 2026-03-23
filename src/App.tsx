// import solidLogo from './assets/solid.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { Router, Route } from '@solidjs/router'
import './App.css'
import { Nav } from './components/Nav'
import { indexHtml } from './pages/index-html'
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Route component={Layout}>
        <Route path="/" component={indexHtml} />
      </Route>
    </Router>
  );
}

export default App
