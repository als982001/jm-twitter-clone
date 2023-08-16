"use client";

import { BiSolidUserCircle } from "react-icons/bi";
import styles from "./SlidebarUser.module.css";
import { BsThreeDots } from "react-icons/bs";
import LoginButton from "../LoginButton";
import { getNameFromEmail } from "@/app/Functions/Functions";
import { signOut } from "next-auth/react";

interface IServerSession {
  user: {
    name?: string;
    email: string;
  };
}

interface IProps {
  session: IServerSession | null;
}

export default async function SlidebarUser({ session }: IProps) {
  return session ? (
    <section id={styles.sidebar__user}>
      <BiSolidUserCircle className={styles.sidebar__user__icon} />
      <section id={styles.sidebar__user__texts}>
        <h6
          className={styles.sidebar__user__text}
          id={styles.sidebar__user__nickname}
        >
          {session.user.name || getNameFromEmail(session.user.email)}
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
