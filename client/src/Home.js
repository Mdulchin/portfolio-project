import About from "./About";
import Me from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/Me.JPG";
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
            {/* <img className="me" src={Me}></img> */}
        </div>
    )
}
export default Home;