import React from "react";
import AddPostComment from "./AddPostComment";
import Comment from "./Comment";
// import  Styles from "../styles/post.module.scss";
interface PPost {
  id: number;
  title: string;
  content: string;
  comments: any[];
  onAddComment: (
    postId: number,
    parentCommentId: number | null,
    content: string
  ) => void;
}

const Post: React.FC<PPost> = ({
  id,
  title,
  content,
  comments,
  onAddComment,
}) => {
  const handleAddComment = (content: string) => {
    onAddComment(id, null, content);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            {...comment}
            postId={id}
            onAddComment={onAddComment}
          />
        ))}
      </div>
      <AddPostComment onAddComment={handleAddComment} />
    </div>
  );
};
export default Post;
