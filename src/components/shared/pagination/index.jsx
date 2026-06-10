import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const baseBtn =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3.5 text-sm font-medium transition-colors"
const inactive =
  "border-border text-muted hover:border-accent hover:text-accent"
const active = "border-accent bg-accent text-bg"

function PaginationLinks(props) {
  const low = Math.max(props.currentPage - 2, 1)
  const high = Math.min(props.currentPage + 2, props.totalPages)
  const items = []
  for (let itr = low; itr <= high; itr++) {
    items.push(
      <Link
        to={props.path(itr)}
        className={`${baseBtn} ${props.currentPage === itr ? active : inactive}`}
        key={itr}
      >
        {itr}
      </Link>
    )
  }
  return items
}

const Pagination = props => (
  <nav className="mt-12 flex flex-wrap items-center justify-center gap-2">
    {props.previousPage && (
      <Link
        to={props.previousPage}
        className={`${baseBtn} ${inactive}`}
        aria-label="Previous"
        key="Previous"
      >
        ‹ Prev
      </Link>
    )}
    {PaginationLinks(props)}
    {props.nextPage && (
      <Link
        to={props.nextPage}
        className={`${baseBtn} ${inactive}`}
        aria-label="Next"
        key="Next"
      >
        Next ›
      </Link>
    )}
  </nav>
)

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  path: PropTypes.func,
}

export default Pagination
