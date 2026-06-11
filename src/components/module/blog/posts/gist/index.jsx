import React from "react"
import { Link } from "gatsby"
import FormattedDate from "@components/shared/formatted-date"
import MarkDownContent from "@components/shared/markdown-content"

function GistBody({ node }) {
  if (node.frontmatter.render_in_place) {
    return <MarkDownContent html={node.html} />
  }
  return <p className="mt-3 leading-relaxed text-muted">{node.excerpt}</p>
}

function BlogPostGist({ node }) {
  const link = `/posts/${node.frontmatter.path}/`

  return (
    <article className="group border-b border-border py-8 first:pt-0 last:border-b-0">
      <Link to={link} className="block">
        <h2 className="text-xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
          {node.frontmatter.title}
        </h2>
        <p className="mt-1.5 text-sm text-muted">
          <FormattedDate date={node.frontmatter.date} />
          <span className="mx-2">·</span>
          {node.timeToRead} min read
        </p>
        <GistBody node={node} />
      </Link>
      {node.frontmatter.tags && node.frontmatter.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {node.frontmatter.tags.map((tag) => (
            <Link
              className="tag transition-colors hover:brightness-110"
              to={`/blog/tag/${tag.trim().toLowerCase()}/`}
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}

export default BlogPostGist
