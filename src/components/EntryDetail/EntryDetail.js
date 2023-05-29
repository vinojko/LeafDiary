import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EntryDetail.module.css";
import BackButton from "../UI/Button/BackButton";
import { getEntry } from "../../firebase/firestore";
import { useEffect, useState } from "react";

const EntryDetail = (props) => {
  // Fetch the id parameter from the URL
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const entryData = await getEntry(id);
        setEntry(entryData);
      } catch (error) {
        // Handle the error, e.g., display an error message
        console.error("Error fetching entry:", error);
      }
    };

    console.log(entry);
    fetchEntry();
  }, [id]);

  if (!entry) {
    // Display a loading state or return null until the entry data is fetched
    return null;
  }

  const formattedDate = entry.date.toDate().toLocaleDateString();
  // Use the id parameter to fetch the entry details from your Firebase database or any other data source
  // You can store the fetched data in a state variable or use it directly in your component

  // Example data

  return (
    <div className={styles["entry-detail-container"]}>
      <div className={styles["button-container"]}>
        <BackButton />
      </div>

      <div className={styles["entry-detail"]}>
        <div className={styles.title}>{entry.title}</div>
        <div className={styles.date}>{formattedDate}</div>
        <div className={styles.content}>{entry.content}</div>
      </div>
    </div>
  );
};

export default EntryDetail;
