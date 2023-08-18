import styles from "./write.module.css";
import { BsImage } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlineBars,
  AiOutlineSmile,
} from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import usePostTwit from "@/Hooks/usePostTwit";
import React from "react";
import Twit from "./Twit";
import WriteForm from "./WriteForm";

export default function Write() {
  const {
    content,
    writeTwit,
    handlePostTwit,
    imageUrl,
    postImage,
    removeImage,
    newTwits,
    userInfo,
    imageInputRef,
    clickImageInput,
  } = usePostTwit();

  return (
    <>
      <WriteForm
        handlePostTwit={handlePostTwit}
        imageInputRef={imageInputRef}
        postImage={postImage}
        userInfo={userInfo}
        content={content}
        writeTwit={writeTwit}
        imageUrl={imageUrl}
        removeImage={removeImage}
        clickImageInput={clickImageInput}
      />
      {newTwits.map((newTwit) => (
        <Twit twit={newTwit} key={newTwit._id.toString()} />
      ))}
    </>
  );
}
