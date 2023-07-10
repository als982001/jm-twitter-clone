import styles from "./Styles/Recommend.module.css";
import RecommendFollow from "./RecommendFollow";

interface IRecommendFollows {
  id: string;
  nickname: string;
  icon: string;
}

export default async function RecommendFollows() {
  const response = await fetch("http://localhost:3000/api/recommend-follows", {
    method: "GET",
  });

  const recommends: IRecommendFollows[] = await response.json();

  return (
    <section className={styles.sidebar__container}>
      <h3 id={styles.sidebar__recommend__title}>팔로우 추천</h3>
      {recommends.map((recommend) => (
        <RecommendFollow recommend={recommend} />
      ))}
      <h4 id={styles.sidebar__recommend__more}>더 보기</h4>
    </section>
  );
}
