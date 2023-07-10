import Header from "@/Components/Home/Header";
import styles from "./page.module.css";
import Write from "@/Components/Home/Write";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section id={styles.twits}>
        <Write />
      </section>
    </main>
  );
}
