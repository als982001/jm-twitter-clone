import TempLogoutButton from "@/Components/TempLogoutButton";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";

export default async function Test() {
  const session = await getServerSession(authOptions);

  return (
    <div id={styles.wrapper}>
      <TempLogoutButton />
    </div>
  );
}
