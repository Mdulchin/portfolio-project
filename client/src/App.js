
import './App.css';
import Home from './Home';
import About from './About';
import EmbroideryProjects from './EmbroideryProjects';
import SoftwareProjects from './SoftwareProjects';
import {Route, Routes, Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const [home, setHome] = useState('/');
  return (
    <div className="App">
      <nav className="navBar">
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      

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
