import React from "react";
import Post from "./feed/Post";

type Props = {};

const PostFeed = (props: Props) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostFeed;
