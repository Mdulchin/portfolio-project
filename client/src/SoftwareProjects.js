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
        <>
            <h1 className="softH1">Software Projects</h1>
        <div className="SoftwareProjects">
            <SoftwareCard sProjects={sProjects} />
        </div>
        </>
    )

}

export default SoftwareProjects;