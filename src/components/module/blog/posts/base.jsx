import React from "react"
import './styles.scss'
import Header from "@components/shared/header"
import FormattedDate from '@components/shared/formatted-date'
import Pagination from '@components/shared/pagination';
import SEO from "@components/seo";
import Categories from '@components/module/blog/categories';

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


const Base = (props) => {
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber, path, categories, posts } = props;

  return (<>
    <Header/>
    <SEO title="Blog"/>
    <div className="row blog-container">
      <div className="col-xl-3">
        <Categories categories={categories} />
      </div>
      <div className="col-xl-9 posts-container card">
        {posts.map((edge) => <BlogPostGist node={edge.node} key={edge.node.frontmatter.path} />)}
        {numberOfPages > 1 ? <Pagination totalPages={numberOfPages} currentPage={humanPageNumber} nextPage={nextPagePath} previousPage={previousPagePath} path={path} /> : null}
      </div>
    </div>
  </>)
}

export default Base