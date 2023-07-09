import styles from "./Styles/OtherInfos.module.css";

export default function OtherInfos() {
  return (
    <section id={styles.sidebar__otherinfo__wrapper}>
      <section className={styles.sidebar__otherinfo__container}>
        <h6>이용약관</h6>
        <h6>개인정보 처리방침</h6>
        <h6>쿠키 정책</h6>
        <h6>접근성</h6>
      </section>
      <section className={styles.sidebar__otherinfo__container}>
        <h6>광고정보</h6>
        <h6>더 보기</h6>
      </section>
    </section>
  );
}
