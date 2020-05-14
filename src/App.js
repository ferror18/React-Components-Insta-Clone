/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import allPosts from "./dummy-data.js";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import  PostsPage from "./components/PostsContainer/PostsPage.js";
import { useState } from "react";


const App = () => {
  const [postsArr, setPostArr] = useState(allPosts);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage postsArr={postsArr}/>
    </div>
  );
};
export default App;
// debugger