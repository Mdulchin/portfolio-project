import SoftwareCard from "./SoftwareCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SoftwareProjects(){
    const [sProjects, setSProjects] = useState([]);
    useEffect(() => {
        fetch('/softprojs')
            .then(response => response.json())
            .then(data => setSProjects(data))
    }, [])
    return(
        <>
            <h1 className="softH1">Software Engineering Projects</h1>
        <div className="SoftwareProjects">
            <SoftwareCard sProjects={sProjects} />
        </div>
        <Link to="/" className="swHome">➤ <br /> <p className="swHome1">Home</p></Link>
        </>
    )

}

export default SoftwareProjects;