import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import projectPopUp from "./projectPopUp.js"
import "./styles/projectDescriptionTab.css"

//images
import github from "../images/GitHub-Mark-64px.png"
import ProjectPopUp from "./projectPopUp.js";
//import { link } from "fs";

class ProjectDescriptionTab extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false}
    
    }
   

    open = (e) => {
        console.log("hello");
        //window.location = "/";
        this.setState({show: true});
        
    }

    close = (e) => {
        this.setState({show: false});
        console.log("close");
    }

    openDiv = (e) => {
        if(window.innerWidth <= 750) this.setState({show: true});
        console.log("openDiv");
    }

    render (){ return(
        <div className="tab_Grid_Container" >
            <div className="tab_Button"><ViewMoreButton style="button_container_tab" buttonStyle="viewButton_Tab" phrase="Learn More" clicked = {this.open}/></div>
            <div className="tab_Name" onClick = {this.openDiv}><h2>Overhead</h2></div>
            <div className="tab_Description" onClick = {this.openDiv}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</div>
            <div className="tab_Icon"><img src ={github} alt = "Github Link"></img></div>
            {this.state.show  ? <ProjectPopUp clicked = {this.close}/> : <div></div>}
            
        </div>

       

    )};
}

/*
const ProjectDescriptionTab = (props) => (
    <div className="tab_Grid_Container">
        <div className="tab_Button"><ViewMoreButton style="button_container_tab" buttonStyle="viewButton_Tab" phrase="Learn More"/></div>
        <div className="tab_Name"><h2>Overhead</h2></div>
        <div className="tab_Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.</div>
        <div className="tab_Icon"><img src ={github} alt = "Github Link"></img></div>
    </div>
)

*/

export default ProjectDescriptionTab