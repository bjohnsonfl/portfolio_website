import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="nav_bar_header">
    <nav className="nav_bar">
      <div className="nav_bar_name">Blake Johnson</div>
      <div className="nav_bar_space" />
      <ul className="nav_bar_items">
        <li><a href = "/">Bio</a></li>
        <li><a href = "/">Projects</a></li>
        <li><a href = "/">Contact</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
