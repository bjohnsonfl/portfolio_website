import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/footer.css"
import github from "../images/GitHub-Mark-Light-64px.png"
import linkedin from "../images/In-White-96@2x.png"
import mail from "../images/mail.png"
import lichess from "../images/lichess_icon.svg"

const Footer = () => (
    <footer>
        
        <div className="footer_words">
            <p> Thank you for visiting my website. Please make sure to view all my projects, read more about me, and visit my social medias!</p>
        </div>
        <div className = "footer_Icons_Row">
            <img src = {lichess} alt = "lichess" id = "lichess" width = "50px" height = "50px"/>  
            <a href ="https://www.github.com"><img src = {github} width = "45px" height = "45px" alt = "github" /> </a>
            <a href ="https://www.github.com"><img src = {linkedin} width = "45px" height = "45px" alt = "linkedin" /> </a>
            <img src = {mail} alt = "mail" />
            
        </div>
        
    </footer>
)

/*
Footer.propTypes = {
siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
*/

export default Footer