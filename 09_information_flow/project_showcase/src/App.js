import { useState } from "react"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? "App" : "App light"

  return <div className={className}>
    <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
    <ProjectContainer />
  </div>;
}

export default App;
