import { useState } from "react"

const ProjectListItem = ({name, about, link, image, phase}) => {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeClick() {
        setLikeCount((currentState) => currentState + 1)
    }

    function handleDislikeClick() {
        setLikeCount((currentState) => {
            if (currentState > 0) {
                return currentState - 1
            }

            return currentState
        })
    }

    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
            </figure>
            <article>
                <h4>{name}</h4>
                <p>{about}</p>
                {link ? <a href={link}>Link</a> : null}
                <p>Like Count: {likeCount}</p>
            </article>
            <footer>
                <span>Phase {phase}</span>
            </footer>
            <button onClick={handleLikeClick}>Up Vote</button>
            <button onClick={handleDislikeClick}>Down Vote</button>
        </li>
    )
}

export default ProjectListItem