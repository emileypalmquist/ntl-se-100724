import React from 'react'
import ProjectListItem from "./ProjectListItem"
const ProjectList = ({projects}) => {
    console.log(projects)
    const projectListItems = projects.map(project => (
        <ProjectListItem key={project.id} name={project.name} about={project.about} phase={project.phase} link={project.link} image={project.image}/>
    ))
  return (
    <div>
      <ul>{projectListItems}</ul>
    </div>
  )
}

export default ProjectList
