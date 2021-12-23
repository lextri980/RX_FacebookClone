import React from "react";
import Story from "./Story";
import "./Feed.scss";
import UploadBar from "./UploadBar";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="feed">
      <Story />
      <UploadBar />
      <Post />
      <Post image="https://images.unsplash.com/photo-1638817858379-9b126c57fe91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
      <Post image="https://images.unsplash.com/photo-1609050444074-f59233e1357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <Post />
    </div>
  );
}
