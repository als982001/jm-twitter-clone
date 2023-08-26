"use client";

import styles from "./TwitButton.module.css";
import useTwitModal from "@/Hooks/useShowModal";
import TwitModal from "../Modal/TwitModal";

interface IProps {
  onClick: () => void;
}

export default function TwitButton({ onClick }: IProps) {
  return (
    <button onClick={onClick} id={styles.sidebar__twit__button}>
      트윗하기
    </button>
  );
}
