import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import styles from "./Comment.module.css";
import { IComment } from "@/utils/types";
import { AiOutlineHeart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { getNameFromEmail } from "@/utils/functions";

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
        <section id={styles.utils}>
          <section className={styles.util}>
            <HiOutlineChatBubbleOvalLeft className={styles.util__icon} />
            <h6>0</h6>
          </section>
          <section className={styles.util}>
            <AiOutlineHeart className={styles.util__icon} />
            <h6>{comment.likes}</h6>
          </section>
          <section className={styles.util}>
            <VscGraph className={styles.util__icon} />
            <h6>{comment.views}</h6>
          </section>
        </section>
      </section>
    </li>
  );
}
