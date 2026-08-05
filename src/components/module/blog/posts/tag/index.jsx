import React from "react"
import { graphql } from "gatsby"
import Base from "@components/module/blog/posts/base"

const TagPage = (props) => {
  const { pageContext } = props
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    humanPageNumber,
    tag,
    tagSlug,
  } = pageContext
  const categories = props.data.categories.group
  const posts = props.data.posts.edges
  const path = (pageNumber) =>
    pageNumber === 1
      ? `/blog/tag/${tagSlug}`
      : `/blog/tag/${tagSlug}/page/${pageNumber}`

  return (
    <Base
      previousPagePath={previousPagePath}
      nextPagePath={nextPagePath}
      numberOfPages={numberOfPages}
      humanPageNumber={humanPageNumber}
      path={path}
      categories={categories}
      posts={posts}
      currentCategory={"all"}
      heading={tag}
      eyebrow="Topic"
      seoTitle={`Tag: ${tag}`}
    />
  )
}

export default TagPage

export const pageQuery = graphql`
  query ($ids: [String!]!, $skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { id: { in: $ids } }
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
  }
`
