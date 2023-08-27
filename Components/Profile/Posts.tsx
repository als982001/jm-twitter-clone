import useGetTwitsByUser from "@/Hooks/useGetTwitsByUser";
import { useEffect, useRef } from "react";
import Twit from "../Home/Twit";

interface IProps {
  nickname: string;
}

const options = {
  threshold: 0.5,
};

export default function Posts({ nickname }: IProps) {
  const { twits, isLoading, addIndex } = useGetTwitsByUser(nickname);

  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(addIndex, options);
    observer.observe(bottomRef.current as any);
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
          display: "hidden",
        }}
      />
    </>
  );
}
