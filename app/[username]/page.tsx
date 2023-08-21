import styles from "./page.module.css";

export default function Profile() {
  const nickname = "유저01";

  return (
    <main id={styles.main}>
      <header id={styles.profile__header}>
        <h2 id={styles.profile__header__title}>유저이름</h2>
        <h4 id={styles.profile__header__email}>user@email.com</h4>
      </header>
      <section id={styles.profile__profile}>
        <img
          id={styles.profile__user__icon}
          src="https://pbs.twimg.com/media/F38i8-rbIAARUb0?format=jpg&name=4096x4096"
        />
        <section id={styles.profile__profile__space}>
          <img
            id={styles.profile__profile__img}
            src="https://pbs.twimg.com/media/F4CGA9paQAA08zw?format=png&name=orig"
          />
        </section>
        <section id={styles.profile__profile__space}>
          <button id={styles.profile__setting}>프로필 설정하기</button>
          <ul id={styles.profile__user__infos}>
            <li id={styles.profile__user__nickname}>닉네임</li>
            <li id={styles.profile__user__info}>이메일</li>
            <li id={styles.profile__user__info}>가입일</li>
            <li id={styles.profile__user__info}>팔로우 중 / 팔로워</li>
          </ul>
        </section>
      </section>
      <section id={styles.profile__main}>
        <ul id={styles.profile__menus}>
          <li id={styles.profile__menu}>게시물</li>
          <li id={styles.profile__menu}>답글</li>
          <li id={styles.profile__menu}>하이라이트</li>
          <li id={styles.profile__menu}>미디어</li>
          <li id={styles.profile__menu}>마음에 들어요</li>
        </ul>
        <section id={styles.profile__content} />
      </section>
    </main>
  );
}
