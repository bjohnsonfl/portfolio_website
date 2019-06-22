import React from "react"
import { navigate } from "gatsby"
import Fade from 'react-reveal/Fade';


import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewMoreButton from "../components/viewMoreButton.js"
import ProjectDescriptionTile from "../components/projectDescriptionTile.js"

//images
import chessPic from "../images/chessPic.jpg"
import iphonePic from "../images/iphone.jpg"
import J_typePic from "../images/J_type.png"

import "./styles/index.css"

const linkToProject = (e) => {
    //window.location = "/projects"
    navigate("/projects");
}

const IndexPage = () => (
  <Layout headerDelay = {500}>
    <SEO title="Home" />
    <Fade duration = {1500}>
    <div className="landing_Page_Intro">
      <p>Hello, I am a Computer Engineer from the University of Florida interested in software engineering roles. </p>
    </div>
    </Fade>
   <div className ="projects_Header"> <Fade><h1>Projects</h1></Fade></div>
    
    <div className = "landing_Page_Projects">
        <Fade duration = {2000}><div className = "projectImg proImg_1"><img src = {chessPic} alt = "Chess Picture" /></div></Fade>
        <Fade><div className ="tile proTile_1"> <ProjectDescriptionTile projectName="Overhead" project = "Overhead">Sed iaculis mi in urna lacinia gravida. Praesent id consequat massa. Mauris vel pharetra quam, eget auctor ante. Donec ultrices tincidunt ultricies. In hac habitasse platea dictumst. </ProjectDescriptionTile></div></Fade>
    
        <Fade duration = {2000}><div className = "projectImg proImg_2"><img src = {iphonePic} alt = "iPhone Picture" /></div></Fade>
        <Fade><div className ="tile proTile_2"> <ProjectDescriptionTile projectName="iPhone" project = "Lorem Ipsum">Morbi dictum dui lectus, nec ullamcorper quam vulputate ac. Nulla efficitur libero leo, eu lacinia odio faucibus sit amet.</ProjectDescriptionTile></div></Fade>
    
        <Fade duration = {2000}><div className = "projectImg proImg_3"><img src = {J_typePic} alt = "Mips Picture" /></div></Fade>
        <Fade><div className ="tile proTile_3"> <ProjectDescriptionTile projectName="Mips" project = "MIPS Processor">Integer molestie iaculis consectetur. Quisque non diam arcu. Nam sed euismod quam. Etiam imperdiet dolor enim, vel imperdiet purus maximus.</ProjectDescriptionTile></div></Fade>
    </div>
    <Fade><div className="projects_Footer"><ViewMoreButton style="button_container_large" phrase="View more recent projects" clicked = {linkToProject}/></div></Fade>
    
  </Layout>
)

export default IndexPage



/*

  <Layout headerDelay = {500}>
    <SEO title="Home" />
    <Fade>
    <div className="landing_Page_Intro">
      <p>Hello, I am a Computer Engineer from the University of Florida interested in software devlopment roles. </p>
    </div>
    </Fade>
   <div className ="projects_Header"> <Fade><h1>Projects</h1></Fade></div>
    
    <div className = "landing_Page_Projects">
        <Fade duration = {2000}><div className = "projectImg"><img src = {chessPic} alt = "Chess Picture" /></div></Fade>
        <div className ="tile"> <ProjectDescriptionTile projectName="Overhead" project = "Overhead">Sed iaculis mi in urna lacinia gravida. Praesent id consequat massa. Mauris vel pharetra quam, eget auctor ante. Donec ultrices tincidunt ultricies. In hac habitasse platea dictumst. </ProjectDescriptionTile></div>
    
        <Fade duration = {2000}><div className = "projectImg"><img src = {iphonePic} alt = "iPhone Picture" /></div></Fade>
        <div className ="tile"> <ProjectDescriptionTile projectName="iPhone" project = "Lorem Ipsum">Morbi dictum dui lectus, nec ullamcorper quam vulputate ac. Nulla efficitur libero leo, eu lacinia odio faucibus sit amet.</ProjectDescriptionTile></div>
    
        <Fade duration = {2000}><div className = "projectImg"><img src = {J_typePic} alt = "Mips Picture" /></div></Fade>
        <div className ="tile"> <ProjectDescriptionTile projectName="Mips" project = "MIPS Processor">Integer molestie iaculis consectetur. Quisque non diam arcu. Nam sed euismod quam. Etiam imperdiet dolor enim, vel imperdiet purus maximus.</ProjectDescriptionTile></div>
    </div>
    <Fade><div className="projects_Footer"><ViewMoreButton style="button_container_large" phrase="View more recent projects" clicked = {linkToProject}/></div></Fade>
    
  </Layout>

*/