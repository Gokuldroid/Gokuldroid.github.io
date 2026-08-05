import React from "react"
import { graphql, Link } from "gatsby"
import Header from "@components/shared/header"
import MarkDownContent from "@components/shared/markdown-content"
import FormattedDate from "@components/shared/formatted-date"
import SEO from "@components/shared/seo"
import Share from "@components/module/blog/post/share"
import TableOfContents from "@components/module/blog/post/table-of-contents"
import ArticleSeries from "./article-series"
import RelatedPosts from "./related-posts"
import { slugify } from "@src/utils/slug"
import Footer from "@components/shared/footer"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

const buildJsonLd = (post, siteMeta) => {
  const url = `${siteMeta.siteUrl}/posts/${post.frontmatter.path}/`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.frontmatter.title,
    description: post.excerpt,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: { "@type": "Person", name: siteMeta.author },
    publisher: { "@type": "Person", name: siteMeta.author },
    keywords: (post.frontmatter.tags || []).join(", "),
    url,
  }
}

export const BlogPost = (props) => {
  const { pageContext, data } = props
  const {
    previousPagePath,
    nextPagePath,
    previousItem,
    nextItem,
    relatedPosts,
  } = pageContext
  const { post, parentPost, siblingPosts, site } = data
  const siteMetadata = site.siteMetadata
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.excerpt}
        jsonLd={buildJsonLd(post, siteMetadata)}
      />
      <Header />
      <article className="article-page">
        <header className="article-header">
          <div className="article-header-inner">
            <p className="article-meta">
              <span className="text-accent">Essay</span>
              <span aria-hidden="true">/</span>
              <FormattedDate date={post.frontmatter.date} />
              {post.timeToRead && (
                <>
                  <span aria-hidden="true">/</span>
                  {post.timeToRead} min read
                </>
              )}
            </p>
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="article-tags">
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    className="tag"
                    to={`/blog/tag/${slugify(tag)}/`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className="article-layout">
          <div className="article-main">
            <TableOfContents tableOfContents={post.tableOfContents} mobile />
            <MarkDownContent html={post.html} />
            {parentPost && (
              <ArticleSeries
                parentPost={parentPost}
                siblingPosts={siblingPosts}
                currentPost={post}
              />
            )}
            <Share title={post.frontmatter.title} />
          </div>
          <aside className="article-rail">
            <TableOfContents tableOfContents={post.tableOfContents} />
          </aside>
        </div>
        <footer className="article-afterword">
          <RelatedPosts posts={relatedPosts} />
          {(previousPagePath || nextPagePath) && (
            <nav className="article-pagination" aria-label="More articles">
              {previousPagePath ? (
                <Link
                  to={previousPagePath}
                  className="article-pagination-link is-previous group"
                >
                  <span className="article-pagination-label">
                    <FiArrowLeft aria-hidden="true" />
                    Previous article
                  </span>
                  <strong>{previousItem.node.frontmatter.title}</strong>
                </Link>
              ) : (
                <span className="article-pagination-spacer" />
              )}
              {nextPagePath ? (
                <Link
                  to={nextPagePath}
                  className="article-pagination-link is-next group"
                >
                  <span className="article-pagination-label">
                    Next article
                    <FiArrowRight aria-hidden="true" />
                  </span>
                  <strong>{nextItem.node.frontmatter.title}</strong>
                </Link>
              ) : (
                <span className="article-pagination-spacer" />
              )}
            </nav>
          )}
        </footer>
      </article>
      <Footer />
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query (
    $pageId: String!
    $previousPageId: String!
    $nextPageId: String!
    $parentPath: String
  ) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }

    post: markdownRemark(id: { eq: $pageId }) {
      html
      excerpt
      timeToRead
      tableOfContents(absolute: false, maxDepth: 4)
      frontmatter {
        title
        path
        tags
        date
        parentPath
      }
    }

    parentPost: markdownRemark(
      frontmatter: { path: { eq: $parentPath, ne: null } }
    ) {
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
