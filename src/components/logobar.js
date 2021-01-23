import React from "react"

import logo from "../../static/logo.svg"

const Logobar = () => {
  return (
    <div className="sticky-top">
      <div className="text-left logo-container pt-5">
        <img className="logobar-logo" src={logo} alt="DC's logo" />
      </div>
    </div>
  )
}

export default Logobar
