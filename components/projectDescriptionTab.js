import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import "./styles/projectDescriptionTab.css"

//images
import github from "../images/GitHub-Mark-64px.png"

const ProjectDescriptionTab = (props) => (
    <div className="tab_Grid_Container">
        <div className="tab_Button"><ViewMoreButton style="button_container_tab" buttonStyle="viewButton_Tab" phrase="Learn More"/></div>
        <div className="tab_Name"><h2>Overhead</h2></div>
        <div className="tab_Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</div>
        <div className="tab_Icon"><img src ={github} alt = "Github Link"></img></div>
    </div>
)

export default ProjectDescriptionTab