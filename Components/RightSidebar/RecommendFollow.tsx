import styles from "./Recommend.module.css";

interface IProps {
  recommend: {
    id: string;
    nickname: string;
    icon: string;
  };
}

export default function RecommendFollow({
  recommend = { id: "", nickname: "", icon: "" },
}: IProps) {
  return (
    <section id={styles.sidebar__recommend__container}>
      <section id={styles.sidebar__recommend__userinfo}>
        <section
          id={styles.sidebar__recommend__icon}
          style={{ backgroundImage: `url(${recommend.icon})` }}
        />
        <section>
          <h4 id={styles.sidebar__recommend__nickname}>{recommend.nickname}</h4>
          <h4 id={styles.sidebar__recommend__id}>{recommend.id}</h4>
        </section>
      </section>
      <button id={styles.sidebar__recommend__button}>팔로우</button>
    </section>
  );
}
