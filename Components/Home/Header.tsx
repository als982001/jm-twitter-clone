import useShowType from "@/Hooks/useShowType";
import styles from "./header.module.css";
import { notImplementedYet } from "@/utils/functions";

export default function Header() {
  const [isRecommend, handleModeChange] = useShowType();

  return (
    <header id={styles.header}>
      <h3 id={styles.header__top}>홈</h3>
      <section id={styles.header__bottom}>
        <div
          className={styles.header__bottom__button}
          onClick={() =>
            typeof handleModeChange === "function" && handleModeChange(true)
          }
        >
          <h6
            className={styles.header__bottom__content}
            style={{
              borderBottom: isRecommend ? "5px solid #00acee" : "none",
            }}
          >
            추천
          </h6>
        </div>
        <div
          className={styles.header__bottom__button}
          onClick={() => {
            {
              notImplementedYet();
              typeof handleModeChange === "function" && handleModeChange(false);
            }
          }}
        >
          <h6
            className={styles.header__bottom__content}
            style={{
              borderBottom: isRecommend ? "none" : "5px solid #00acee",
            }}
          >
            팔로우 중
          </h6>
        </div>
      </section>
    </header>
  );
}
