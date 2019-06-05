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

const Layout = (props) => (
  

    

   
      <>
        <Header  headerDelay = {props.headerDelay} headerBar = {props.headerBar} />
       
          <main>{props.children}</main>
        <Footer />
        
      </>
    
  
)



export default Layout
//siteTitle={data.site.siteMetadata.title}