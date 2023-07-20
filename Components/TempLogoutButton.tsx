"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TempLogoutButton() {
  const router = useRouter();

  return (
    <button
      style={{ width: "200px", height: "50px", backgroundColor: "skyblue" }}
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      로그아웃!
    </button>
  );
}
