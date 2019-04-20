import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles.scss'


function PagintionLinks(props) {
  let low = Math.max(props.currentPage - 2, 1);
  let high = Math.min(props.currentPage + 2, props.totalPages);
  let items = [];
  for (let itr = low; itr <= high; itr++) {
    let pageLink = props.path(itr);
    if (props.currentPage === itr) {
      items.push(<li className="page-item active" key={itr}><Link to={pageLink} className="page-link" >{itr}</Link></li>)
    } else {
      items.push(<li className="page-item" key={itr}><Link to={pageLink} className="page-link" >{itr}</Link></li>)
    }
  }
  return items;
}

const Pagination = (props) => {
  return (
    <div className="pagination-container">
      <ul className="pagination d-flex">
        {props.previousPage ?
          <li className="page-item" key="Previous">
            <Link to={props.previousPage} className="page-link" aria-label="Next">
              Previous
            </Link>
          </li> : null
        }
        {PagintionLinks(props)}
        {props.nextPage ?
          <li className="page-item" key="Next">
            <Link to={props.nextPage} className="page-link" aria-label="Next">
              Next
            </Link>
          </li> : null
        }
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
  path: PropTypes.func
}

export default Pagination;