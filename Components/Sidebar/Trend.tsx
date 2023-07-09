import styles from "./Styles/Trends.module.css";
import { BsThreeDots } from "react-icons/bs";

interface IProps {
  trend: { id: number; content: string; twitNum: number };
}

export default function Trend({ trend }: IProps) {
  return (
    <section id={styles.sidebar__trend__container}>
      <h6 id={styles.sidebar__trend__location}>대한민국에서 트렌드 중</h6>
      <h5 id={styles.sidebar__trend__content}>{trend.content}</h5>
      <h6 id={styles.sidebar__trend__twitnum}>{`${trend.twitNum} 트윗`}</h6>
      <section id={styles.sidebar__trend__threedots}>
        <BsThreeDots />
      </section>
    </section>
  );
}
