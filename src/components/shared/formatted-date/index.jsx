
import React, { Component } from 'react'

export default class FormattedDate extends Component {
  render() {
    var date = Date.parse(this.props.date);
    var localDate = new Date(date).toLocaleDateString();
    return (
      <>
        {localDate}
      </>
    )
  }
}
