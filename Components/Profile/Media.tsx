import styles from "./Media.module.css";

export default function Media() {
  return (
    <section id={styles.media}>
      <img id={styles.media__img} src="/profile_media.png" alt="media_img" />
      <h2 id={styles.media__title}>조명, 카메라... 첨부!</h2>
      <h5 id={styles.media__content}>
        사진 또는 동영상을 포함한 트윗을 보내면 여기에 표시됩니다.
      </h5>
    </section>
  );
}
