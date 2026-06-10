import React from "react"
import Header from "@components/shared/header"
import Pagination from "@components/shared/pagination"
import SEO from "@components/shared/seo"
import Categories from "@components/shared/categories"
import BlogPostGist from "@components/module/blog/posts/gist"

const Base = props => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    humanPageNumber,
    path,
    categories,
    posts,
    currentCategory,
  } = props

  return (
    <>
      <Header />
      <SEO title="Blog" />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <Categories categories={categories} currentCategory={currentCategory} />
        <div>
          {posts.map(edge => (
            <BlogPostGist node={edge.node} key={edge.node.frontmatter.path} />
          ))}
        </div>
        {numberOfPages > 1 && (
          <Pagination
            totalPages={numberOfPages}
            currentPage={humanPageNumber}
            nextPage={nextPagePath}
            previousPage={previousPagePath}
            path={path}
          />
        )}
      </main>
    </>
  )
}

export default Base
