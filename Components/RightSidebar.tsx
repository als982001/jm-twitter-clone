import RightSideInput from "./Input/RightSideInput";
import styles from "./RightSidebar.module.css";
import OtherInfos from "./Sidebar/OtherInfos";
import RecommendFollows from "./Sidebar/RecommendFollows";
import Trends from "./Sidebar/Trends";
import UserAuth from "./Sidebar/UserAuth";

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
