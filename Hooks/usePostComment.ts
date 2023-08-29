import { postComment } from "@/utils/twitFunctions";
import mongoose from "mongoose";
import React, { useState } from "react";

export default function usePostComment(
  twitId: mongoose.Types.ObjectId | string
) {
  const [comment, setComment] = useState("");

  const changeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment((prev) => event.target.value);
    console.log(comment);
  };

  const handlePostComment = async (event: any) => {
    event.preventDefault();

    const result = await postComment(twitId, comment);
  };

  return { comment, changeComment, handlePostComment };
}
