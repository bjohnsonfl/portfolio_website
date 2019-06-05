import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import ProjectPopUp from "./projectPopUp.js"
import "./styles/projectDescriptionTab.css"

//images
import github from "../images/GitHub-Mark-64px.png"

//import { link } from "fs";

class ProjectDescriptionTab extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false}

    
    }
   

    open = (e) => {
        
        
        document.body.style.overflow = "hidden";

        //Find all elements with react-reveal and turn off their transitions
        var elements = document.getElementsByClassName("react-reveal");
        for(var i =0, n = elements.length;i<n;i++){
             elements[i].style.cssText += "animation-name: noname !important"
        }

        //Turn off all tab hovers
        var newElements = document.getElementsByClassName("tab_Grid_Container");
            console.log(newElements)
        var n = newElements.length;
        for(var i =n-1;i>=0;i--){  
                newElements[i].className = "tab_Grid_Container_noHover";
            console.log(newElements.length)
       }


        this.setState({show: true});
    }

    close = (e) => {
        document.body.style.overflow = "scroll";
        var elem = document.getElementsByClassName("pop_Up_Container");
        elem[0].style.cssText = "animation: fadeOut 200ms forwards";
       
       
       
        setTimeout(() =>{
            this.setState({show: false})
            var newElements = document.getElementsByClassName("tab_Grid_Container_noHover");
            var n = newElements.length;
            for(var i =n-1;i>=0;i--){  
                newElements[i].className = "tab_Grid_Container";
            console.log(newElements.length)
            }
        },200);

    }

    openDiv = (e) => {
        if(window.innerWidth <= 750){ 
            var elements = document.getElementsByClassName("react-reveal");
            for(var i =0, n = elements.length;i<n;i++){
                 elements[i].style.cssText += "animation-name: noname !important"
            }
            document.body.style.overflow = "hidden";

            //Turn off all tab hovers
            var newElements = document.getElementsByClassName("tab_Grid_Container");
            console.log(newElements)
            var n = newElements.length;
            for(var i =n-1;i>=0;i--){  
                newElements[i].className = "tab_Grid_Container_noHover";
            console.log(newElements.length)
   }
            this.setState({show: true});
       
        }
        console.log("openDiv");
    }

    render (){ return(
        <div className="tab_Grid_Container" >
            <div className="tab_Button"><ViewMoreButton style="button_container_tab" buttonStyle="viewButton_Tab" phrase="Learn More" clicked = {this.open}/></div>
            <div className="tab_Name" onClick = {this.openDiv}><h2>{this.props.projectName}</h2></div>
            <div className="tab_Description" onClick = {this.openDiv}>{this.props.children}</div>
            <div className="tab_Icon"><img src ={github} alt = "Github Link"></img></div>
            {this.state.show  ? <ProjectPopUp projectName = {this.props.projectName} clicked = {this.close}/> : <div></div>}     
        </div>

       

    )};
}

/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac dui efficitur, aliquam turpis vitae, fringilla eros. Praesent malesuada sit.

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