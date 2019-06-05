import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Fade from 'react-reveal/Fade';
import "./styles/header.css"

const Header = (props) => (
  <header className="nav_bar_header">
    <nav className="nav_bar">
     
        <Fade left delay = {0 + props.headerDelay}>
          <div className="nav_bar_name"><a href = "/">Blake Johnson</a></div>
        </Fade>
        <div className="nav_bar_space" />
       
        <Fade right>
          <ul className="nav_bar_items">
            <li>
              <a href = "/bio">Bio</a>
              <div id = "bioBar" className ="select_Bar"></div>
            </li>
            <li>
              <a href = "/projects">Projects</a>
              <div id = "projectsBar" className ="select_Bar"></div>
            </li>
            <li>
              <a href = "/contact">Contact</a>
              <div id = "contactBar" className ="select_Bar"></div>
            </li>
         
          </ul>
          </Fade>
       
    </nav>
  </header>
)
// <Fade duration = {1500} delay = {0 + props.headerDelay}>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
