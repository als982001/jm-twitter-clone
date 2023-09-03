import { ITwit, defaultTwit } from "@/utils/types";
import styles from "./Twit.module.css";
import TwitImages from "./TwitImages";
import TwitUtils from "./TwitUtils";
import useShowDetail from "@/Hooks/useShowDetail";

interface IProps {
  twit: ITwit;
}

export default function Twit({ twit = defaultTwit }: IProps) {
  const { showDetail } = useShowDetail();

  return (
    <section id={styles.twit}>
      <section
        style={{ cursor: "pointer" }}
        onClick={() => {
          showDetail(twit._id as string);
        }}
      >
        <section id={styles.twit__main}>
          <img id={styles.twit__user__icon} src={twit.authorIcon} alt="icon" />
          <section id={styles.twit__contents}>
            <section id={styles.twit__info}>
              <h4 id={styles.twit__author}>{twit.nickname}</h4>
              <h5>{twit.createdDate}</h5>
            </section>
            <h5 id={styles.twit__content}>{twit.twit}</h5>
          </section>
        </section>
        <TwitImages imageUrl={twit.imageUrl} />
      </section>

      <TwitUtils twit={twit} />
    </section>
  );
}
