import { useState } from 'react'

function Header() {
    const [darkMode, setDarkMode] = useState(true)

    function handleDarkModeClick() {
        setDarkMode((currentState) => !currentState)
        // setDarkMode(!darkMode)
    }

    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleDarkModeClick}>
                {buttonText}
            </button>
        </header>
    )
}

export default Header;