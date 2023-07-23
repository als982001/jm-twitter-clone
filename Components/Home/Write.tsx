import styles from "./write.module.css";
import { BsImage } from "react-icons/bs";
import {
  AiOutlineFileGif,
  AiOutlineBars,
  AiOutlineSmile,
} from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import useMake from "@/Hooks/useMakeTwit";
import React, { useRef } from "react";

export default function Write() {
  const { content, writeTwit, postTwit, imageUrl, postImage, removeImage } =
    useMake();
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={postTwit} id={styles.write}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={async (event) => {
          postImage(event);
        }}
      />
      <section id={styles.write__input__space}>
        <section id={styles.write__user__icon} />
        <input
          id={styles.write__input}
          value={content}
          onChange={(event) => writeTwit(event)}
        />
      </section>
      {imageUrl.length > 0 && (
        <section id={styles.write__image__space}>
          <img id={styles.write__image} src={imageUrl} />
          <section
            id={styles.write__image__remove}
            onClick={() => {
              removeImage();
            }}
          >
            X
          </section>
        </section>
      )}
      <section id={styles.write__options}>
        <section id={styles.write__options__row}>
          <section
            className={styles.write__option}
            onClick={() => {
              handleIconClick();
            }}
          >
            <BsImage />
          </section>
          <section className={styles.write__option}>
            <AiOutlineFileGif />
          </section>
          <section className={styles.write__option}>
            <AiOutlineBars />
          </section>
          <section className={styles.write__option}>
            <AiOutlineSmile />
          </section>
          <section className={styles.write__option}>
            <SlCalender />
          </section>
          <section className={styles.write__option}>
            <FiMapPin />
          </section>
        </section>
        <button disabled={content.length === 0} id={styles.write__button}>
          트윗하기
        </button>
      </section>
    </form>
  );
}
