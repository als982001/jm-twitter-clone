import { IComment, ITwit, defaultTwit } from "@/utils/types";
import styles from "./CommentInput.module.css";
import usePostComment from "@/Hooks/usePostComment";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  twit: ITwit;
  setNewComments: Dispatch<SetStateAction<IComment[]>>;
}

export default function CommentInput({
  twit = defaultTwit,
  setNewComments,
}: IProps) {
  const { comment, changeComment, handlePostComment, userInfo } =
    usePostComment(twit._id, setNewComments);

  return (
    <form id={styles.comment} onSubmit={handlePostComment}>
      <img id={styles.icon} src={userInfo?.imageUrl} />
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
