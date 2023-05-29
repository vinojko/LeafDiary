import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EntryDetail.module.css";
import BackButton from "../UI/Button/BackButton";

const EntryDetail = (props) => {
  // Fetch the id parameter from the URL
  const { id } = useParams();

  // Use the id parameter to fetch the entry details from your Firebase database or any other data source
  // You can store the fetched data in a state variable or use it directly in your component

  // Example data
  const entry = {
    title: "Title example",
    date: "12.04.2020",
    content:
      "Lorem ipsum lmao man jitno bitnos skitnos gang nation has the advantage.",
  };

  return (
    <div className={styles["entry-detail-container"]}>
      <div className={styles["button-container"]}>
        <BackButton />
      </div>

      <div className={styles["entry-detail"]}>
        <div className={styles.title}>{entry.title}</div>
        <div className={styles.date}>{entry.date}</div>
        <div className={styles.content}>{entry.content}</div>
      </div>
    </div>
  );
};

export default EntryDetail;
