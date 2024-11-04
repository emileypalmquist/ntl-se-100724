import { useState } from "react";

const initialState = {
    name: "",
    about: "",
    image: "",
    link: "",
    phase: 1
}

function ProjectForm({ onAddProject }) {
    const [formData, setFormData] = useState(initialState)

    const { name, about, image, link, phase } = formData


    function handleChange(event) {
        const { name, value } = event.target

        setFormData((currentState) => {
            return {
                ...currentState,
                [name]: value
            }
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        // POST request to persist and get the id
        onAddProject(formData)

        setFormData(initialState)
    }

    return (
        <form onSubmit={handleFormSubmit} >
            <label htmlFor='name'>Name:</label>
            <input 
                id='name' 
                name='name' 
                placeholder='Project Name' 
                value={name}
                onChange={handleChange}
            />
            <label htmlFor='about'>About:</label>
            <input id='about' name='about' placeholder='Project About' value={about} onChange={handleChange}/>
            <label htmlFor='image'>image:</label>
            <input id='image' name='image' placeholder='Project image' value={image} onChange={handleChange}/>
            <label htmlFor='link'>link:</label>
            <input id='link' name='link' placeholder='Project link' value={link} onChange={handleChange}/>
            <label htmlFor='phase'>phase:</label>
            <input id='phase' type='number' name='phase' value={phase} placeholder='Project phase' onChange={handleChange}/>
            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;