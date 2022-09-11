import React from "react"
import { graphql } from "gatsby"
import Base from '@components/module/blog/posts/base';

const Blog = (props) => {
  const { pageContext } = props;
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber, category } = pageContext;
  const categories = props.data.categories.group;
  const posts = props.data.posts.edges;
  const path = (pageNumber) => pageNumber === 1 ? `/blog/category/${category}` : `/blog/category/${category}/page/${pageNumber}`

  return (<>
    <Base previousPagePath={previousPagePath} nextPagePath={nextPagePath} numberOfPages={numberOfPages} humanPageNumber={humanPageNumber} path={path} categories={categories} posts={posts} currentCategory={category}/>
  </>)
}

export default Blog


export const pageQuery = graphql`
query($category: String, $skip: Int!, $limit: Int!) {
  posts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { categories: { in: [$category] } } }
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

  categories: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 2000
  ) {
    group(field: frontmatter___categories) {
      name: fieldValue
      count: totalCount
    }
  }
}`;
