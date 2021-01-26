import React from "react"
import Navbar from "../components/navbar"
import Content from "../components/content"
import Logobar from "../components/logobar"
import SiteHead from "../components/siteHead"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SiteHead />

      <div className="container-fluid">
        <div className="row">
          <div className="col-1" />

          <div className="col">
            <Logobar />
          </div>

          <div className="col-5">
            <Content />
          </div>

          <div className="col">
            <Navbar />
          </div>

          <div className="col-1" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
