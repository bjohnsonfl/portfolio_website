import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewMoreButton from "../components/viewMoreButton.js"
import ProjectDescriptionTile from "../components/projectDescriptionTile.js"

//images
import chessPic from "../images/chessPic.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing_Page_Intro">
      <p>Hello, I am a Computer Engineer Graduate from the University of Florida interested in software devlopment roles. </p>
    </div>
    <div className = "landing_Page_Projects">
      <div className = "projects_row"> 
        <img src = {chessPic} alt = "Chess Picture" />
        <ProjectDescriptionTile project = "ppp"> JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD JLKJHKFDSJKFD  </ProjectDescriptionTile>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
