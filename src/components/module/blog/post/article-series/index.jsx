import React from "react"
import { Link } from "gatsby"
import Post from "../../../../../model/post"

const ArticleSeries = (props) => {
  const parentNode = props.parentPost
  const currentPost = new Post(props.currentPost)
  const childPosts = props.siblingPosts.edges
    .map((siblingPost) => siblingPost.node)
    .map((childNode) => new Post(childNode, parentNode))

  return (
    <section className="article-series" aria-labelledby="series-heading">
      <p id="series-heading">In this series</p>
      <ol>
        {childPosts.map((childPost, index) => {
          const isCurrent = currentPost.path === childPost.path
          const inner = (
            <span className="series-item">
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{childPost.title}</span>
            </span>
          )
          return (
            <li key={childPost.path}>
              {isCurrent ? (
                <span className="is-current" aria-current="page">
                  {inner}
                </span>
              ) : (
                <Link to={childPost.getPostLink()}>{inner}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default ArticleSeries
