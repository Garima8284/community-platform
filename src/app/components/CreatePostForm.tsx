"use client";
import React from "react";
import styles from "../styles/Post.module.scss";

interface CreatePostFormProps {
  onCreate: (title: string, content: string) => void;
}
const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreate }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title || content) {
      onCreate(title, content);
    }
    setTitle("");
    setContent("");
    // console.log("Form submitted");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.post}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default CreatePostForm;
