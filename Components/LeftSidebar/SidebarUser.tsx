"use client";

import styles from "./SidebarUser.module.css";
import { IUser } from "@/utils/types";
import MoreUserInfo from "./MoreUserInfo";
import { Dispatch, SetStateAction, useState } from "react";
import { getNameFromEmail } from "@/utils/functions";

interface IProps {
  user: IUser | null;
  setShowUserModal: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarUser({ user, setShowUserModal }: IProps) {
  return (
    <>
      {user && (
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
          <MoreUserInfo
            onClick={() => {
              setShowUserModal(true);
            }}
          />
        </section>
      )}
    </>
  );
}
