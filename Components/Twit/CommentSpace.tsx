import { IComment, ITwit, defaultTwit } from "@/utils/types";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import { useState } from "react";

interface IProps {
  twit: ITwit;
}

export default function CommentSpace({ twit = defaultTwit }: IProps) {
  const [newComments, setNewComments] = useState<IComment[]>([]);

  return (
    <>
      <CommentInput twit={twit} setNewComments={setNewComments} />
      <Comments
        commentIds={twit.comments as string[]}
        newComments={newComments}
      />
    </>
  );
}
