import React, { Component } from 'react'
import Header from "@components/shared/header"
import AppList from "@components/module/apps/app-list";

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
