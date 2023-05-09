import NewEntry from "../components/EntryForm/NewEntry";
import EntriesHistory from "../components/EntryHistory/EntriesHistory";
import styles from "../App.module.css";
import { Fragment } from "react";
import { useState } from "react";
import NavBar from "../components/Navigation/NavBar";

const DUMMY_ENTRIES = [
  {
    id: "e1",
    title: "Friends night out",

    date: new Date(2020, 7, 14),
    content: "Caranara pasta, 2x beer, 1x water, 1x coffee",
  },
  {
    id: "e2",
    title: "Test2",

    date: new Date(2020, 7, 14),
    content: "Caranara pasta, 2x beer, 1x water, 1x coffee",
  },
];

function HomePage() {
  const [entries, setEntries] = useState(DUMMY_ENTRIES);

  const addEntryHandler = (entry) => {
    setEntries((prevEntries) => {
      return [entry, ...prevEntries];
    });
  };
  return (
    <>
      <div className={styles["container"]}>
        <EntriesHistory items={entries} />
        <NewEntry onAddEntry={addEntryHandler} />
      </div>
    </>
  );
}

export default HomePage;
