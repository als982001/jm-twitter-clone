"use client";

import { BiSolidUserCircle } from "react-icons/bi";
import styles from "./SidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";
import LoginButton from "../LoginButton";
import { getNameFromEmail } from "@/app/Functions/Functions";
import { signOut } from "next-auth/react";
import mongoose from "mongoose";
import { ITwit, IUser } from "@/utils/types";

interface IServerSession {
  user: IUser;
}

interface IProps {
  session: IServerSession | null;
}

export default function SidebarUser({ session }: IProps) {
  return session ? (
    <section id={styles.sidebar__user}>
      <img className={styles.sidebar__user__icon} src={session.user.imageUrl} />
      <section id={styles.sidebar__user__texts}>
        <h6
          className={styles.sidebar__user__text}
          id={styles.sidebar__user__nickname}
        >
          {session.user.nickname}
        </h6>
        <h6
          className={styles.sidebar__user__text}
          id={styles.sidebar__user__id}
        >
          {getNameFromEmail(session.user.email)}
        </h6>
      </section>
      <BsThreeDots
        className={styles.sidebar__user__etc}
        onClick={() => {
          signOut();
        }}
      />
    </section>
  ) : (
    <LoginButton />
  );
}

//   <LoginButton />
