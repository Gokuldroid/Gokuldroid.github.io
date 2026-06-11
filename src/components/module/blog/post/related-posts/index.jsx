import React from "react"
import { Link } from "gatsby"
import FormattedDate from "@components/shared/formatted-date"

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null

  return (
    <div className="mt-12 border-t border-border pt-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-wide text-muted">
        Related posts
      </p>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.path}>
            <Link
              to={`/posts/${post.path}/`}
              className="group block rounded-xl border border-border p-4 transition-colors hover:border-accent"
            >
              <span className="block font-medium transition-colors group-hover:text-accent">
                {post.title}
              </span>
              {post.date && (
                <span className="mt-1 block text-sm text-muted">
                  <FormattedDate date={post.date} />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedPosts
