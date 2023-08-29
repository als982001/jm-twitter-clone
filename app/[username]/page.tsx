"use client";

import ProfileUserInfo from "@/Components/Profile/ProfileUserInfo";
import styles from "./page.module.css";
import ProfileMenu from "@/Components/Profile/ProfileMenu";
import { IUser } from "@/utils/types";
import { useParams } from "next/navigation";
import { findUserByNickname } from "@/utils/userFunctions";

interface IParams {
  username: string;
}

interface IFindUserByNickname {
  status: number;
  data: IUser | null;
}

export default async function Profile() {
  const params: IParams = useParams();
  const nickname = decodeURIComponent(params.username);

  const result: IFindUserByNickname = await findUserByNickname(nickname);

  return result.data ? (
    <main id={styles.main}>
      <header id={styles.profile__header}>
        <h2 id={styles.profile__header__title}>{result.data.nickname}</h2>
        <h4 id={styles.profile__header__email}>{result.data.email}</h4>
      </header>
      <ProfileUserInfo user={result.data} />
      <ProfileMenu user={result.data} />
    </main>
  ) : (
    <main>해당 유저 없음!</main>
  );
}
