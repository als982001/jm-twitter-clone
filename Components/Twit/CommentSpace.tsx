import { IComment, ITwit } from "@/utils/types";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import { useState } from "react";

interface IProps {
  twit: ITwit;
}

export default function CommentSpace({ twit }: IProps) {
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
