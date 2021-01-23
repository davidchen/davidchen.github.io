import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SiteHead from "../components/siteHead"

const NotFound = () => {
  return (
    <Layout>
      <SiteHead title="404" />
      <h1>Page not found</h1>
      <Link to="/">Head home</Link>
    </Layout>
  )
}

export default NotFound
