import Me from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/Me.JPG";
import { Link } from "react-router-dom";
import DulchinResume from "/Users/madelinedulchin/Development/code/new_project/portfolio-project/client/src/DulchinResume.pdf";
function About(){

    return(
        <div className="about">
            <h1>About</h1>
            <h2>Me</h2>
            <img src={Me} alt="Madeline Dulchin" className="me"/>
            <h4>Hi, I'm Madeline, a full stack web developer and hand embroidery artist based in Brooklyn, NY.</h4>

            <p>I’m a 2023 Flatiron School graduate looking to apply my software engineering skills to front and/or backend projects. At Flatiron I learned Javascript, React, Ruby, Ruby on Rails, SQL, CSS, HTML, and, most importantly, the ability to efficiently and thoroughly master a new programming language. I love working as part of a team, and am open to remote, on-site, or hybrid work. 
            <br />
            <br />
            Before Flatiron I graduated from Bates College with a degree in English. I then worked as customer service representative at Unum Insurance. At the same time, I took my passion, hand embroidery, from a hobby to a business, selling custom work through Etsy and Instagram.</p>
            <a href={DulchinResume} download="MadelineDulchinResume" target='_blank'> <button className="resume">Resume <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-download" viewBox="0 -1 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg></button></a>
            <div className="links">
             <h5><Link to="/embroidery-projects" className="embport">See my <br /> embroidery portfolio</Link></h5>
            <h5><Link to="/software-projects" className="softport">See my <br /> software portfolio</Link></h5>
            </div>
            {/* <div className="current">
            <span className="currentemb">
            <h6>Current Projects:</h6>
            <p>My current embroidery project is an attempt at embroidered stop motion animation. 
                <br />
                A Cento anchovy tin, embroidered along the bottom of shirt, will slowly open to reveal the anchovies swimming out.</p>
            <img src="https://images.squarespace-cdn.com/content/v1/627aa12f7c02d072c117cbba/b1903b96-e550-4781-b4f6-65d98948f9bc/IMG_7906.jpeg?format=1500w"></img>
            </span>
            <span className="currentsoft">
            <p>On the engineering side of things, my main focus right now is getting a job!
                <br />
                I'm working on learning some Python and brushing up my data structures and algorithms skills.
            </p>
             </span>
            </div> */}
        </div>  
    )

}
export default About