import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "@components/shared/header"
import AppList from "@components/module/projects/app-list"
import "./styles.scss"

const Project = ({ project }) => {
  return (
    <div className="col-md-3 col-sm-12 project-container">
      <a
        className="project card"
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <p className="card-title">{project.name}</p>
          <span className="project-language">{project.language}</span>
          <p className="card-text">{project.description}</p>
        </div>
      </a>
    </div>
  )
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }
  }

  filterProjects(projects) {
    return projects.filter(project => {
      return !project.archived && !project.fork
    })
  }

  componentDidMount() {
    fetch("https://api.github.com/users/gokuldroid/repos")
      .then(res => res.json())
      .then(this.filterProjects)
      .then(data => {
        console.log(data)
        this.setState({ projects: data })
      })
      .catch(console.log)
  }

  render() {
    const projects = this.state.projects.map(project => (
      <Project project={project} key={project.id} />
    ))
    return (
      <div className="projects">
        <div className="projects-container row">
          <h3 className="p-4">Android apps</h3>
          <AppList />
        </div>
        <div className="projects-container row">
          <h3 className="p-4">Github projects</h3>
          {projects}
        </div>
      </div>
    )
  }
}

const Layout = props => (
  <>
    {props.children}
    <Header />
    <Projects />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
