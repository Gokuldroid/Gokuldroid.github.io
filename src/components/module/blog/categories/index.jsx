import React from "react"
import './styles.scss';

export default ({ categories }) => (
  <div className="categories-container card">
    <p className="category--title border-bottom">Categories</p>
    {categories.sort((cat1, cat2) => cat1.name > cat2.name).map((category) => <a className="category" href={`/blog/category/${category.name}/`}># {category.name} ({category.count})</a>)}
  </div>
)
