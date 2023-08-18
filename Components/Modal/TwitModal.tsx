import usePostTwit from "@/Hooks/usePostTwit";
import Write from "../Home/Write";
import WriteForm from "../Home/WriteForm";
import styles from "./TwitModal.module.css";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function TwitModal({ setOpenModal }: IProps) {
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

  useEffect(() => {
    if (newTwits.length > 0) {
      window.location.reload();
      setOpenModal(false);
    }
  }, [newTwits]);

  return (
    <section id={styles.twitmodal__container}>
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
    </section>
  );
}
