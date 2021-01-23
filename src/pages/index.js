import React from "react"
import Navbar from "../components/navbar"
import Content from "../components/content"
import Logobar from "../components/logobar"

const IndexPage = () => {
  return (
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

    //
    // <Layout>
    //   <p>This is the prop for layout</p>
    //   {/*<Head title="Home" />*/}
    //   {/*<h1>Hello,</h1>*/}
    //   {/*<h2 className="circular-italic">I'm David, an engineer living in NYC!</h2>*/}
    // </Layout>
  )
}

export default IndexPage
