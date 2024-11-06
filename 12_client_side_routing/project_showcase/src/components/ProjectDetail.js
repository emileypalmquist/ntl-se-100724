import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

function ProjectDetails() {
    const { projectId  } = useParams()
    // const { projects } = useOutletContext()
    console.log(projectId)

    useEffect(() => {
        fetch(`http://localhost:3001/projects/${projectId}`)
        .then((resp) => resp.json())
        .then(console.log)
    }, [projectId])

    return (
        <div>
            Project Details
        </div>
    )
}

export default ProjectDetails;