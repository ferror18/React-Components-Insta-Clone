// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const [ likes, setLikes] = useState(props.post.likes);
  let [ liked, setLiked] = useState(false)
  function toggleLike(event) {
    if (liked === false) {
      setLiked(!liked)
      return setLikes(likes+1)
    }else{
      setLiked(!liked)
      return setLikes(likes-1)
    }
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection  
       likes={likes}
       liked={liked}
       toggleLike={toggleLike} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
