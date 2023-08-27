import { ITwit } from "@/utils/types";
import styles from "./Twit.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import useTwitUtil from "@/Hooks/useTwitUtil";

interface IProps {
  twit: ITwit;
}

export default function TwitUtils({ twit }: IProps) {
  const { handlePostLike, likesNum } = useTwitUtil(twit);

  return (
    <section id={styles.twit__utils}>
      <section className={styles.twit__util}>
        <HiOutlineChatBubbleOvalLeft className={styles.twit__util__icon} />
        <h6>{twit.comments.length}</h6>
      </section>
      <section
        className={styles.twit__util}
        onClick={() => {
          handlePostLike(twit._id);
        }}
      >
        <AiOutlineHeart className={styles.twit__util__icon} />
        <h6>{likesNum}</h6>
      </section>
      <section className={styles.twit__util}>
        <VscGraph className={styles.twit__util__icon} />
        <h6>{twit.views}</h6>
      </section>
    </section>
  );
}
