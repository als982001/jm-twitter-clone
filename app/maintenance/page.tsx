import styles from "./page.module.css";
import Maintenance from "@/Components/Global/Maintenance";

export default async function page() {
  return (
    <div id={styles.wrapper}>
      <Maintenance />
    </div>
  );
}
