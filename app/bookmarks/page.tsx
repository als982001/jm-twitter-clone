import { IUser } from "@/utils/types";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

interface ICheckLogin {
  status: number;
  data: IUser;
}

interface ISession {
  user: IUser;
}

export default async function page() {
  const session: ISession | null = await getServerSession(authOptions);

  return (
    <main id={styles.main}>
      <header id={styles.bookmarks__header}>
        <h2 id={styles.bookmarks__header__title}>북마크</h2>
        <h4 id={styles.bookmarks__header__email}>{session?.user.email}</h4>
      </header>
      <section id={styles.bookmarks__main}>
        <img
          id={styles.bookmarks__img}
          src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png"
        />
        <section id={styles.bookmarks__string}>
          <h1 id={styles.bookmarks__title}>나중을 위해 게시물 저장</h1>
          <h4 id={styles.bookmarks__content}>
            좋은 게시물은 그냥 흘려 보내지 마세요. 나중에 다시 쉽게 찾을 수
            있도록 북마크에 추가하세요.
          </h4>
        </section>
      </section>
    </main>
  );
}
