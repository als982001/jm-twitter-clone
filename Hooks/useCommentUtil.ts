import { postCommentLike } from "@/utils/twitFunctions";
import { IComment } from "@/utils/types";
import mongoose from "mongoose";
import { useState } from "react";

export default function useCommentUtil(likesLength: number) {
  const [likesNum, setLikesNum] = useState<number>(likesLength);

  const handlePostCommentLike = async (
    commentId: mongoose.Types.ObjectId | string
  ) => {
    const result = await postCommentLike(commentId);
    console.log(result);

    if (result.data === "increase") {
      setLikesNum((prev) => prev + 1);
    } else if (result.data === "decrease") {
      setLikesNum((prev) => prev - 1);
    }
  };

  return { handlePostCommentLike, likesNum };
}
