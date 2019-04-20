import React, { Component } from 'react'
import Header from "@components/shared/header"
import AppList from "@components/app-list";

export default class Apps extends Component {
  render() {
    return (
      <>
        <Header/>
        <AppList className="body-container"/>
      </>
    )
  }
}
