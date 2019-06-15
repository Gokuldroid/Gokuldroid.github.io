import React from "react"
import "../styles/app.scss"

import Projects from "@components/module/projects"
import SEO from "@components/seo"

const ProjectsPage = () => (
  <Projects>
    <SEO title="Projects" keywords={[`android`, `gokul prabhu`, `full stack developer`,]} />
  </Projects>
)

export default ProjectsPage