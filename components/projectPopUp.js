import React from "react"
import viewMoreButton from "./viewMoreButton.js"
import "./styles/projectPopUp.css"
import ViewMoreButton from "./viewMoreButton.js";



class ProjectPopUp extends React.Component{




    render(props){ return(
        <div className="pop_Up_Container">
            <div className="example"></div>
            <div className= "text">
                <ViewMoreButton style = "button_container" phrase="close" clicked = {this.props.clicked}/>
            </div>
        </div>
    )};
}

export default ProjectPopUp