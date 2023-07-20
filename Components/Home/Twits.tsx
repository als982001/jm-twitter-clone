"use client";

import styles from "./Twits.module.css";
import { useEffect, useRef, useState } from "react";
import Twit from "./Twit";

const options = {
  threshold: 0.5,
};

export default function Twits() {
  const [idxes, setIdxes] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef(null);

  const addDatas = (entries: IntersectionObserverEntry[]) => {
    if (isLoading === false) {
      setIsLoading((prev) => true);

      console.log("ㅋㅋㅋ");

      setIsLoading((prev) => false);
    }
  };

  useEffect(() => {
    console.log(idxes);
  }, [idxes]);

  useEffect(() => {
    const observer = new IntersectionObserver(addDatas, options);
    observer.observe(bottomRef.current as any);

    return () => {
      observer.unobserve(bottomRef.current as any);
    };
  }, []);

  return (
    <>
      {idxes.map((idx) => (
        <Twit key={idx + ""} />
      ))}
      <section id={styles.bottom} ref={bottomRef}>
        마지막
      </section>
    </>
  );
}
