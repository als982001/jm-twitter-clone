import styles from "./Twit.module.css";
import TwitImages from "./TwitImages";

export default function Twit() {
  return (
    <section id={styles.twit}>
      <section id={styles.twit__main}>
        <img
          id={styles.twit__user__icon}
          src="https://pbs.twimg.com/media/F01zutAWwAITpl4?format=jpg&name=large"
          alt="icon"
        />
        <section id={styles.twit__contents}>
          <h4 id={styles.twit__author}>작성자</h4>
          <ul id={styles.twit__tags}>
            <li>#ブルアカ</li>
            <li>#ブルーアーカイブ</li>
          </ul>
          <h5 id={styles.twit__content}>
            【リマインド】
            現在開催中の期間限定復刻ピックアップ募集「海統べる寄り添いの月光」&「夏乱す容赦なき太陽」は、7/12(水)10:59までの開催となります！
            期間終了後、ピックアップ対象の生徒さんは「通常募集」にてお迎えすることができません。
            ご検討中の先生はご注意ください。
          </h5>
        </section>
      </section>
      <TwitImages />
    </section>
  );
}
