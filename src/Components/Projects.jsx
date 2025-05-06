

import Project from "./Project"



export default function Projects({projectList}){


    return <section id="Projects">
        <h1>My Projects</h1>
        <div className="projectContainer">
        {projectList.map((item) => <Project project={item}/>)}
        </div>
    </section>
}



