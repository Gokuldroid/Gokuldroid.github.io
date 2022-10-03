import React from "react"
import './styles.scss'
import FormattedDate from '@components/shared/formatted-date';
import MarkDownContent from '@components/shared/markdown-content';

function GistBody({ node }) {
  if (node.frontmatter.render_in_place) {
    return <MarkDownContent html={node.html} />
  } else {
    return <div className="post-gist">{node.excerpt}</div>
  }
}

function BlogPostGist({ node }) {
  var link = `/posts/${node.frontmatter.path}`

  var handleClick = () => window.open(link, "_blank")

  return (
    <div
      onClick={handleClick}
      className="post border-bottom"
      onKeyDown={handleClick}
    >
      <p className="post-title">{node.frontmatter.title}</p>
      <p className="post-info">
        {" "}
        <FormattedDate date={node.frontmatter.date} /> &diams; {node.timeToRead}{" "}
        min read
      </p>
      <GistBody node={node} />
      <div className="post-tags">
        {node.frontmatter.tags
          ? node.frontmatter.tags.map(tag => <span key={tag}>{tag}</span>)
          : ""}
      </div>
    </div>
  )
}


export default BlogPostGist;