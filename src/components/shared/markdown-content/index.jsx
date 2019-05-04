import React from "react"
import './styles.scss'

const MarkdownContent = (props) => {
  return (
    <div className="markdown-container">
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </div>
  )
}

export default MarkdownContent;