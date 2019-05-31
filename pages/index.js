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
        <div className = "projectImg"><img src = {chessPic} alt = "Chess Picture" /></div>
        <div className ="tile"> <ProjectDescriptionTile project = "ppp"></ProjectDescriptionTile></div>
    </div>
    
  </Layout>
)

export default IndexPage
