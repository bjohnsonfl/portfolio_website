import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import "./styles/projectDescriptionTile.css"

const ProjectDescriptionTile = (props) => (
    <div className = "tile_container">
        <div className ="tile_project"><h1>{props.project}</h1></div>
        <div className ="tile_description"><p>{props.children}</p></div>
        <div className ="tile_button"><ViewMoreButton style = "button_container" phrase="Learn More"/></div>
    </div>
)

export default ProjectDescriptionTile