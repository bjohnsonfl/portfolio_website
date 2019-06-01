import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDescriptionTab from "../components/projectDescriptionTab"
 
import "./styles/projects.css"

const Projects = () => (
    <Layout>
      <SEO title="Home" />
      <div className="project_Header">
          <h1>Projects</h1>
          <p>These projects are a combination of course work, personal ventures, and practice exercises for myself. Click the Github icon to be taken to the source code’s repository.  Course work projects do not have links to prevent current students at UF from discovering solutions. </p>
      </div>
      <div className="project_Grid_Wrapper">
        <ProjectDescriptionTab />
        <ProjectDescriptionTab />
        <ProjectDescriptionTab />
        <ProjectDescriptionTab />
      </div>
    </Layout>
)

export default Projects
