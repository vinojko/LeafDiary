import React, { useEffect, useState } from "react";
import EntryHistory from "./EntryHistory";
import styles from "./EntriesList.module.css";
import { getEntries } from "../../firebase/firestore";
import { useAuth } from "../../firebase/auth";

const EntriesList = () => {
  const [entries, setEntries] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const { authUser } = useAuth();

  useEffect(() => {
    const fetchEntries = async () => {
      const uid = authUser.uid;
      const entries = await getEntries(uid);
      setEntries(entries);
      setIsEmpty(entries.length === 0);
    };

    //Brisanje in posodavljanje, mas v gptju, handler je treba dat.

    fetchEntries();
  }, []);

  return (
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
          />
        ))
      )}
    </div>
  );
};

export default EntriesList;
