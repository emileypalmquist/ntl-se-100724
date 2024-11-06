import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

function ProjectContainer() {
    const [ projects, setProjects ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/projects')
        .then((resp) => resp.json())
        .then((data) => setProjects(data))
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => {
            return [...currentProjects, newProject]
        })
    }

    const context = {
        // projects: projects
        projects,
        // onAddProject: onAddProject
        onAddProject
    }

    return (
        <div>
            <Outlet context={context} />
        </div>
    )
}

export default ProjectContainer