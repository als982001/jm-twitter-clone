"use client";

import { PleaseWait } from "@/app/Functions/Functions";
import styles from "./UserAuth.module.css";

export default function UserAuth() {
  return (
    <section className={styles.sidebar__container} id={styles.sidebar__auth}>
      <h4 id={styles.sidebar__auth__title}>인증 받기</h4>
      <h5 id={styles.sidebar__auth__content}>
        구독을 시작하고 새로운 기능을 사용해 보세요.
      </h5>
      <button id={styles.sidebar__auth__button} onClick={() => PleaseWait()}>
        인증 받기
      </button>
    </section>
  );
}
