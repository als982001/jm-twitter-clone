"use client";
import styles from "./SidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";

interface IProps {
  onClick: () => void;
}

export default function MoreUserInfo({ onClick }: IProps) {
  return (
    <BsThreeDots className={styles.sidebar__user__etc} onClick={onClick} />
  );
}
