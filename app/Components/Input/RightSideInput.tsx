"use client";

import { useState } from "react";
import styles from "../RightSidebar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function RightSideInput() {
  const [keyword, setKeyword] = useState("");

  return (
    <section id={styles.sidebar__input__space}>
      <FaMagnifyingGlass id={styles.sidebar__input__glass} />
      <input
        id={styles.sidebar__input}
        placeholder="검색"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      {keyword.length > 0 && (
        <section
          id={styles.sidebar__remove__keyword}
          onClick={() => setKeyword("")}
        >
          X
        </section>
      )}
    </section>
  );
}
