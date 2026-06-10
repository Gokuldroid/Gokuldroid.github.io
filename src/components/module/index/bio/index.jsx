import Categories from "@components/shared/categories"
import React from "react"

const CATEGORIES = [
  "today I learned",
  "android",
  "cmdline",
  "database",
  "java",
  "productivity",
  "tools",
  "programming",
].map(name => ({ name }))

const Bio = () => (
  <section className="mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
    <h1 className="text-5xl font-bold tracking-tight text-accent sm:text-7xl">
      CODE FROM DUDE
    </h1>
    <p className="mt-6 text-lg text-muted sm:text-xl">All about software</p>
    <div className="mt-12 max-w-xl [&>div]:mb-0 [&>div]:justify-center">
      <Categories categories={CATEGORIES} />
    </div>
  </section>
)

export default Bio
