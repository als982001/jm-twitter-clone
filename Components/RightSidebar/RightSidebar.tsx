import OtherInfos from "./OtherInfos";
import RecommendFollows from "./RecommendFollows";
import RightSideInput from "./RightSideInput";
import Trends from "./Trends";
import UserAuth from "./UserAuth";
import styles from "./RightSidebar.module.css";

export default function RightSidebar() {
  return (
    <nav id={styles.sidebar}>
      <RightSideInput />
      <div id={styles.sidebar__container}>
        <UserAuth />
        <Trends />
        <RecommendFollows />
        <OtherInfos />
      </div>
    </nav>
  );
}
