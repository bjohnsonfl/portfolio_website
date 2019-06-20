import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDescriptionTab from "../components/projectDescriptionTab"
 
import "./styles/projects.css"
import { checkPropTypes } from "prop-types";
const offset = 500;

const Projects = (props) => (
    <Layout headerBar = {"projectsBar"}>
      <SEO title="Home" />
      <Fade>
      <div className="project_Header">
          <h1>Projects</h1>
          <p>These projects are a combination of course work, personal ventures, and practice exercises for myself. Click the Github icon to be taken to the source code’s repository.  Course work projects do not have links to prevent current students at UF from discovering solutions. </p>
      </div>
      </Fade>
            {//************ IE FIX LOOK AT THE NEW DIV WRAPPERS FOR PROJECT TABS ********************** 
            }
        <div className="project_Grid_Wrapper">
          <Fade delay = {  0 + offset}><div className = "proj proj_1" ><ProjectDescriptionTab className = "proj_1" projectName = "Overhead" hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>
          <Fade delay = {100 + offset}><div className = "proj proj_2" ><ProjectDescriptionTab className = "proj_2" projectName = "iPhone"   hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>
          <Fade delay = {200 + offset}><div className = "proj proj_3" ><ProjectDescriptionTab className = "proj_3" projectName = "Mips"     hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>
          <Fade delay = {300 + offset}><div className = "proj proj_4" ><ProjectDescriptionTab className = "proj_4" projectName = "Lorem"    hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>
          <Fade delay = {400 + offset}><div className = "proj proj_5" ><ProjectDescriptionTab className = "proj_5" projectName = "Ipsum"    hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>
          <Fade delay = {500 + offset}><div className = "proj proj_6" ><ProjectDescriptionTab className = "proj_6" projectName = "Foo"      hashName = {props.location.hash}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</ProjectDescriptionTab></div></Fade>

          
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