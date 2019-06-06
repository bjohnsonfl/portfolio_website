/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"




import Header from "./header"
import Footer from "./footer"
import "./styles/layout.css"

class Layout extends React.Component {
  
  componentDidMount(){
    console.log("enter " + this.props.headerBar);
   // if(this.props.headerBar && window.innerWidth >= 750){
     // document.getElementById(this.props.headerBar).style.display="block";
     if(this.props.headerBar){
      document.getElementById(this.props.headerBar).className = "select_Bar_show";
      document.getElementById(this.props.headerBar).previousSibling.className = "select_Bar_Word";
    }
  }
  componentWillUnmount(){
    console.log("exit " + this.props.headerBar);
    //if(this.props.headerBar && window.innerWidth >= 750){
       //document.getElementById(this.props.headerBar).style.display = "none";
       if(this.props.headerBar){
       document.getElementById(this.props.headerBar).className = "select_Bar_hide";
       document.getElementById(this.props.headerBar).previousSibling.className = "";      
      }  
  }
  
  render(){ return(
      <>
        <Header  headerDelay = {this.props.headerDelay}  />
       
          <main>{this.props.children}</main>
        <Footer />
        
      </>
      )};
  }



export default Layout
//siteTitle={data.site.siteMetadata.title}