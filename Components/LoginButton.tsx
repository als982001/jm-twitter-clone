"use client";

import { signIn } from "next-auth/react";
import styles from "./LoginButton.module.css";

export default function LoginButton() {
  return (
    <button
      onClick={() => {
        signIn();
      }}
      id={styles.sidebar__user__login__button}
    >
      로그인
    </button>
  );
}
