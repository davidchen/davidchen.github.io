import React, { useEffect, useState } from "react"

const Navbar = () => {
  const sections = ["Home", "About", "Projects", "Experience", "Contact"]

  const [currentSection, setCurrentSection] = useState("Home")
  const [currentYPos, setCurrentYPos] = useState(window.scrollY)
  const yPosRef = React.useRef(currentYPos)
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight)

  let sectionHeights = sections.map(
    (item, index) => index * currentHeight - currentHeight * 0.3
  )

  const handleScroll = () => {
    // handles scroll and calculates current section based on y position
    yPosRef.current = window.scrollY
    setCurrentYPos(yPosRef.current)

    for (let [idx, tempSection] of sections.entries()) {
      if (yPosRef.current >= sectionHeights[idx]) {
        setCurrentSection(tempSection)
      } else {
        return
      }
    }
  }

  const handleHeightChange = () => {
    setCurrentHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleHeightChange)
    return () => {
      // clean-up event listener
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleHeightChange)
    }
  }, [])

  return (
    <div className="sticky-top">
      <div className="text-right nav-links pt-5">
        {/*<div>Current Y Position: {currentYPos}</div>*/}
        {/*<div>Current Height: {currentHeight}</div>*/}
        {/*<div>Current section: {currentSection}</div>*/}

        {sections.slice(1).map(section => {
          return (
            <React.Fragment>
              <button
                className={`nav-link-button ${
                  section === currentSection ? "nav-button-active" : ""
                }`}
              >
                <p className="nav-link">{section}</p>
              </button>
              <br />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
