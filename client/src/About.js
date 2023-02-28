import Me from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/Me.JPG";
import { Link } from "react-router-dom";
import EmbroideryProjects from "./EmbroideryProjects";
import SoftwareProjects from "./SoftwareProjects";
function About(){

    return(
        <div className="about">
            <h1>About</h1>
            <h2>Me</h2>
            <img src={Me} alt="Madeline Dulchin" className="me"/>
            <h4>Hi, I'm Madeline, a hand embroidery artist and software engineer based in Brooklyn, NY.</h4>
            <p>I’m a 2023 Flatiron School graduate looking to apply my software engineering skills to front and/or backend projects. At Flatiron I learned Javascript, React, Ruby, Ruby on Rails, SQL, CSS, HTML, and, most importantly, the ability to efficiently and thoroughly master a new programming language. I love working as part of a team, and am open to remote, on-site, or hybrid work. 
            Before Flatiron I graduated from Bates College with a degree in English. I then worked as customer service representative at Unum Insurance. At the same time, I took my passion, hand embroidery, from a hobby to a business, selling custom work through Etsy and Instagram.</p>
            <div className="links">
             <h5>See my <Link to="/embroidery-projects" className="embroidery">embroidery portfolio</Link></h5>
            <h5>See my <Link to="/software-projects" className="software">Software portfolio</Link></h5>
            </div>
        </div>
    )

}
export default About