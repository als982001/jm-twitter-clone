import RightSideInput from "./Input/RightSideInput";
import styles from "./RightSidebar.module.css";
import Trends from "./Sidebar/Trends";
import UserAuth from "./Sidebar/UserAuth";

export default function RightSidebar() {
  return (
    <nav id={styles.sidebar}>
      <RightSideInput />
      <UserAuth />
      <Trends />
      <section id={styles.sidebar__recommend__follows}>팔로우추천</section>
      <section id={styles.sidebar__footer}>이용약관등</section>
    </nav>
  );
}
