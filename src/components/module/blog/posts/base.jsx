import React from "react"
import Header from "@components/shared/header"
import Footer from "@components/shared/footer"
import Pagination from "@components/shared/pagination"
import SEO from "@components/shared/seo"
import Categories from "@components/shared/categories"
import BlogPostGist from "@components/module/blog/posts/gist"

const Base = (props) => {
  const {
    previousPagePath,
    nextPagePath,
    numberOfPages,
    humanPageNumber,
    path,
    categories,
    posts,
    currentCategory,
    heading = "Recent writing",
    eyebrow = "Code from Dude",
    seoTitle = "Blog",
  } = props

  const pageLabel = String(humanPageNumber || 1).padStart(2, "0")
  const totalLabel = String(numberOfPages || 1).padStart(2, "0")

  return (
    <>
      <Header />
      <SEO title={seoTitle} />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-14">
        <header className="index-masthead">
          <div>
            <p className="index-kicker">{eyebrow}</p>
            <h1>{heading}</h1>
          </div>
          <div
            className="index-folio"
            aria-label={`Page ${pageLabel} of ${totalLabel}`}
          >
            <span>Page</span>
            <strong>
              {pageLabel} / {totalLabel}
            </strong>
          </div>
        </header>
        <Categories categories={categories} currentCategory={currentCategory} />
        <section className="post-feed" aria-label="Articles">
          {posts.map((edge, index) => (
            <BlogPostGist
              node={edge.node}
              position={index + 1}
              key={edge.node.frontmatter.path}
            />
          ))}
        </section>
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
      <Footer />
    </>
  )
}

export default Base
