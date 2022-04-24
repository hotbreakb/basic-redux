import React from "react";
import { Post } from "../../api/posts";

type PostListProps = {
  posts: Post[];
};

export const PostList = ({ posts }: PostListProps) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
