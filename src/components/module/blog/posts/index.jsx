import React from "react"
import { graphql } from "gatsby"
import Base from '@components/module/blog/posts/base';

const Blog = (props) => {
  const { pageContext } = props;
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber } = pageContext;
  const categories = props.data.categories.group;
  const posts = props.data.posts.edges;
  const path = (pageNumber) => pageNumber === 1 ? '/blog' : `/blog/page/${pageNumber}`

  return (<>
    <Base previousPagePath={previousPagePath} nextPagePath={nextPagePath} numberOfPages={numberOfPages} humanPageNumber={humanPageNumber} path={path} categories={categories} posts={posts} currentCategory={'all'}/>
  </>)
}

export default Blog


export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
  posts: allMarkdownRemark(
    sort: { frontmatter: { date: DESC } }
    skip: $skip
    limit: $limit
  ) {
    edges {
      node {
        excerpt
        html
        timeToRead
        frontmatter {
          title
          date
          tags
          render_in_place
          path
        }
      }
    }
  }

  categories: allMarkdownRemark(
    sort: { frontmatter: { date: DESC } }
    limit: 2000
  ) {
    group(field: { frontmatter: { categories: SELECT } }) {
      name: fieldValue
      count: totalCount
    }
  }
}`;
