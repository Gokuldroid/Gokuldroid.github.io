import React from "react"
import Post from "../../../../../model/post";
import "./styles.scss"

const ArticleSeries = (props) => {
  const parentNode = props.parentPost;
  const currentPost = new Post(props.currentPost);
  const childPosts = props.siblingPosts.edges
                .map((siblingPost) => siblingPost.node)
                .map((childNode) => new Post(childNode, parentNode));

  
  return (<>
    <div className="related-articles-container card">
      <h4>In this series</h4>
      <ol class="list-group list-group-numbered">
        {childPosts.map((childPost) => {
          if(currentPost.path === childPost.path) {
            return <li class="list-group-item active">{childPost.title}</li>
          } else {
            return <li class="list-group-item cursor-pointer" onClick={() => window.open(childPost.getPostLink(), "_blank")}>{childPost.title}</li>
          }
        })}
      </ol>
    </div>
  </>)
};

export default ArticleSeries;