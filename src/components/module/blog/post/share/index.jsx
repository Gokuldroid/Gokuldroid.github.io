import React, { Component } from "react"
import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

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
      <div className="article-share">
        <p>Share this article</p>
        <div>
          <LinkedinShareButton
            className="share-button"
            url={this.state.url}
            title={title}
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </LinkedinShareButton>
          <TwitterShareButton
            className="share-button"
            url={this.state.url}
            title={title}
            aria-label="Share on X"
          >
            <FaXTwitter size={16} />
          </TwitterShareButton>
          <EmailShareButton
            className="share-button"
            url={this.state.url}
            subject={title}
            aria-label="Share by email"
          >
            <FaEnvelope size={17} />
          </EmailShareButton>
        </div>
      </div>
    )
  }
}

export default Share
