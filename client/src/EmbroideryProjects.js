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
    <h1>Embroidery Projects</h1>
  <div className="EmbroideryProjects">
    <EmbroideryCard eProjects={eProjects} />
    <Link to="/" className="emHome">➤</Link>
  </div>
  </>
  );
}
export default EmbroideryProjects;