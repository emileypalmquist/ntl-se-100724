import { useState } from "react"

import ProjectForm from "./ProjectForm"
import ProjectsList from "./ProjectsList"

import allProjects from "../projects"

function ProjectContainer() {
    const [projects, setProjects] = useState(allProjects)

    function addNewProject(newProject) {
        console.log('add new project', newProject)
        setProjects((currentProjects) => [...currentProjects, newProject])
    }

    return (
        <>
            <ProjectForm onAddProject={addNewProject} />
            <ProjectsList projects={projects} />
        </>
    )
}

export default ProjectContainer