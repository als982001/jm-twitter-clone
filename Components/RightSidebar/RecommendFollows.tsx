import { getRecommendFollows } from "@/utils/otherDataFunctions";
import styles from "./Recommend.module.css";
import RecommendFollow from "./RecommendFollow";

export default async function RecommendFollows() {
  const recommends = await getRecommendFollows();

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
