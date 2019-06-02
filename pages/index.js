import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewMoreButton from "../components/viewMoreButton.js"
import ProjectDescriptionTile from "../components/projectDescriptionTile.js"

//images
import chessPic from "../images/chessPic.jpg"
import iphonePic from "../images/iphone.jpg"
import J_typePic from "../images/J_type.png"

import "./styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing_Page_Intro">
      <p>Hello, I am a Computer Engineer from the University of Florida interested in software devlopment roles. </p>
    </div>
    <div className ="projects_Header"><h1>Projects</h1></div>
    <div className = "landing_Page_Projects">
        <div className = "projectImg"><img src = {chessPic} alt = "Chess Picture" /></div>
        <div className ="tile"> <ProjectDescriptionTile project = "Overhead">Sed iaculis mi in urna lacinia gravida. Praesent id consequat massa. Mauris vel pharetra quam, eget auctor ante. Donec ultrices tincidunt ultricies. In hac habitasse platea dictumst. </ProjectDescriptionTile></div>
    
        <div className = "projectImg"><img src = {iphonePic} alt = "iPhone Picture" /></div>
        <div className ="tile"> <ProjectDescriptionTile project = "Lorem Ipsum">Morbi dictum dui lectus, nec ullamcorper quam vulputate ac. Nulla efficitur libero leo, eu lacinia odio faucibus sit amet.</ProjectDescriptionTile></div>
    
        <div className = "projectImg"><img src = {J_typePic} alt = "Mips Picture" /></div>
        <div className ="tile"> <ProjectDescriptionTile project = "MIPS Processor">Integer molestie iaculis consectetur. Quisque non diam arcu. Nam sed euismod quam. Etiam imperdiet dolor enim, vel imperdiet purus maximus.</ProjectDescriptionTile></div>
    </div>
    <div className="projects_Footer"><ViewMoreButton style="button_container_large" phrase="View more recent projects" /></div>
    
  </Layout>
)

export default IndexPage
