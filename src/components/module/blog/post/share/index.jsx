import React, { Component } from "react";
import { LinkedinShareButton, LinkedinIcon, TwitterShareButton , EmailShareButton, EmailIcon, TwitterIcon }from "react-share";
import './styles.scss';

class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ""
    }
  }

  componentDidMount() {
    this.setState({ url: window.location.href});
  }

  render() {
    const title = this.props.title;
    return (
      <div className="share-container">
        <p><small>Share this article on:</small></p>
        <LinkedinShareButton url={this.state.url} title={title}> 
          <LinkedinIcon size={50} round/>
        </LinkedinShareButton>
        <TwitterShareButton url={this.state.url} title={title}>
          <TwitterIcon size={50} round/>
        </TwitterShareButton>
        <EmailShareButton url={this.state.url} subject={title}> 
          <EmailIcon size={50} round/>
        </EmailShareButton>
      </div>
    );
  }
}


export default Share;