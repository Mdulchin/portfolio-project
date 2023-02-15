import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import EmbroideryProjects from './EmbroideryProjects';
import SoftwareProjects from './SoftwareProjects';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to="/embroidery-projects">Embroidery Projects</Link></li>
        <li><Link to="/software-projects">Software Projects</Link></li> */}
        </ul>
      </nav>
      <Link to="/embroidery-projects" className='EP'>➤</Link>
      <Link to="/software-projects" className='SP'>➤</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/embroidery-projects" element={<EmbroideryProjects />} />
        <Route path="/software-projects" element={<SoftwareProjects />} />
      </Routes>
    </div>
  );
}

export default App;
