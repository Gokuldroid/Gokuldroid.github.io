import { getChipClass } from "@components/utils/colors"
import React from "react"

const Categories = ({ categories, currentCategory }) => (
  <div className="mb-8 flex flex-wrap gap-2.5">
    <a
      className={getChipClass(0, currentCategory === "all")}
      href="/"
      role="button"
    >
      all
    </a>
    {categories
      .slice()
      .sort((cat1, cat2) => cat1.name.localeCompare(cat2.name))
      .map((category, index) => (
        <a
          className={getChipClass(
            index + 1,
            category.name.toLowerCase() === currentCategory
          )}
          href={`/blog/category/${category.name}/`}
          key={category.name}
          role="button"
        >
          {category.name}
          {category.count > 0 ? ` · ${category.count}` : ""}
        </a>
      ))}
  </div>
)

export default Categories
