import React from "react";
import './styles.scss';
import { graphql } from "gatsby";
import Header from "@components/shared/header";
import MarkDownContent from '@components/shared/markdown-content';
import GoogleAds from "@components/shared/google-ads";
import FbComments from "@components/shared/fb-comments";
import SEO from "@components/seo";
import Share from "@components/module/blog/post/share";
import TableOfContents from "@components/module/blog/post/table-of-contents";

export const BlogPost = props => {
  const { pageContext, data } = props;
  const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext;
  const { post } = data;
  return (
    <>
      <SEO title={post.frontmatter.title} keywords={post.frontmatter.tags} description={post.excerpt}/>
      <Header />
      <GoogleAds/>
      <div className="post-container card">
        <h1 className="post-container--title">{post.frontmatter.title}</h1>
        <TableOfContents tableOfContents={post.tableOfContents} />
        <MarkDownContent html={post.html} />
        <Share title={post.frontmatter.title}/>
        <div className="post-container--links">
          {previousPagePath ? (
            <a href={previousPagePath} target="_blank" rel="noopener noreferrer" className="post-container--links__previous">
              <span>&laquo;</span> ({previousItem.node.frontmatter.title})
            </a>
          ) : null}
          {nextPagePath ? (
            <a href={nextPagePath} target="_blank" rel="noopener noreferrer" className="post-container--links__next">
              ({nextItem.node.frontmatter.title}) <span>&raquo;</span>
            </a>
          ) : null}
        </div>
        <FbComments/>
      </div>
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($pageId: String!, $previousPageId: String!, $nextPageId: String!) {
    post: markdownRemark(id: { eq: $pageId }) {
      html
      excerpt
      tableOfContents(
        absolute: false
        maxDepth: 4
      )
      frontmatter {
        title
        tags
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
`;