import styles from "./Styles/Trends.module.css";
import Trend from "./Trend";

interface ITrends {
  id: number;
  content: string;
  twitNum: number;
}

export default async function Trends() {
  const response = await fetch("http://localhost:3000/api/trends", {
    method: "GET",
    cache: "no-store",
  });
  const trends: ITrends[] = await response.json();

  return (
    <section className={styles.sidebar__container}>
      <h3 id={styles.sidebar__trend__title}>나를 위한 트렌드</h3>
      {trends.map((trend) => (
        <Trend key={trend.id + ""} trend={trend} />
      ))}
    </section>
  );
}
