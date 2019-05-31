import React from "react"
import "./styles/ViewMoreButton.css"

const ViewMoreButton = (props) => (

    <div className = {props.style}>
        <button className="viewButton" >{props.phrase}</button>
    </div>
)



export default ViewMoreButton