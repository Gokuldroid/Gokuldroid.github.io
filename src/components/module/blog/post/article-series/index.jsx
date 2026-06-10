import React from "react"
import { Link } from "gatsby"
import Post from "../../../../../model/post"

const ArticleSeries = props => {
  const parentNode = props.parentPost
  const currentPost = new Post(props.currentPost)
  const childPosts = props.siblingPosts.edges
    .map(siblingPost => siblingPost.node)
    .map(childNode => new Post(childNode, parentNode))

  return (
    <div className="mt-12 rounded-xl border border-border bg-surface-2 p-5">
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
        In this series
      </p>
      <ol className="flex flex-col gap-1">
        {childPosts.map((childPost, index) => {
          const isCurrent = currentPost.path === childPost.path
          const inner = (
            <span className="flex items-baseline gap-3">
              <span className="text-sm font-semibold text-accent">
                {index + 1}.
              </span>
              <span>{childPost.title}</span>
            </span>
          )
          return (
            <li key={childPost.path}>
              {isCurrent ? (
                <span className="block rounded-lg bg-accent-soft px-3 py-2 font-medium text-accent">
                  {inner}
                </span>
              ) : (
                <Link
                  to={childPost.getPostLink()}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {inner}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ArticleSeries
