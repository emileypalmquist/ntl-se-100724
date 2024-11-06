import { Link } from "react-router-dom"

function ProjectListItem({ project }) {
    const { name, image, about, id, phase, link } = project
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={`project: ${name}`}/>
            </figure>
            <article>
                <h4>{name}</h4>
                <p>
                    {about}
                </p>
                <p>
                   Phase: {phase}
                </p>
                <Link to={`/projects/${id}`}>
                    Project Details
                </Link>
            </article>
        </li>
    )
}

export default ProjectListItem