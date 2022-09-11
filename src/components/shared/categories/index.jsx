import { getColorForIndex } from "@components/utils/colors"
import React from "react"
import "./styles.scss"

const getButtonClassName = (category, currentCategory, index) => {
  if(category.toLowerCase() === currentCategory) {
    return `btn-${getColorForIndex(index)}`;
  } else {
    return `btn-outline-${getColorForIndex(index)}`
  }
}

export default ({ categories, currentCategory }) => (
  <div className={`categories-container mb-4`}>
    <div className="d-flex flex-wrap">
      <a
        className={`btn ${getButtonClassName('all', currentCategory, 0)} text-uppercase fw-bold d-inline`}
        href={`/blog`}
        role="button"
      >
        all
      </a>
      {categories
        .sort((cat1, cat2) => cat1.name > cat2.name)
        .map((category, index) => (
          <a
            className={`btn ${getButtonClassName(category.name, currentCategory, index)} text-uppercase fw-bold d-inline`}
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
