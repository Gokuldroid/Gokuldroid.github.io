import React from "react"
import { FiChevronDown } from "react-icons/fi"

const Contents = ({ tableOfContents }) => (
  <div
    className="toc-body"
    dangerouslySetInnerHTML={{ __html: tableOfContents }}
  />
)

const TableOfContents = ({ tableOfContents, mobile = false }) => {
  if (!tableOfContents || !tableOfContents.includes("<li")) return null

  if (mobile) {
    return (
      <details className="mobile-toc">
        <summary>
          <span>On this page</span>
          <FiChevronDown aria-hidden="true" />
        </summary>
        <Contents tableOfContents={tableOfContents} />
      </details>
    )
  }

  return (
    <nav className="desktop-toc" aria-label="Table of contents">
      <p>On this page</p>
      <Contents tableOfContents={tableOfContents} />
    </nav>
  )
}

export default TableOfContents
