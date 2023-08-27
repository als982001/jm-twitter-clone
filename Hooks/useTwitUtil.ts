import { postLike } from "@/utils/twitFunctions";
import { ITwit, IUser } from "@/utils/types";
import mongoose from "mongoose";
import { useState } from "react";

interface IResult {}

export default function useTwitUtil(twit: ITwit) {
  const [likesNum, setLikesNum] = useState(twit.likes.length);

  const handlePostLike = async (twitId: mongoose.Types.ObjectId | string) => {
    const result = await postLike(twitId);

    if (result.data === "increase") {
      setLikesNum((prev) => prev + 1);
    } else if (result.data === "decrease") {
      setLikesNum((prev) => prev - 1);
    }
  };

  return { handlePostLike, likesNum };
}
