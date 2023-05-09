import React, { useState, Fragment } from "react";
import styles from "./NewEntry.module.css";
import EntryForm from "./EntryForm";

const NewEntry = (props) => {
  const saveEntryHandler = (enteredEntries) => {
    const entryData = {
      ...enteredEntries,
      id: Math.random.toString(),
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
