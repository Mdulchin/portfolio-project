import About from "./About";
import Me from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/Me.JPG";
function Home(){

    return (
        <div className="Home">
            <span className="firstName">
            <h1 className="first">Madeline</h1>
            </span>
            <span className="lastName">
            <h1 className="last">Dulchin</h1>
            </span>
            {/* <img className="me" src={Me}></img> */}
        </div>
    )
}
export default Home;