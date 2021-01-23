import React from "react"
import me from "../../../static/me.jpg"

const About = () => {
  return (
    <div className="row about-container-row container-row">
      <div className="col my-auto">
        <div className="row">
          <div className="col my-auto">
            <p>
              Hi, my name is David. I am a software engineer based in the New
              York City area. I enjoy designing and creating beautiful and
              highly performant products. In the end, my mission is to build
              great apps that enhance the lives of everyday people.
              <br />
              <br />
              After receiving my CS degree from Rutgers University, I worked on
              a variety of fulfilling teams and projects at Citi in Jersey City.
            </p>
          </div>

          <div className="col text-right">
            <img className="about-me-image pb-3" src={me} alt="David\'s Face" />
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <p>Here are some of the things I'm pretty good at:</p>
          </div>

          <div className="col-4 text-center">
            <p>
              something
              <br />
              something
              <br />
              something
            </p>
          </div>
          <div className="col-4 text-center">
            <p>
              something
              <br />
              something
              <br />
              something
            </p>
          </div>
          <div className="col-4 text-center">
            <p>
              something
              <br />
              something
              <br />
              something
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
