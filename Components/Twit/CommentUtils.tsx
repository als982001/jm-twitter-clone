import styles from "./Comment.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IComment, defaultComment } from "@/utils/types";
import useCommentUtil from "@/Hooks/useCommentUtil";

interface IProps {
  comment: IComment;
}

export default function CommentUtils({ comment = defaultComment }: IProps) {
  const { handlePostCommentLike, likesNum } = useCommentUtil(
    comment.likes.length
  );

  return (
    <section id={styles.utils}>
      <section className={styles.util}>
        <HiOutlineChatBubbleOvalLeft className={styles.util__icon} />
        <h6>0</h6>
      </section>
      <section
        className={styles.util}
        onClick={() => {
          handlePostCommentLike(comment._id);
        }}
      >
        <AiOutlineHeart className={styles.util__icon} />
        <h6>{likesNum}</h6>
      </section>
      <section className={styles.util}>
        <VscGraph className={styles.util__icon} />
        <h6>{comment.views}</h6>
      </section>
    </section>
  );
}
