import Categories from "@components/shared/categories"
import React, { Component } from "react"
import "./styles.scss"

export default class index extends Component {
  render() {
    return (
      <div className="bio">
        <p className="name">CODE FROM DUDE</p>
        <p className="tagline">All about software</p>
        <div className="row justify-content-center">
          <div className="col-5">
            <Categories
              categories={['today I learned', 'android', 'cmdline', 'database', 'java', 'productivity', 'tools', 'programming'].map(cat => {
                return { name: cat };
              })}
            />
          </div>
        </div>
      </div>
    )
  }
}
