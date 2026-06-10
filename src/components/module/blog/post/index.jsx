import React from "react"
import { graphql } from "gatsby"
import Header from "@components/shared/header"
import MarkDownContent from "@components/shared/markdown-content"
import SEO from "@components/shared/seo"
import Share from "@components/module/blog/post/share"
import TableOfContents from "@components/module/blog/post/table-of-contents"
import ArticleSeries from "./article-series"

export const BlogPost = props => {
  const { pageContext, data } = props
  const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext
  const { post, parentPost, siblingPosts } = data
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.excerpt}
      />
      <Header />
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-28">
        <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-accent sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <TableOfContents tableOfContents={post.tableOfContents} />
        <MarkDownContent html={post.html} />
        {parentPost && (
          <ArticleSeries
            parentPost={parentPost}
            siblingPosts={siblingPosts}
            currentPost={post}
          />
        )}
        <Share title={post.frontmatter.title} />
        {(previousPagePath || nextPagePath) && (
          <nav className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-8">
            {previousPagePath ? (
              <a
                href={previousPagePath}
                className="group flex-1 rounded-xl border border-border p-4 transition-colors hover:border-accent"
              >
                <span className="block text-xs uppercase tracking-wide text-muted">
                  ‹ Previous
                </span>
                <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
                  {previousItem.node.frontmatter.title}
                </span>
              </a>
            ) : (
              <span className="flex-1" />
            )}
            {nextPagePath ? (
              <a
                href={nextPagePath}
                className="group flex-1 rounded-xl border border-border p-4 text-right transition-colors hover:border-accent"
              >
                <span className="block text-xs uppercase tracking-wide text-muted">
                  Next ›
                </span>
                <span className="mt-1 block font-medium transition-colors group-hover:text-accent">
                  {nextItem.node.frontmatter.title}
                </span>
              </a>
            ) : (
              <span className="flex-1" />
            )}
          </nav>
        )}
      </article>
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($pageId: String!, $previousPageId: String!, $nextPageId: String!, $parentPath: String) {
    post: markdownRemark(id: { eq: $pageId }) {
      html
      excerpt
      tableOfContents(
        absolute: false
        maxDepth: 4
      )
      frontmatter {
        title
        path
        tags
        parentPath
      }
    }

    parentPost: markdownRemark(frontmatter: { path: { eq: $parentPath, ne: null } }) {
      frontmatter {
        title
        path
        parentPath
      }
    }


    siblingPosts: allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { parentPath: { eq: $parentPath, ne: null } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            parentPath
          }
        }
      }
    }


    previousPost: markdownRemark(id: { eq: $previousPageId }) {
      frontmatter {
        title
      }
    }

    nextPost: markdownRemark(id: { eq: $nextPageId }) {
      frontmatter {
        title
      }
    }
  }
`
