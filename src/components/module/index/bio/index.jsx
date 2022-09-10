import Categories from "@components/shared/categories"
import React, { Component } from "react"
import "./styles.scss"

export default class index extends Component {
  render() {
    return (
      <div className="bio">
        <p id="name">CODE FROM DUDE</p>
        <p className="interests">All about software</p>
        <div className="row justify-content-center">
          <div className="col-5">
            <Categories
              categories={['android', 'cmdline', 'database', 'java', 'productivity', 'tools', 'programming'].map(cat => {
                return { name: cat };
              })}
            />
          </div>
        </div>
      </div>
    )
  }
}
