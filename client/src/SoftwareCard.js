
function SoftwareCard({sProjects}){
const sproj = sProjects.map((sproj) => {
    return (
        <div>
            <h2>{sproj.title}</h2>
            <img src={sproj.cover} alt={sproj.title} />
            <p>{sproj.description}</p>
        </div>
        )
    })
    return (
        <div>
            {sproj}
        </div>
    )
}
export default SoftwareCard