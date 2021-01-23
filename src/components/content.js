import React from "react"
import Hero from "./content/hero"
import About from "./content/about"
import Projects from "./content/projects"
import Experience from "./content/experience"
import Contact from "./content/contact"

const Content = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </React.Fragment>
  )
}

export default Content
