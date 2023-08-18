"use client";

import styles from "./SidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";
import LoginButton from "./LoginButton";
import { getNameFromEmail } from "@/app/Functions/Functions";
import { signOut } from "next-auth/react";
import mongoose from "mongoose";
import { ITwit, IUser } from "@/utils/types";
import MoreUserInfo from "./MoreUserInfo";

interface IProps {
  user: IUser | null;
}

export default function SidebarUser({ user }: IProps) {
  return (
    user && (
      <section id={styles.sidebar__user}>
        <img className={styles.sidebar__user__icon} src={user.imageUrl} />
        <section id={styles.sidebar__user__texts}>
          <h6
            className={styles.sidebar__user__text}
            id={styles.sidebar__user__nickname}
          >
            {user.nickname}
          </h6>
          <h6
            className={styles.sidebar__user__text}
            id={styles.sidebar__user__id}
          >
            {getNameFromEmail(user.email)}
          </h6>
        </section>
        <MoreUserInfo />
      </section>
    )
  );
}
