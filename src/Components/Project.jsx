





export default function Project({project}){



    return <div className="project">
        <div className="spot"></div>
        <div className="spot"></div>
        <div className="spot"></div>
        <div className="spot"></div>
        <div className="spot"></div>
        <div className="spot"></div>
        <div className="container">    
        <div className="imgContainer">
        <img src={project.img} alt={project.title}/>
        </div>
        <div className="projectdetails">
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <div className="toolsUsed">
            {project.tools.map((item) => <img src={item} />)}
        </div>
        <div className="btns">
        <button className="linktoProject"><a href={project.visit} target={"_blank"}>{project.title == "SpaceShooter" ? "Download" : "Visit"}</a></button>
        <button className="linktoGithub"><a href={project.github} target={"_blank"}>Github</a></button>
        </div>
        </div>
        </div>
    </div>
}