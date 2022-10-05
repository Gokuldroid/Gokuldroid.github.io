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
    <div className="related-articles-container border mt-5 p-2 border-1 rounded">
      <p className="m-2 text-uppercase text-muted"><b>In this series</b></p>
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