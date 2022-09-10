import { getColorForIndex } from "@components/utils/colors"
import React from "react"
import "./styles.scss"

export default ({ categories }) => (
  <div className={`categories-container mb-4`}>
    <div  className="d-flex flex-wrap">
      <a
        className={`btn btn-outline-primary text-uppercase fw-bold d-inline`}
        href={`/blog`}
        role="button"
      >
        all
      </a>
      {categories
        .sort((cat1, cat2) => cat1.name > cat2.name)
        .map((category, index) => (
          <a
            className={`btn btn-outline-${getColorForIndex(
              index
            )} text-uppercase fw-bold d-inline`}
            href={`/blog/category/${category.name}/`}
            key={category.name}
            role="button"
          >
            {category.name} {category.count > 0 ? `(${category.count})` : ""}
          </a>
        ))}
    </div>
  </div>
)
