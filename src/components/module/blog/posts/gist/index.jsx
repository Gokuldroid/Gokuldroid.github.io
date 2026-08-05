import React from "react"
import { Link } from "gatsby"
import FormattedDate from "@components/shared/formatted-date"
import MarkDownContent from "@components/shared/markdown-content"
import { slugify } from "@src/utils/slug"
import { FiArrowUpRight } from "react-icons/fi"

function GistBody({ node }) {
  if (node.frontmatter.render_in_place) {
    return <MarkDownContent html={node.html} />
  }
  return <p className="post-row-deck">{node.excerpt}</p>
}

const PostTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <div className="post-tags">
      {tags.map((tag) => (
        <Link className="tag" to={`/blog/tag/${slugify(tag)}/`} key={tag}>
          {tag}
        </Link>
      ))}
    </div>
  )
}

function BlogPostGist({ node, position }) {
  const link = `/posts/${node.frontmatter.path}/`
  const meta = (
    <>
      <FormattedDate date={node.frontmatter.date} />
      <span aria-hidden="true">/</span>
      {node.timeToRead} min
    </>
  )

  return (
    <article className="post-row group">
      <span className="post-row-number" aria-hidden="true">
        {String(position).padStart(2, "0")}
      </span>
      <div className="post-row-main">
        <p className="post-row-meta">{meta}</p>
        <Link to={link} className="post-row-link">
          <h2>{node.frontmatter.title}</h2>
          <GistBody node={node} />
        </Link>
        <PostTags tags={node.frontmatter.tags} />
      </div>
      <Link
        to={link}
        className="post-row-arrow"
        aria-label={`Read ${node.frontmatter.title}`}
      >
        <FiArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  )
}

export default BlogPostGist
