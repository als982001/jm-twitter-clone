"use client";
import styles from "./Twit.module.css";

const testImg =
  "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg";

export default function TwitImages() {
  return (
    <section id={styles.twit__images}>
      <img className={styles.twit__image} src={testImg} alt="image01" />
    </section>
  );
}
