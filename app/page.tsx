import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/emails", {
    method: "GET",
  });
  const twits = await response.json();

  return <main className={styles.main}></main>;
}
