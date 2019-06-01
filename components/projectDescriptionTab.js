import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import "./styles/projectDescriptionTab.css"

const ProjectDescriptionTab = (props) => (
    <div className="tab_Grid_Container">
        <div className="tab_Button"><ViewMoreButton buttonStyle="viewButton_Tab" phrase="Learn More"/></div>
        <div className="tab_Name">name</div>
        <div className="tab_Description">description</div>
        <div className="tab_Icon">icon</div>
    </div>
)

export default ProjectDescriptionTab