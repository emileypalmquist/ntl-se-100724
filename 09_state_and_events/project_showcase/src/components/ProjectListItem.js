const ProjectListItem = ({name, about, link, image, phase}) => {
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
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
    )
}

export default ProjectListItem