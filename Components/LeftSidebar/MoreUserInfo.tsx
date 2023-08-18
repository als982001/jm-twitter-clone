"use client";
import { signOut } from "next-auth/react";
import styles from "./SidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";

export default function MoreUserInfo() {
  return (
    <BsThreeDots
      className={styles.sidebar__user__etc}
      onClick={() => {
        signOut();
      }}
    />
  );
}
