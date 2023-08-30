"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default async function page() {
  const router = useRouter();

  return (
    <div id={styles.wrapper}>
      <h1 id={styles.title}>아직 완성되지 않은 기능입니다.</h1>
      <h4
        id={styles.goback}
        onClick={() => {
          router.back();
        }}
      >
        돌아가기 ↩
      </h4>
    </div>
  );
}
