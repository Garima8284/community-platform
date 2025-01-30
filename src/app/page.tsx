"use client";
import { mockPosts } from "./mock/mockData";
import React, { useState } from "react";
import Post from "./components/Post";
import CreatePostForm from "./components/CreatePostForm";
import styles from "./styles/post.module.scss";

// interface PropPost {
//   id: number;
//   title: string;
//   content: string;
//   comments: {
//     id: number;
//     content: string;
//     replies: {
//       id: number;
//       content: string;
//     }[];
//   }[];
// }
const Home: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleCreatePost = (title: string, content: string) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      comments: [],
      // replies: [],
    };
    setPosts([...posts, newPost]);
  };

  const handleAddComment = (
    postId: number,
    parentCommentId: number | null,
    content: string
  ) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const addComment = (comments: any[]): any[] => {
          if (parentCommentId === null) {
            return [...comments, { id: Date.now(), content, replies: [] }];
          }

          return comments.map((comment) => {
            if (comment.id === parentCommentId) {
              return {
                ...comment,
                replies: [
                  ...comment.replies,
                  { id: Date.now(), content, replies: [] },
                ],
              };
            }

            return {
              ...comment,
              replies: addComment(comment.replies),
            };
          });
        };

        return {
          ...post,
          comments: addComment(post.comments),
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <>
      <div className={styles.Container}>
        <CreatePostForm onCreate={handleCreatePost} />
        {posts.map((post) => (
          <Post onAddComment={handleAddComment} key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default Home;
