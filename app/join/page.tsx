"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import useJoin from "@/Hooks/useJoin";

const LOADING = "loading";
const AUTH = "authenticated";
const UNAUTH = "unauthenticated";

export const dynamic = "force-dynamic"; // <= 추가한 코드

export default function Join() {
  const {
    joinInfo,
    setJoinInfo,
    isLoading,
    setIsLoading,
    handleJoin,
    imageUrl,
    handleInputImage,
    clickImageInput,
    imageInputRef,
  } = useJoin();

  const router = useRouter();

  let session = useSession();

  useEffect(() => {
    if (session.status === LOADING) {
      setIsLoading((prev) => true);
    } else if (session.status === UNAUTH) {
      setIsLoading((prev) => false);
    } else if (session.status === AUTH) {
      router.push("/");
    }
  }, [session.status]);

  return (
    <section id={styles.join__wrapper}>
      {isLoading ? (
        <h1 id={styles.join__Loader}>Loading...</h1>
      ) : (
        <form onSubmit={handleJoin} id={styles.join__form}>
          <h1 id={styles.join__title}>회원가입</h1>
          <img
            id={styles.join__icon}
            src={imageUrl}
            onClick={clickImageInput}
          />
          <input
            type="file"
            accept="*/image"
            style={{ display: "none" }}
            onChange={handleInputImage}
            ref={imageInputRef}
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
            placeholder="닉네임"
            name="nickname"
            value={joinInfo.nickname}
            onChange={(event) =>
              setJoinInfo({ ...joinInfo, nickname: event.target.value })
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
                  joinInfo.nickname.length > 0 &&
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
      )}
    </section>
  );
}
