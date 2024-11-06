import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from "./components/About"
import ProjectContainer from "./components/ProjectContainer"
import ProjectsList from "./components/ProjectsList";
import ProjectForm from "./components/ProjectForm"
import ProjectDetails from "./components/ProjectDetail";

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {index: true, element: <About />},
        {
            path: "projects",
            element: <ProjectContainer />,
            children: [
                {
                    index: true,
                    element: <ProjectsList />
                },
                {
                    path: "new",
                    element: <ProjectForm />
                },
                {
                    path: ":projectId",
                    element: <ProjectDetails />
                }
            ]
        }
      ]
    }
]
  
const router = createBrowserRouter(routes)

export default router;