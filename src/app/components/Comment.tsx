import React, { useState } from "react";
import styles from "../styles/post.module.scss";
import AddPostComment from "./AddPostComment";

interface CommentProps {
  id: number;
  content: string;
  replies: any[];
  postId: number;
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    content: string
  ) => void;
}

const Comment: React.FC<CommentProps> = ({
  id,
  content,
  replies,
  postId,
  onAddComment,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReply = (content: string) => {
    onAddComment(postId, id, content);
    setShowReplyForm(false);
  };

  return (
    <div style={{ paddingLeft: "24px" }} className={styles.comment}>
      <p>{content}</p>
      <button
        className={styles.responseBtn}
        onClick={() => setShowReplyForm(!showReplyForm)}
      >
        {showReplyForm ? "Cancel" : "Reply"}
      </button>
      {showReplyForm && <AddPostComment onAddComment={handleReply} />}
      <div style={{ paddingLeft: "24px" }}>
        {replies.map((reply) => (
          <Comment
            key={reply.id}
            {...reply}
            postId={postId}
            onAddComment={onAddComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
