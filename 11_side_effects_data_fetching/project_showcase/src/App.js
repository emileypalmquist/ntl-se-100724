import { useState, useEffect } from "react"
import Modal from "react-modal"

import Header from "./components/Header"
import ProjectContainer from "./components/ProjectContainer"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)
  const [ showModal, setShowModal ] = useState(false)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowModal(true)
    }, 5000)

    return () => clearTimeout(timeoutID)
  }, [])

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  function closeModal() {
    setShowModal(false)
  }

  const className = darkMode ? 'App' : 'App light'

  return <div className={className}>
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
    >
      <h2>This is an open react modal</h2>
    </Modal>
    <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle}/>
    <ProjectContainer />
  </div>;
}

export default App;
