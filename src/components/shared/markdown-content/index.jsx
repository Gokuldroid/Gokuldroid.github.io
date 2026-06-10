import React from "react"

const MarkdownContent = props => {
  return (
    <div className="markdown prose prose-lg line-numbers max-w-none">
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  )
}

export default MarkdownContent
