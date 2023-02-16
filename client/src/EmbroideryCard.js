
function EmbroideryCard({eProjects}){
const proj = eProjects.map((eProject) => {
    return (
    <div className="emCard">
        <h2>{eProject.title}</h2>
        <img src={eProject.cover} alt={eProject.title} />
        <p>{eProject.description}</p>
    </div>
    )
})

    return (
        <div className="emCardContainer">
        {proj}
        </div>
    )

}
export default EmbroideryCard