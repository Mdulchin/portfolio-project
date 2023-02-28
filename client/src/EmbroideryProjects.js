import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmbroideryCard from "./EmbroideryCard";
function EmbroideryProjects() {
    const [eProjects, setEProjects] = useState([]);
    
    useEffect(() => {
        fetch('/finished_projects')
            .then(response => response.json())
            .then(data => setEProjects(data))
        }, [])
    
        // console.log(eProjects)
        
  return (
    <>
    <h1 className="emTitle">Embroidery Projects</h1>
  <div className="EmbroideryProjects">
    <Link to="/" className="emHome">➤ <br /> <p className="emHome1">Home</p></Link>
    <EmbroideryCard eProjects={eProjects} />
  </div>
  </>
  );
}
export default EmbroideryProjects;