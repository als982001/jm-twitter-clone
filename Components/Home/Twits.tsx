import styles from "./Twits.module.css";
import { useEffect, useRef, useState } from "react";
import Twit from "./Twit";
import useGetTwits from "@/Hooks/useGetTwits";

const options = {
  threshold: 0.5,
};

export default function Twits() {
  const { twits, isLoading, addIndex } = useGetTwits();

  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(addIndex, options);
    observer.observe(bottomRef.current as any);

    return () => {
      // observer.unobserve(bottomRef.current as any);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        twits.map((twit, index) => (
          <Twit key={twit._id.toString()} twit={twit} />
        ))
      )}
      <section
        ref={bottomRef}
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        더 보기
      </section>
    </>
  );
}
