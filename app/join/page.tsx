"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Join() {
  const [joinInfo, setJoinInfo] = useState({
    id: "",
    email: "",
    password: "",
    password2: "",
  });

  const router = useRouter();

  const handleJoin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/join", {
        method: "POST",
        body: JSON.stringify(joinInfo),
      });

      if (response.status === 500) {
        const result = await response.json();
        alert(result);
      }

      if (response.status === 201) {
        alert("성공적으로 회원가입을 마쳤습니다.");
        router.push("/login");
      }
    } catch (error) {
      alert("에러가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <section id={styles.join__wrapper}>
      <form onSubmit={handleJoin} id={styles.join__form}>
        <h1 id={styles.join__title}>회원가입</h1>
        <input
          className={styles.join__input}
          placeholder="아이디"
          name="id"
          value={joinInfo.id}
          onChange={(event) =>
            setJoinInfo({ ...joinInfo, id: event.target.value })
          }
        />
        <input
          className={styles.join__input}
          placeholder="Email"
          name="email"
          type="email"
          value={joinInfo.email}
          onChange={(event) =>
            setJoinInfo({ ...joinInfo, email: event.target.value })
          }
        />
        <input
          className={styles.join__input}
          placeholder="비밀번호"
          name="password"
          type="password"
          value={joinInfo.password}
          onChange={(event) =>
            setJoinInfo({ ...joinInfo, password: event.target.value })
          }
        />
        <input
          className={styles.join__input}
          placeholder="비밀번호 확인"
          name="password2"
          type="password"
          value={joinInfo.password2}
          onChange={(event) =>
            setJoinInfo({ ...joinInfo, password2: event.target.value })
          }
        />
        <section id={styles.join__buttons}>
          <button
            id={styles.join__button}
            style={{
              backgroundColor:
                joinInfo.password.length > 0 &&
                joinInfo.password === joinInfo.password2
                  ? "#00acee"
                  : "gray",
            }}
            disabled={
              !(
                joinInfo.id.length > 0 &&
                joinInfo.email.length > 0 &&
                joinInfo.password2.length > 0 &&
                joinInfo.password.length > 0 &&
                joinInfo.password === joinInfo.password2
              )
            }
          >
            회원가입
          </button>
          <h4 id={styles.join__to__login} onClick={() => signIn()}>
            계정이 이미 있으신가요?
          </h4>
        </section>
      </form>
    </section>
  );
}
