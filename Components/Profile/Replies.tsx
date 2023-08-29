import useGetCommentsByUesr from "@/Hooks/useGetCommentsByUser";
import { useEffect, useRef } from "react";
import Comment from "../Twit/Comment";
import { useRouter } from "next/navigation";

interface IProps {
  nickname: string;
}

const options = {
  threshold: 0.5,
};

export default function Replies({ nickname }: IProps) {
  const { comments, isLoading, addIndex } = useGetCommentsByUesr(nickname);

  const bottomRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(addIndex, options);
    observer.observe(bottomRef.current as any);
  }, []);

  const router = useRouter();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        comments.map((comment, index) => (
          <section
            key={comment._id.toString()}
            onClick={() => {
              router.push(`/twit/${comment.twit.toString()}`);
            }}
            style={{ cursor: "pointer" }}
          >
            <Comment comment={comment} />
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
