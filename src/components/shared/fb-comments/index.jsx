import React, { Component } from "react"

class FbComments extends Component {

  componentDidMount() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2';
      fjs.parentNode.insertBefore(js, fjs);
      d.getElementById('fb-comments-holder').setAttribute('data-href', document.location.href);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div id="fb-comments-holder" class="fb-comments" data-href='https://gokuldroid.github.io' data-width="100%" data-numposts="10"></div>
    )
  }
}

export default FbComments