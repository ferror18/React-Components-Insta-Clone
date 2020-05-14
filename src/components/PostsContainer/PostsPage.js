//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  const [postsArr, setPostsArr] = useState(props.postsArr);
  return (
    <div className="posts-container-wrapper">
      {postsArr.map(post => {
        return <Post key={postsArr.indexOf(post)}post={post}/>
      })}
    </div>
  );
};

export default PostsPage;
