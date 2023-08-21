import styles from "./page.module.css";
import Maintenance from "@/Components/Global/Maintenance";

export default async function Test() {
  return (
    <div id={styles.wrapper}>
      <Maintenance />
    </div>
  );
}
