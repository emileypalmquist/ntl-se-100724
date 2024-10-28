// import ProjectList from "./components/ProjectList";
import ProjectList from "./components/ProjectList";
import projects from "./projects";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";

function App() {
  return (
  <div className="App">
    <Header />
    <ProjectForm />
    <ProjectList projects={projects}/>

  </div>
  )
}

export default App;
