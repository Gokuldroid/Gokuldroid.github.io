import React from "react"
import { Link } from "gatsby"
import FormattedDate from "@components/shared/formatted-date"
import { FiArrowUpRight } from "react-icons/fi"

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null

  return (
    <section className="related-reading" aria-labelledby="related-heading">
      <header className="section-heading">
        <p>Keep exploring</p>
        <h2 id="related-heading">Continue reading</h2>
      </header>
      <ol className="related-grid">
        {posts.map((post, index) => (
          <li key={post.path} className="related-item">
            <span className="related-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Link to={`/posts/${post.path}/`} className="group related-link">
              <span>{post.title}</span>
              <FiArrowUpRight aria-hidden="true" />
              {post.date && (
                <small>
                  <FormattedDate date={post.date} />
                </small>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default RelatedPosts
