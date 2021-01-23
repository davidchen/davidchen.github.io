import React from "react"
import Layout from "../components/layout"
import SiteHead from "../components/siteHead"

const ContactPage = () => {
  return (
    <Layout>
      <SiteHead title="Contact" />
      <h1>Contact</h1>
      <h2>Call me at 123-456-7890!</h2>
      <p>
        <a href="http://www.google.com" target="_blank" rel="noreferrer">
          Here's my Google link
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
