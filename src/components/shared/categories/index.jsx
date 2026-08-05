import { Link } from "gatsby"
import React from "react"
import { FiChevronDown } from "react-icons/fi"

const Categories = ({ categories, currentCategory }) => {
  const sortedCategories = categories
    .slice()
    .sort((cat1, cat2) => cat1.name.localeCompare(cat2.name))

  return (
    <details className="topic-browser">
      <summary>
        <span>Browse the index</span>
        <span>
          {sortedCategories.length} topics
          <FiChevronDown aria-hidden="true" />
        </span>
      </summary>
      <nav className="topic-grid" aria-label="Blog categories">
        <Link
          className={`topic-link${currentCategory === "all" ? " is-active" : ""}`}
          aria-current={currentCategory === "all" ? "page" : undefined}
          to="/"
        >
          <span>All writing</span>
          <span>Index</span>
        </Link>
        {sortedCategories.map((category) => {
          const active = category.name.toLowerCase() === currentCategory
          return (
            <Link
              className={`topic-link${active ? " is-active" : ""}`}
              aria-current={active ? "page" : undefined}
              to={`/blog/category/${category.name}/`}
              key={category.name}
            >
              <span>{category.name}</span>
              <span>{String(category.count).padStart(2, "0")}</span>
            </Link>
          )
        })}
      </nav>
    </details>
  )
}

export default Categories
