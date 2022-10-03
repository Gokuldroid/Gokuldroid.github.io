import React from "react"
import './styles.scss'
import Header from "@components/shared/header"
import Pagination from '@components/shared/pagination';
import SEO from "@components/seo";
import Categories from '@components/shared/categories';
import BlogPostGist from "@components/module/blog/posts/gist";

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