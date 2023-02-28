import {Link} from 'react-router-dom';
import About from './About';
function Home(){

    return (
        <div className="Home">
            <span className="firstName">
            <h1 className="first">Madeline</h1>
            </span>
            <p className="EAdescription">Embroidery Artist</p>
            <span className="lastName">
            <h1 className="last">Dulchin</h1>
            </span>
            <p className="SWdescription">Software Engineer</p>
            <Link to="/embroidery-projects" className='EP'>➤</Link>
            <Link to="/software-projects" className='SP'>➤</Link>
            <Link to="/about" className='AB'>About</Link>
        </div>
    )
}
export default Home;