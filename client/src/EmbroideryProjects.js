import { useEffect, useState } from "react";
import EmbroideryCard from "./EmbroideryCard";
function EmbroideryProjects() {
    const [eProjects, setEProjects] = useState([]);
    
    useEffect(() => {
        fetch('/finished_projects')
            .then(response => response.json())
            .then(data => setEProjects(data))
    }, [])

  return (
    <div className="EmbroideryProjects">
      <h1>Embroidery Projects</h1>
      <EmbroideryCard eProjects={eProjects} />
    </div>
  );
}
export default EmbroideryProjects;