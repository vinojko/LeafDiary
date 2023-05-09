import styles from "./EntryDetail.module.css";
import BackButton from "../UI/Button/BackButton";

const EntryDetail = (props) => {
  return (
    <div className={styles["entry-detail-container"]}>
      <div className={styles["button-container"]}>
        <BackButton />
      </div>

      <div className={styles["entry-detail"]}>
        <div className={styles.title}>Title example</div>
        <div className={styles.date}>12.04.2020</div>
        <div className={styles.content}>
          Lorem ipsum lmao man jitno bitnos skitnos gang nation has the
          advantage.
        </div>
      </div>
    </div>
  );
};

export default EntryDetail;
