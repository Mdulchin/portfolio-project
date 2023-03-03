import {Link} from 'react-router-dom';
import About from './About';
function Home(){

    return (
        <div className="Home">
            <h1 className="first">Madeline</h1>
            <span className='homeColor'></span>
            <p className="EAdescription">Embroidery Artist</p>
            <h1 className="last">Dulchin</h1>
            <p className="SWdescription">Software Engineer</p>
            <span className='sideButtons'>
            <Link to="/embroidery-projects" className='EP'>➤</Link>
            <Link to="/software-projects" className='SP'>➤</Link>
            </span>
            <Link to="/about" className='AB'>About</Link>
        </div>
    )
}
export default Home;