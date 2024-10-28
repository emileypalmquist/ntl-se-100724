import React from 'react'

const ProjectListItem = ({name, about, link, image, phase}) => {
    console.log(name)
    console.log(about)
    // const {name, about, phase, link, image} = project;
  return (
    <div>
        <li>
            <figure>
                <img src={image} alt={name}></img>
            </figure>
            <article>
                <h4>{name}</h4>
                <p>{about}</p>
                {link ? <a href={link}>Link</a> : null}
            </article>
            <footer>
                <span>Phase {phase}</span>
            </footer>
        </li>

      
    </div>
  )
}

export default ProjectListItem
