import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "@components/shared/header"
import Footer from "@components/shared/footer"
import AppList from "@components/module/projects/app-list"

const Project = ({ project }) => (
  <a
    className="card-surface group flex h-full flex-col p-5 transition-colors hover:border-accent"
    href={project.html_url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p className="font-semibold transition-colors group-hover:text-accent">
      {project.name}
    </p>
    {project.language && (
      <span className="tag mt-2 self-start">{project.language}</span>
    )}
    <p className="mt-3 text-sm leading-relaxed text-muted">
      {project.description}
    </p>
  </a>
)

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [] }
  }

  filterProjects(projects) {
    return projects.filter(project => !project.archived && !project.fork)
  }

  componentDidMount() {
    fetch("https://api.github.com/users/gokuldroid/repos")
      .then(res => res.json())
      .then(this.filterProjects)
      .then(data => this.setState({ projects: data }))
      .catch(console.log)
  }

  render() {
    return (
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28">
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Android apps
          </h2>
          <AppList />
        </section>
        <section>
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            GitHub projects
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {this.state.projects.map(project => (
              <Project project={project} key={project.id} />
            ))}
          </div>
        </section>
      </main>
    )
  }
}

const Layout = props => (
  <>
    {props.children}
    <Header />
    <Projects />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
