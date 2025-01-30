import React from "react";
import styles from "../styles/Post.module.scss";

interface AddCommentProps {
  onAddComment: (content: string) => void;
}
const AddPostComment: React.FC<AddCommentProps> = ({ onAddComment }) => {
  const [content, setContent] = React.useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddComment(content);
      setContent("");
    }
  };
  return (
    <>
      <form onSubmit={handleAddComment} className={styles.addComment} style={{marginTop:"12px"}}>
        <input
          type="text"
          placeholder="write a comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className={styles.responseBtn}>
          Add Comment
        </button>
      </form>
    </>
  );
};

export default AddPostComment;
