import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'

const Pages = () => (
  <div className="collapse navbar-collapse justify-content-end">
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/apps">Apps</Link></li>
    </ul>
  </div>
);


const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-container fixed-top">
    <Link className="navbar-brand" to="/"> Gokul <span>| Droid</span></Link>
    <Pages />
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header