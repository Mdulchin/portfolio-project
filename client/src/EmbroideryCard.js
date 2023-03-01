import { useState} from 'react';
import Lightbox from "yet-another-react-lightbox"
function EmbroideryCard({eProjects, setIsClicked, isClicked}){
    const [open, setOpen] = useState(false);
    const [more, setMore] = useState([]);
const proj = eProjects.map((eProject) => {
    
    return (
    <div className="emCard" >
        <img src={eProject.cover} alt={eProject.title} />
        <p className='desc'>{eProject.description}
        <button className="moreButton" type="button" onClick={() => morePhotos(eProject.photos)}>See more photos</button>
        </p>
        {/* <span className='info'> */}
        <h2>{eProject.title}</h2>
        {/* <button className="moreButton" type="button" onClick={() => morePhotos(eProject.photos)}>See more photos</button> */}
        {/* </span> */}
    </div>
    )
})

function morePhotos(e){
    setOpen(!open)
    setIsClicked(!isClicked)
    setMore(
        e.map((ph) => {
      return  (
        <img className="moreImage"src={ph.image} alt={ph.title} />
        )
    })
    )
}
function lessPhotos(){
    setOpen(!open)
    setIsClicked(!isClicked)
}

    return (
        <div className="emCardContainer">
         {open ? 
         <div className='moreContainer'>
        {more}
         <button className="lessButton" type="button" onClick={() => lessPhotos()}>Close</button>
        </div>
         :   
         proj
         }
        </div>
    )

}
export default EmbroideryCard