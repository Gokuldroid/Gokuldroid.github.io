import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles.scss"

function PaginationLinks(props) {
  let low = Math.max(props.currentPage - 2, 1)
  let high = Math.min(props.currentPage + 2, props.totalPages)
  let items = []
  for (let itr = low; itr <= high; itr++) {
    let pageLink = props.path(itr)
    items.push(
      <Link
        to={pageLink}
        className={`btn btn-${
          props.currentPage === itr ? "" : "outline-"
        }primary`}
        key={itr}
      >
        {itr}
      </Link>
    )
  }
  return items
}

const Pagination = props => {
  return (
    <div className="pagination-container">
      <div className="d-flex justify-content-center m-3">
        <div class="btn-group" role="group">
          {props.previousPage ? (
            <Link
              to={props.previousPage}
              className="btn btn-outline-primary"
              aria-label="Next"
              key="Previous"
            >
              Previous
            </Link>
          ) : null}
          {PaginationLinks(props)}
          {props.nextPage ? (
            <Link
              to={props.nextPage}
              className="btn btn-outline-primary"
              aria-label="Next"
              key="Next"
            >
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  path: PropTypes.func,
}

export default Pagination
