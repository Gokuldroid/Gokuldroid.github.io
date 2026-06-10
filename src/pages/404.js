import React from "react"
import { Link } from "gatsby"
import SEO from "@components/shared/seo"
import Header from "@components/shared/header"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header />
    <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-lg border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
      >
        Go home
      </Link>
    </main>
  </>
)

export default NotFoundPage
