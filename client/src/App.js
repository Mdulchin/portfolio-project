import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
