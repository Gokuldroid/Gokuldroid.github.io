import React from "react"
import './styles.scss'
import { graphql } from "gatsby"
import Header from "@components/shared/header"
import FormattedDate from '@components/shared/formatted-date'
import Pagination from '@components/shared/pagination';
import SEO from "@components/seo";

function BlogPostGist({ node }) {
  var link = `/posts/${node.frontmatter.path}`
  return (
    <div onClick={() => window.open(link, "_blank")} className="post border-bottom">
      <p className="post-title">{node.frontmatter.title}</p>
      <p className="post-info"> <FormattedDate date={node.frontmatter.date} /> &diams; {node.timeToRead} min read</p>
      <div className="post-gist">{node.excerpt}</div>
      <div className="post-tags">
        {
          node.frontmatter.tags ? node.frontmatter.tags.map((tag) => <span key={tag}>{tag}</span>) : ''
        }
      </div>
    </div>
  )
}


const Blog = (props) => {
  const { pageContext } = props;
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber } = pageContext;
  const path = (pageNumber) => pageNumber === 1 ? '/blog' : `/blog/page/${pageNumber}`

  return (<>
    <Header/>
    <SEO title="Blog"/>
    <div className="posts-container card">
      {props.data.posts.edges.map((edge) => <BlogPostGist node={edge.node} key={edge.node.frontmatter.path} />)}
      {numberOfPages > 1 ? <Pagination totalPages={numberOfPages} currentPage={humanPageNumber} nextPage={nextPagePath} previousPage={previousPagePath} path={path} /> : null}
    </div>
  </>)
}

export default Blog


export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
  posts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    skip: $skip
    limit: $limit
  ) {
    edges {
      node {
        excerpt
        timeToRead
        frontmatter {
          title
          date
          tags
          path
        }
      }
    }
  }
}`;
