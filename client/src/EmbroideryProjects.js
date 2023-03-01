import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmbroideryCard from "./EmbroideryCard";
function EmbroideryProjects() {
    const [eProjects, setEProjects] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    
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
    {isClicked ?
      null
      :
      <Link to="/" className="emHome">➤ <br /> <p className="emHome1">Home</p></Link>
    }
    <EmbroideryCard eProjects={eProjects} setIsClicked={setIsClicked} isClicked={isClicked}/>
  </div>
  </>
  );
}
export default EmbroideryProjects;