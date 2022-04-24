import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../api/posts";
import { PostList } from "../../components/post-list";
import { RootState } from "../../modules/store";

export const PostListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts()); // ERROR
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
};
