
function SoftwareCard({sProjects}){
const sproj = sProjects.map((sproj) => {
    console.log(sproj)
    return (
        <div className="softCard" key={sproj.id}>
            <img src={sproj.cover} alt={sproj.title} />
            <h2>{sproj.title}</h2>
            <p>{sproj.description}</p>
            <a href={sproj.github} className="git"><svg className="github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        </div>
        )
    })
    return (
        <> 
        <span className="colorskein">
            <div className="cropPlease">
            <a href="https://colorskein.onrender.com/"><img className="colorImage" src="https://camo.githubusercontent.com/99fc148ff7d47145df2ab78318c1c151fc4588dd087bc2404d92a492112eef5a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f49765a6f3359595a4431492f6d617872657364656661756c742e6a7067"></img></a>
            </div>
            {/* <p className="colorskeinDesc">Click to visit</p> */}
            <h2 className="csTitle">Colorskein</h2>
            <ul className="cTech"> 
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
            </ul>
            <p>I’m a 2023 of the Flatiron Full-Stack Developer program, and for my capstone project I created ColorSkein. ColorSkein is a site that helps anyone who embroiders find the perfect colors for their projects. The user just creates an account and inputs a photo URL. The site then matches the image to the closest DMC thread colors they can use to recreate it. But because, to us, the way colors look in photos is so dependent on the colors around them, sometimes the actual closest color is not what's best to accurately recreate the photo. The user, in that case, needs to be able to adjust any of the thread colors to what they see in the photo, rather than what is actually there. At the moment the user can do this by making the threads lighter or darker, and I’m working on making them adjustable by hue, as well. <br/>  Because I often find myself in the thread aisle of Michael's forgetting what I own and accidently re-buying the same colors, I’ve also included the ability to create a personal “floss stash” with the image, name and number of all 506 DMC floss colors. That way embroidery artists can easily keep track of what’s already in their collection. 
</p>
            <a href="https://github.com/Mdulchin/colorskein" className="git"><svg className="github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            </span>
            {sproj}
        </>
    )
}
export default SoftwareCard