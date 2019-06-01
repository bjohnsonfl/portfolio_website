import React from "react"
import "./styles/ViewMoreButton.css"

const ViewMoreButton = (props) => (

    <div className = {props.style}>
        <button className={`viewButton ${props.buttonStyle}`} >{props.phrase}</button>
    </div>
)

//{`pill ${ this.props.styleName }`}>

export default ViewMoreButton