import React from "react"
import ViewMoreButton from "../components/viewMoreButton.js"
import ProjectPopUp from "./projectPopUp.js"
import Fade from 'react-reveal/Fade';
import "./styles/projectDescriptionTile.css"
import { delay } from "q";


class ProjectDescriptionTile extends React.Component{
    constructor(props){
        super(props);
        this.state = { show: false}

    
    }
   

    open = (e) => {
        
        
        document.body.style.cssText= "overflow: hidden;";
        //var elements = document.getElementsByClassName("react-reveal");
       // for(var i =0, n = elements.length;i<n;i++){
         //   elements[i].style.cssText += "animation-fill-mode: none !important; animation-duration: 0ms !important";
          //  }
          var elements = document.getElementsByClassName("react-reveal");
          for(var i =0, n = elements.length;i<n;i++){
               elements[i].style.cssText += "animation-name: noname !important"
          }
        this.setState({show: true});

    }

    close = (e) => {
        document.body.style.overflow = "scroll";   
        var elem = document.getElementsByClassName("pop_Up_Container");
        elem[0].style.cssText = "animation: fadeOut 200ms forwards";
        setTimeout(() =>{this.setState({show: false})},200);
    }

    openDiv = (e) => {
        if(window.innerWidth <= 750){ 
            document.body.style.overflow = "hidden";
            var elements = document.getElementsByClassName("react-reveal");
            console.log(elements.length);
            console.log("here");
            for(var i =0, n = elements.length;i<n;i++){
                //elements[i].style.cssText += "animation-fill-mode: none !important; animation-duration: 0ms !important";
                var newClassName = elements[i].className.replace("react-reveal", "");
                elements[i].removeAttribute('style');
                elements[i].className = newClassName;
                console.log("here");
                
            }
            this.setState({show: true});
            
        }
    }
   

    render() { return(
        
        <div className = "tile_container">
            <div className ="tile_project"><h1>{this.props.project}</h1></div>
            <div className ="tile_description"><p>{this.props.children}</p></div>
            <div className ="tile_button"><ViewMoreButton style = "button_container" phrase="Learn More" clicked = {this.open}/></div>
            {this.state.show  ? <ProjectPopUp projectName = {this.props.projectName} clicked = {this.close}/> : <div></div>}
        </div>
        
    )};







}



export default ProjectDescriptionTile



/*

const ProjectDescriptionTile = (props) => (
    <div className = "tile_container">
        <div className ="tile_project"><h1>{props.project}</h1></div>
        <div className ="tile_description"><p>{props.children}</p></div>
        <div className ="tile_button"><ViewMoreButton style = "button_container" phrase="Learn More"/></div>
    </div>
)



*/