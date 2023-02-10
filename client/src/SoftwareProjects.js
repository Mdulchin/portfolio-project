import SoftwareCard from "./SoftwareCard";
import { useState, useEffect } from "react";
function SoftwareProjects(){
    const [sProjects, setSProjects] = useState([]);
    useEffect(() => {
        fetch('/softprojs')
            .then(response => response.json())
            .then(data => setSProjects(data))
    }, [])
    return(
        <div className="SoftwareProjects">
            <h1>Software Projects</h1>
            <SoftwareCard sProjects={sProjects} />
        </div>
    )

}

export default SoftwareProjects;