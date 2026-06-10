import React, { Component } from "react"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterIcon,
} from "react-share"

class Share extends Component {
  constructor(props) {
    super(props)
    this.state = { url: "" }
  }

  componentDidMount() {
    this.setState({ url: window.location.href })
  }

  render() {
    const title = this.props.title
    return (
      <div className="mt-12 border-t border-border pt-8 text-center">
        <p className="mb-4 text-sm text-muted">Share this article</p>
        <div className="flex items-center justify-center gap-3">
          <LinkedinShareButton url={this.state.url} title={title}>
            <LinkedinIcon size={44} borderRadius={12} />
          </LinkedinShareButton>
          <TwitterShareButton url={this.state.url} title={title}>
            <TwitterIcon size={44} borderRadius={12} />
          </TwitterShareButton>
          <EmailShareButton url={this.state.url} subject={title}>
            <EmailIcon size={44} borderRadius={12} />
          </EmailShareButton>
        </div>
      </div>
    )
  }
}

export default Share
