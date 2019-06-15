import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'
import JBootstrap from "@components/shared/jbootstrap"

const Pages = () => (
  <div className="collapse navbar-collapse justify-content-end" id='collapse-content'>
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/apps">Apps</Link></li>
    </ul>
  </div>
);


const Header = () => (
  <>
    <JBootstrap/>
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-container fixed-top navbar-light">
      <Link className="navbar-brand" to="/"> Gokul <span>| Droid</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-content" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Pages />
    </nav>
  </>
)

export default Header