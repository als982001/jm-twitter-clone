import styles from "./Comment.module.css";
import { IComment } from "@/utils/types";
import { getNameFromEmail } from "@/utils/functions";
import CommentUtils from "./CommentUtils";

interface IProps {
  comment: IComment;
}

export default function Comment({ comment }: IProps) {
  return (
    <li id={styles.wrapper}>
      <img id={styles.icon} src={comment.authorImageUrl} alt="user-icon" />
      <section id={styles.container}>
        <section id={styles.user}>
          <h3 id={styles.user__nickname}>{comment.nickname}</h3>
          <h4 id={styles.user__email}>{`@${getNameFromEmail(
            comment.email
          )}`}</h4>
        </section>
        <h3 id={styles.comment}>{comment.comment}</h3>
        <CommentUtils comment={comment} />
      </section>
    </li>
  );
}
