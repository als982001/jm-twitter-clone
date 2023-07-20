import styles from "./write.module.css";
import { BsImage } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlineBars,
  AiOutlineSmile,
} from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import useTwit from "@/Hooks/useTwit";

export default function Write() {
  const { content, writeTwit, postTwit } = useTwit();

  return (
    <form onSubmit={postTwit} id={styles.write}>
      <section id={styles.write__input__space}>
        <section id={styles.write__user__icon} />
        <input
          id={styles.write__input}
          value={content}
          onChange={(event) => writeTwit(event)}
        />
      </section>
      <section id={styles.write__options}>
        <section id={styles.write__options__row}>
          <section className={styles.write__option}>
            <BsImage />
          </section>
          <section className={styles.write__option}>
            <AiOutlineFileGif />
          </section>
          <section className={styles.write__option}>
            <AiOutlineBars />
          </section>
          <section className={styles.write__option}>
            <AiOutlineSmile />
          </section>
          <section className={styles.write__option}>
            <SlCalender />
          </section>
          <section className={styles.write__option}>
            <FiMapPin />
          </section>
        </section>
        <button id={styles.write__button}>트윗하기</button>
      </section>
    </form>
  );
}
