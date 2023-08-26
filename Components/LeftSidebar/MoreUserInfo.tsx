"use client";
import { signOut } from "next-auth/react";
import styles from "./SidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

interface IProps {
  onClick: () => void;
}

export default function MoreUserInfo({ onClick }: IProps) {
  return (
    <BsThreeDots className={styles.sidebar__user__etc} onClick={onClick} />
  );
}
