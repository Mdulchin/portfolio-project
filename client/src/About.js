import Me from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/Me.JPG";
function About(){

    return(
        <div>
            <h1>About</h1>
            <img src={Me} alt="Madeline Dulchin" className="me"/>
            <p>Hi, I'm Madeline, a software engineer and embroidery artist. </p>
        </div>
    )

}
export default About