import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "@components/shared/header"
import Footer from "@components/shared/footer"
import AppList from "@components/module/projects/app-list"
import {
  FiArrowUpRight,
  FiGithub,
  FiStar,
  FiTerminal,
} from "react-icons/fi"

const FeaturedCommando = () => (
  <section
    className="projects-section commando-project"
    aria-labelledby="commando-heading"
  >
    <header className="section-heading">
      <p>Featured developer tool</p>
      <h2 id="commando-heading">Commando</h2>
    </header>

    <div className="commando-feature">
      <div className="commando-intro">
        <div className="commando-copy">
          <p className="commando-label">
            <FiTerminal aria-hidden="true" />
            Context-aware command launcher
          </p>
          <h3>Find the right command without leaving your terminal.</h3>
          <p>
            Commando brings project commands, cheats, bookmarks, and shell
            history into one context-aware fuzzy TUI.
          </p>
        </div>

        <div className="commando-details">
          <ul aria-label="Commando technologies">
            <li>Go</li>
            <li>Zsh / Bash / Fish</li>
            <li>Open source</li>
          </ul>
          <div className="commando-actions">
            <a
              className="commando-primary-link"
              href="https://codefromdude.com/commando/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Commando
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Gokuldroid/commando"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <a
        className="commando-demo"
        href="https://codefromdude.com/commando/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View the Commando website"
      >
        <span className="commando-demo-bar">
          <span>
            <FiTerminal aria-hidden="true" />
            commando
          </span>
          <span>Live product tour</span>
        </span>
        <img
          src="/assets/projects/commando-tour.gif"
          alt="Commando finding and running commands in an interactive terminal"
          width="1440"
          height="912"
        />
      </a>
    </div>
  </section>
)

const Project = ({ project, index }) => (
  <a
    className="repository-row group"
    href={project.html_url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="repository-number" aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </span>
    <div className="repository-copy">
      <h3>
        {project.name}
        <FiArrowUpRight aria-hidden="true" />
      </h3>
      <p>{project.description || "Open-source project on GitHub."}</p>
    </div>
    <div className="repository-meta">
      {project.language && <span>{project.language}</span>}
      {project.stargazers_count > 0 && (
        <span>
          <FiStar aria-hidden="true" />
          {project.stargazers_count}
        </span>
      )}
    </div>
  </a>
)

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { projects: [], status: "loading" }
  }

  filterProjects(projects) {
    return projects
      .filter((project) => !project.archived && !project.fork)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
  }

  componentDidMount() {
    fetch("https://api.github.com/users/gokuldroid/repos")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub returned ${res.status}`)
        return res.json()
      })
      .then(this.filterProjects)
      .then((data) => this.setState({ projects: data, status: "ready" }))
      .catch(() => this.setState({ status: "error" }))
  }

  render() {
    return (
      <main className="page-frame projects-page">
        <header className="projects-masthead">
          <p className="page-kicker">Projects / Selected work</p>
          <h1>Products and tools built around practical problems.</h1>
          <p>
            Android applications, developer utilities, and open-source
            experiments built from the problem outward.
          </p>
        </header>

        <FeaturedCommando />

        <section className="projects-section" aria-labelledby="apps-heading">
          <header className="section-heading">
            <p>Shipped products</p>
            <h2 id="apps-heading">Android apps</h2>
          </header>
          <AppList />
        </section>

        <section className="projects-section" aria-labelledby="github-heading">
          <header className="section-heading projects-heading">
            <div>
              <p>Open source</p>
              <h2 id="github-heading">GitHub projects</h2>
            </div>
            <a
              href="https://github.com/Gokuldroid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" />
              View profile
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </header>
          {this.state.status === "loading" && (
            <p className="repository-status">Loading repositories...</p>
          )}
          {this.state.status === "error" && (
            <p className="repository-status">
              Repositories are unavailable right now. View them directly on
              GitHub.
            </p>
          )}
          {this.state.status === "ready" && (
            <div className="repository-list">
              {this.state.projects.map((project, index) => (
                <Project project={project} index={index} key={project.id} />
              ))}
            </div>
          )}
        </section>
      </main>
    )
  }
}

const Layout = (props) => (
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
