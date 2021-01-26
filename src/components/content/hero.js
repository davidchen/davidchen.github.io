import React from "react"

const Hero = () => {
  return (
    <div className="row hero-container-row container-row">
      <div className="col my-auto">
        <p className="hero-intro-hello">Hi, my name is</p>
        <h1 className="hero-intro-name mb-0">David Chen,</h1>
        <h1 className="hero-intro-desc">and I enhance lives via tech.</h1>
        <div className="row">
          <div className="col-7">
            <p className="hero-intro-snippet">
              I design, code, and create extraordinary apps for peoples, places,
              and things on the World Wide Web.
            </p>
          </div>

          <div className="col-12 text-center">
            <button className="portfolio-button mt-5">
              <p>Take A Look</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
