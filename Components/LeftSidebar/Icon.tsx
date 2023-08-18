import styles from "./LeftSidebar.module.css";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Icon() {
  return (
    <li className={styles.sidebar__menu}>
      <section className={styles.sidebar__twitter__logo__wrapper}>
        <Link href="/">
          <AiOutlineTwitter className={styles.sidebar__twitter__logo} />
        </Link>
      </section>
    </li>
  );
}
