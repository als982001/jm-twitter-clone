"use client";

import useSelectProfileMenu from "@/Hooks/useSelectProfileMenu";
import styles from "../../app/[username]/page.module.css";
import Posts from "./Posts";
import Replies from "./Replies";
import Highlights from "./Highlights";
import Media from "./Media";
import Likes from "./Likes";
import { IUser } from "@/utils/types";

interface IProps {
  user: IUser;
}

const POSTS = "posts";
const REPLIES = "replies";
const HIGHLIGHTS = "highlights";
const MEDIA = "media";
const LIKES = "likes";

export default function ProfileMenu({ user }: IProps) {
  const { menu, selectMenu } = useSelectProfileMenu();

  return (
    <section id={styles.profile__main}>
      <ul id={styles.profile__menus}>
        <li
          id={styles.profile__menu}
          onClick={() => {
            selectMenu(POSTS);
          }}
        >
          <h6
            className={styles.menu__name}
            style={{
              borderBottom:
                menu === POSTS ? "5px solid var(--twitter-color" : "none",
            }}
          >
            게시물
          </h6>
        </li>
        <li
          id={styles.profile__menu}
          onClick={() => {
            selectMenu("replies");
          }}
        >
          <h6
            className={styles.menu__name}
            style={{
              borderBottom:
                menu === REPLIES ? "5px solid var(--twitter-color" : "none",
            }}
          >
            답글
          </h6>
        </li>
        <li
          id={styles.profile__menu}
          onClick={() => {
            selectMenu("highlights");
          }}
        >
          <h6
            className={styles.menu__name}
            style={{
              borderBottom:
                menu === HIGHLIGHTS ? "5px solid var(--twitter-color" : "none",
            }}
          >
            하이라이트
          </h6>
        </li>
        <li
          id={styles.profile__menu}
          onClick={() => {
            selectMenu("media");
          }}
        >
          <h6
            className={styles.menu__name}
            style={{
              borderBottom:
                menu === MEDIA ? "5px solid var(--twitter-color" : "none",
            }}
          >
            미디어
          </h6>
        </li>
        <li
          id={styles.profile__menu}
          onClick={() => {
            selectMenu("likes");
          }}
        >
          <h6
            className={styles.menu__name}
            style={{
              borderBottom:
                menu === LIKES ? "5px solid var(--twitter-color" : "none",
            }}
          >
            마음에 들어요
          </h6>
        </li>
      </ul>
      {menu === "posts" && <Posts nickname={user.nickname} />}
      {menu === "replies" && <Replies nickname={user.nickname} />}
      {menu === "highlights" && <Highlights />}
      {menu === "media" && <Media />}
      {menu === "likes" && <Likes user={user} />}
    </section>
  );
}
