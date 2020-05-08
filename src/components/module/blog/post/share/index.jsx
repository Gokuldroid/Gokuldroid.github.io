import React from "react";
import { LinkedinShareButton, LinkedinIcon, TwitterShareButton , EmailShareButton, EmailIcon, TwitterIcon }from "react-share";
import './styles.scss';

const Share = (props) => {
  const title = props.title;
  return (
    <div className="share-container">
      <p><small>Share this article on:</small></p>
      <LinkedinShareButton url={window.location.href} title={title}> 
        <LinkedinIcon size={50} round/>
      </LinkedinShareButton>
      <TwitterShareButton url={window.location.href} title={title}>
        <TwitterIcon size={50} round/>
      </TwitterShareButton>
      <EmailShareButton url={window.location.href} subject={title}> 
        <EmailIcon size={50} round/>
      </EmailShareButton>
    </div>
  )
}

export default Share;