import { checkLogin, getUserInfo } from "@/utils/functions";
import { postComment } from "@/utils/twitFunctions";
import { IComment, IUser } from "@/utils/types";
import mongoose from "mongoose";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

export default function usePostComment(
  twitId: mongoose.Types.ObjectId | string,
  setNewComments: Dispatch<SetStateAction<IComment[]>>
) {
  const [comment, setComment] = useState("");
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const changeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment((prev) => event.target.value);
  };

  const handlePostComment = async (event: any) => {
    event.preventDefault();

    console.log(`comment: ${comment}`);

    const result = await postComment(twitId, comment);

    if (result.data) {
      setNewComments((prev) => [...prev, result.data]);
    }
  };

  useEffect(() => {
    (async () => {
      const result = await checkLogin();

      setUserInfo(result.data);
    })();
  }, []);

  return { comment, changeComment, handlePostComment, userInfo };
}
