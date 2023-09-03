import { IUser, defaultUser } from "@/utils/types";
import styles from "../../app/[username]/page.module.css";

interface IProps {
  user: IUser;
}

export default function ProfileUserInfo({ user = defaultUser }: IProps) {
  return (
    <section id={styles.profile__profile}>
      <img id={styles.profile__user__icon} src={user.imageUrl} />
      <section id={styles.profile__profile__space}>
        <img id={styles.profile__profile__img} src={user.imageUrl} />
      </section>
      <section id={styles.profile__profile__space}>
        <button id={styles.profile__setting}>프로필 설정하기</button>
        <ul id={styles.profile__user__infos}>
          <li id={styles.profile__user__nickname}>{user.nickname}</li>
          <li id={styles.profile__user__info}>{user.email}</li>
          <li id={styles.profile__user__info}>가입일</li>
          <li id={styles.profile__user__info}>팔로우 중 / 팔로워</li>
        </ul>
      </section>
    </section>
  );
}
