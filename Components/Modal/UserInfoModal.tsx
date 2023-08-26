import { IUser } from "@/utils/types";
import styles from "./UserInfoModal.module.css";

interface IProps {
  user: IUser;
}

export default function userModal({ user }: IProps) {
  return (
    <section id={styles.container}>
      <section id={styles.user}>
        <section id={styles.user__icon}>
          <section
            id={styles.user__icon__img}
            style={{
              backgroundImage: `url('${user.imageUrl}')`,
            }}
          />
        </section>
        <h3 id={styles.user__nickname} className={styles.user__string}>
          {user.nickname}
        </h3>
        <h4 id={styles.user__email} className={styles.user__string}>
          {user.email}
        </h4>
      </section>
      <section className={styles.button}>로그아웃</section>
      <section className={styles.button}>계정 관리</section>
    </section>
  );
}
