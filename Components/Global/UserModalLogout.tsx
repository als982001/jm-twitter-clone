import { signOut } from "next-auth/react";
import styles from "./UserModalButton.module.css";
import { useRouter } from "next/navigation";

export default function UserModalLogout() {
  const router = useRouter();

  return (
    <section
      id={styles.button}
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      로그아웃
    </section>
  );
}
