import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDescriptionTab from "../components/projectDescriptionTab"
 
import "./styles/projects.css"
import { checkPropTypes } from "prop-types";
const offset = 500;

const Projects = () => (
    <Layout headerBar = {"projectsBar"}>
      <SEO title="Home" />
      <Fade>
      <div className="project_Header">
          <h1>Projects</h1>
          <p>These projects are a combination of course work, personal ventures, and practice exercises for myself. Click the Github icon to be taken to the source code’s repository.  Course work projects do not have links to prevent current students at UF from discovering solutions. </p>
      </div>
      </Fade>

        <div className="project_Grid_Wrapper">
          <Fade delay = {  0 + offset}><ProjectDescriptionTab projectName = "Overhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {100 + offset}><ProjectDescriptionTab projectName = "iPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {200 + offset}><ProjectDescriptionTab projectName = "Mips">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {300 + offset}><ProjectDescriptionTab projectName = "Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {400 + offset}><ProjectDescriptionTab projectName = "Ipsum" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {500 + offset}><ProjectDescriptionTab projectName = "Foo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>

          
        </div>
      
    </Layout>
)

export default Projects


/*
          <Fade><ProjectDescriptionTab projectName = "Overhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {100}><ProjectDescriptionTab projectName = "iPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {200}><ProjectDescriptionTab projectName = "Mips">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {300}><ProjectDescriptionTab projectName = "Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {400}><ProjectDescriptionTab projectName = "Ipsum" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>
          <Fade delay = {500}><ProjectDescriptionTab projectName = "Foo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></Fade>




          <ProjectDescriptionTab projectName = "Overhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>
          <ProjectDescriptionTab projectName = "iPhone">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>
          <ProjectDescriptionTab projectName = "Mips">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>
          <ProjectDescriptionTab projectName = "Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>
          <ProjectDescriptionTab projectName = "Ipsum" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>
          <ProjectDescriptionTab projectName = "Foo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab>



*/