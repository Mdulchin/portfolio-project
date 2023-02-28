import { useState} from 'react';
import Lightbox from "yet-another-react-lightbox"
function EmbroideryCard({eProjects}){
    const [open, setOpen] = useState(false);
    const [more, setMore] = useState([]);
const proj = eProjects.map((eProject) => {
    return (
    <div className="emCard" >
        <img src={eProject.cover} alt={eProject.title} />
        <span className='info'>
        <h2>{eProject.title}</h2>
        <p>{eProject.description}</p>
        <button className="moreButton" type="button" onClick={() => morePhotos(eProject.photos)}>➤</button>
        </span>
    </div>
    )
})

function morePhotos(e){
    setOpen(!open)
    setMore(
        e.map((ph) => {
      return  (
        <img className="moreImage"src={ph.image} alt={ph.title} />
        )
    })
    )
}

    return (
        <div className="emCardContainer">
         {open ? 
         <div className='moreContainer'>
        {more}
         <button className="lessButton" type="button" onClick={() => setOpen(!open)}>Close</button>
        </div>
         :   
         proj
         }
        </div>
    )

}
export default EmbroideryCard