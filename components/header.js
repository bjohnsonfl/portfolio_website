import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Fade from 'react-reveal/Fade';
import "./styles/header.css"

const Header = (props) => (
  <header className="nav_bar_header">
    <nav className="nav_bar">
     
        <Fade left delay = {0 + props.headerDelay}>
        
          {//<div className="nav_bar_name"><a href = "/">Blake Johnson</a></div>
          }
          <div className="nav_bar_name"><Link to ="/">Blake Johnson</Link></div>
          

      </Fade>
       
        <div className="nav_bar_space" />
       
        <Fade right>
        
         <ul className="nav_bar_items">
            <li>
              <Link to = "/bio">Bio</Link>
              <div id = "bioBar" className ="select_Bar"></div>
            </li>
            <li>
              <Link to = "/projects">Projects</Link>
              <div id = "projectsBar" className ="select_Bar"></div>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
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
