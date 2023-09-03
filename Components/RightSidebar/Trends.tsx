import styles from "./Trends.module.css";
import Trend from "./Trend";
import { getTrends } from "@/utils/otherDataFunctions";

export default async function Trends() {
  const trends = await getTrends();

  return (
    <section className={styles.sidebar__container}>
      <h3 id={styles.sidebar__trend__title}>나를 위한 트렌드</h3>
      {trends.map((trend) => (
        <Trend key={trend.id + ""} trend={trend} />
      ))}
    </section>
  );
}
