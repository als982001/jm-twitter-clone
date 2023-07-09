"use client";

import { useState } from "react";
import styles from "./Input.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function RightSideInput() {
  const [keyword, setKeyword] = useState("");

  return (
    <section id={styles.sidebar__input__space}>
      <section id={styles.sidebar__input__icons}>
        <FaMagnifyingGlass id={styles.sidebar__input__glass} />
        {keyword.length > 0 && (
          <section
            id={styles.sidebar__remove__keyword}
            onClick={() => setKeyword("")}
          >
            X
          </section>
        )}
      </section>
      <input
        id={styles.sidebar__input}
        placeholder="트위터 검색"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
    </section>
  );
}
