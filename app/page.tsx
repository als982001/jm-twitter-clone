"use client";

import styles from "./page.module.css";
import Header from "@/Components/Home/Header";
import Write from "@/Components/Home/Write";
import Twit from "@/Components/Home/Twit";
import { useEffect, useRef, useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";

export const dynamic = "force-dynamic"; // <= 추가한 코드

const options = {
  threshold: 0.5,
};

export default async function Home() {
  const [idxes, setIdxes] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [isLoading, setIsLoading] = useState(false);

  const target = useRef(null);

  const addDatas = () => {
    console.log(`isLoading: ${isLoading}`);

    if (isLoading === false) {
      console.log("Add Datas");
      setIsLoading((prev) => true);

      setTimeout(() => {
        const newIdxes = [
          ...idxes,
          idxes.length,
          idxes.length + 1,
          idxes.length + 2,
        ];

        setIdxes((prev) => newIdxes);

        setIsLoading((prev) => false);
      }, 1000);
    }
  };

  useEffect(() => {
    console.log(idxes);
  }, [idxes]);

  const observer = new IntersectionObserver(addDatas, options);

  useEffect(() => {
    observer.observe(target.current as any);
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <section id={styles.twits}>
        <Write />
        {idxes.map((idx) => (
          <Twit key={idx + ""} />
        ))}
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <section ref={target} id={styles.bottom} />
        )}
      </section>
    </main>
  );
}
