import React from "react";
import styles from "./NewEntry.module.css";
import EntryForm from "./EntryForm";
import { useAuth } from "../../firebase/auth";
import { v4 as uuidv4 } from "uuid"; // Example usage of 'uuid' library

const NewEntry = (props) => {
  const { authUser } = useAuth();
  const saveEntryHandler = (enteredEntries) => {
    const entryData = {
      ...enteredEntries,
      id: uuidv4(),
    };

    console.log(entryData);
    props.onAddEntry(entryData);
  };
  return (
    <div className={styles["new-entry"]}>
      <EntryForm onSaveEntryData={saveEntryHandler} />
    </div>
  );
};

export default NewEntry;
