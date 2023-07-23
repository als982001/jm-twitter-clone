"use client";
import styles from "./Twit.module.css";

interface IProps {
  imageUrl: string;
}

export default function TwitImages({ imageUrl }: IProps) {
  return (
    <section id={styles.twit__image__space}>
      <img className={styles.twit__image} src={imageUrl} alt="image01" />
    </section>
  );
}
