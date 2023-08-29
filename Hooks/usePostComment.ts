import { checkLogin, getUserInfo } from "@/utils/functions";
import { postComment } from "@/utils/twitFunctions";
import { IUser } from "@/utils/types";
import mongoose from "mongoose";
import React, { useEffect, useRef, useState } from "react";

export default function usePostComment(
  twitId: mongoose.Types.ObjectId | string
) {
  const [comment, setComment] = useState("");
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const changeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment((prev) => event.target.value);
  };

  const handlePostComment = async (event: any) => {
    event.preventDefault();

    const result = await postComment(twitId, comment);
  };

  useEffect(() => {
    (async () => {
      const result = await checkLogin();

      setUserInfo(result.data);
    })();
  }, []);

  return { comment, changeComment, handlePostComment, userInfo };
}
