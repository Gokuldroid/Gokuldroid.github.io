import React from "react"
import './styles.scss'
import Header from "@components/shared/header"
import FormattedDate from '@components/shared/formatted-date';
import MarkDownContent from '@components/shared/markdown-content';
import Pagination from '@components/shared/pagination';
import SEO from "@components/seo";
import Categories from '@components/shared/categories';

function GistBody({ node }) {
  if(node.frontmatter.render_in_place) {
    return (
      <MarkDownContent html={node.html} />
    )
  } else {
    return (
      <div className="post-gist">{node.excerpt}</div>
    )
  }
}

function BlogPostGist({ node }) {
  var link = `/posts/${node.frontmatter.path}`

  var handleClick = () => window.open(link, "_blank");

  return (
    <div onClick={handleClick} className="post border-bottom" onKeyDown={handleClick}>
      <p className="post-title">{node.frontmatter.title}</p>
      <p className="post-info"> <FormattedDate date={node.frontmatter.date} /> &diams; {node.timeToRead} min read</p>
      <GistBody node={node}/>
      <div className="post-tags">
        {
          node.frontmatter.tags ? node.frontmatter.tags.map((tag) => <span key={tag}>{tag}</span>) : ''
        }
      </div>
    </div>
  )
}


const Base = (props) => {
  const { previousPagePath, nextPagePath, numberOfPages, humanPageNumber, path, categories, posts, currentCategory } = props;

  return (<>
    <Header/>
    <SEO title="Blog"/>
    <div className="row blog-container">
      <Categories categories={categories} currentCategory={currentCategory}/>
      <div className="col posts-container card">
        {posts.map((edge) => <BlogPostGist node={edge.node} key={edge.node.frontmatter.path} />)}
        {numberOfPages > 1 ? <Pagination totalPages={numberOfPages} currentPage={humanPageNumber} nextPage={nextPagePath} previousPage={previousPagePath} path={path} /> : null}
      </div>
    </div>
  </>)
}

export default Base