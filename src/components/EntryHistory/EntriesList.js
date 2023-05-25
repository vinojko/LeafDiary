import React, { useEffect, useState, useRef } from "react";
import EntryHistory from "./EntryHistory";
import styles from "./EntriesList.module.css";
import { useAuth } from "../../firebase/auth";
import { CircularProgress } from "@mui/material";
import { useEntries } from "../context/EntriesContext";
import { getEntries, deleteEntry } from "../../firebase/firestore";

const EntriesList = () => {
  const { entries, setEntries, fetchEntries } = useEntries();
  const [isEmpty, setIsEmpty] = useState(false);
  const { authUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [prevEntries, setPrevEntries] = useState(entries);

  useEffect(() => {
    if (authUser) {
      const uid = authUser.uid;
      fetchEntries(uid);
      console.log("ENTRIES FROM FIREBASE: " + entries);
    }
  }, []);

  const deleteEntryHandler = (entryId) => {
    deleteEntry(entryId);
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== entryId)
    );
  };

  return isLoading ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: "50%", marginTop: "25%" }}
    />
  ) : (
    <div>
      {isEmpty ? (
        <div className={styles["no-entries"]}>No entries found...</div>
      ) : (
        entries.map((entry) => (
          <EntryHistory
            key={entry.id}
            id={entry.id}
            title={entry.title}
            date={entry.date.toDate()}
            content={entry.content}
            onDelete={deleteEntryHandler}
          />
        ))
      )}
    </div>
  );
};

export default EntriesList;
