import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const divStyle = {
  height: "70vh",
  display: "flex",
  flexDirection:  "column",
  alignItems: "center",
  justifyItems: "center"
}

const centerStyle = {
  marginTop: "20vh"
}

const centerStyle2 = {
  marginBottom: "auto"
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style = {divStyle}>
      <div style = {centerStyle}><h1>NOT FOUND</h1></div>
       <div style = {centerStyle2}><p>You just hit a route that doesn&#39;t exist...</p></div>
    </div>
    
  </Layout>
)

export default NotFoundPage
