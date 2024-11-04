function Header({ darkMode, onToggleDarkMode }) {
    const handleModeClick = () => onToggleDarkMode()
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;