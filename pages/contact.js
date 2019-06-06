import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./styles/contact.css"

const Contact = () => (
    <Layout headerBar = {"contactBar"}>
      <SEO title="Home" />
      <div className="contact_Header">
          <h1>Contact</h1>
      </div>
      
    </Layout>
)

export default Contact