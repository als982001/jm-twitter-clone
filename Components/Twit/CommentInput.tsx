import { ITwit } from "@/utils/types";
import styles from "./CommentInput.module.css";
import usePostComment from "@/Hooks/usePostComment";

interface IProps {
  twit: ITwit;
}

export default function CommentInput({ twit }: IProps) {
  const { comment, changeComment, handlePostComment } = usePostComment(
    twit._id
  );

  return (
    <form id={styles.comment} onSubmit={handlePostComment}>
      <img
        id={styles.icon}
        src="https://pbs.twimg.com/media/F4kuNUjbkAAjzlR?format=jpg&name=large"
      />
      <input
        id={styles.input}
        placeholder="답글을 게시하세요"
        onChange={(event) => {
          changeComment(event);
        }}
      />
      <button id={styles.button}>답글</button>
    </form>
  );
}
