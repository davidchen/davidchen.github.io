import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import logo from "../../static/logo.svg"

const Navbar = () => {
  return (
    <div className="sticky-top">
      <div className="text-right nav-links pt-5">
        <p className="nav-link">About</p>
        <p className="nav-link">Projects</p>
        <p className="nav-link">Experience</p>
        <p className="nav-link">Contact</p>
      </div>
    </div>

    // <header className={navbarStyles.header}>
    //   <h1>
    //     <Link to="/" className={navbarStyles.title}>
    //       {data.site.siteMetadata.title}
    //     </Link>
    //   </h1>
    //   <nav>
    //     <ul className={navbarStyles.navList}>
    //       <li>
    //         <Link
    //           className={navbarStyles.navItem}
    //           activeClassName={navbarStyles.activeNavItem}
    //           to="/"
    //         >
    //           home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={navbarStyles.navItem}
    //           activeClassName={navbarStyles.activeNavItem}
    //           to="/blog"
    //         >
    //           blog
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={navbarStyles.navItem}
    //           activeClassName={navbarStyles.activeNavItem}
    //           to="/about"
    //         >
    //           about
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           className={navbarStyles.navItem}
    //           activeClassName={navbarStyles.activeNavItem}
    //           to="/contact"
    //         >
    //           contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}

export default Navbar
