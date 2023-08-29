import { useEffect, useRef, useState } from "react";
import Twit from "./Twit";
import useGetTwits from "@/Hooks/useGetTwits";
import { useRouter } from "next/navigation";

const options = {
  threshold: 0.5,
};

export default function Twits() {
  const { twits, isLoading, addIndex } = useGetTwits();

  const router = useRouter();

  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(addIndex, options);
    observer.observe(bottomRef.current as any);

    return () => {};
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        twits.map((twit, index) => (
          <section
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`/twit/${twit._id.toString()}`);
            }}
          >
            <Twit key={twit._id.toString()} twit={twit} />
          </section>
        ))
      )}
      <section
        ref={bottomRef}
        style={{
          width: "100%",
          height: "100px",
          display: "hidden",
        }}
      />
    </>
  );
}
