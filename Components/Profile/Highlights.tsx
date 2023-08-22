import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section id={styles.highlights}>
      <h2 id={styles.highlights__title}>인증 계정 전용</h2>
      <h5 id={styles.highlights__content}>
        프로필에 게시물을 하이라이트하려면 인증을 받아야 합니다.
      </h5>
      <button id={styles.highlights__button}>인증 받기</button>
    </section>
  );
}
