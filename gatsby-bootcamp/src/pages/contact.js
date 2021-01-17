import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h2>Call me at 123-456-7890!</h2>
      <p>
        <a href="http://www.google.com" target="_blank">
          Here's my Google link
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
