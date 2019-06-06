import { Link } from "gatsby"
import { navigate } from "gatsby"
import React from "react"
import Fade from 'react-reveal/Fade';
import "./styles/header.css"


class Header extends React.Component{

  navClicked = (e) => {
    if(window.innerWidth < 750 || true){
            if(document.getElementsByClassName("nav_bar_items_show")[0]){
              document.getElementsByClassName("hamburger_Blur")[0].style.display = "none";
              document.getElementsByClassName("nav_bar_items_show")[0].className = "nav_bar_items_hide";
              document.body.style.overflow = "scroll";

            }
     switch(e)
        {
          
          case "toBio":
              navigate("/bio");
              break;
          case "toProjects":
              navigate("/projects");
              break;
          case "toContact":
              navigate("/contact");
              break;
          case "hamBlur":
             // document.getElementsByClassName("hamburger_Blur")[0].style.display = "none";
              //document.getElementsByClassName("nav_bar_items")[0].style.display = "none";
             // document.getElementsByClassName("nav_bar_items_show")[0].className = "nav_bar_items_hide";
              document.body.style.overflow = "scroll";
              break
          case "ham":
              document.getElementsByClassName("hamburger_Blur")[0].style.display = "block";
              document.getElementsByClassName("nav_bar_items_hide")[0].className = "nav_bar_items_show";
              document.body.style.overflow = "hidden";
              //document.getElementsByClassName("nav_bar_items")[0].style.display = "flex";
            break;

            
        }
    }
}

  render(){return(
    <header className="nav_bar_header">
      <nav className="nav_bar">
      
          <Fade left delay = {0 + this.props.headerDelay}>
          
            {//<div className="nav_bar_name"><a href = "/">Blake Johnson</a></div>
            }
            <div className="nav_bar_name"><Link to ="/">Blake Johnson</Link></div>
            

        </Fade>
        
          <div className="nav_bar_space" />
        
          <Fade right delay = {0 + this.props.headerDelay}>
          
          <ul className="nav_bar_items_hide">
              <li id="toBio" className="nav_drop_down_item" onClick = {() => this.navClicked("toBio")}>
                <Link to = "/bio" replace>Bio</Link>
                <div id = "bioBar" className ="select_Bar"></div>
              </li>
              <li id="toProjects" className="nav_drop_down_item" onClick = {() => this.navClicked("toProjects")}>
                <Link to = "/projects">Projects</Link>
                <div id = "projectsBar" className ="select_Bar"></div>
              </li>
              <li id="toContact" className="nav_drop_down_item" onClick = {() => this.navClicked("toContact")}>
                <Link to = "/contact">Contact</Link>
                <div id = "contactBar" className ="select_Bar"></div>
              </li>
           </ul>
           </Fade>
           
           <Fade right delay = {0 + this.props.headerDelay}>
           
            <div id="ham" className="hamburger_Wrapper" onClick = {() => this.navClicked("ham")}>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
                <div className = "hamburger"></div>
            </div>
            </Fade>
            {//<Fade right delay = {0 + this.props.headerDelay}>
            }
              <div id="hamBlur" className="hamburger_Blur" onClick = {() => this.navClicked("hamBlur")}></div>
            
      </nav>
    </header>
  )};
}
// <Fade duration = {1500} delay = {0 + props.headerDelay}>



export default Header
