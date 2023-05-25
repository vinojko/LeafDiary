import NewEntry from "../components/EntryForm/NewEntry";
import EntriesHistory from "../components/EntryHistory/EntriesHistory";
import styles from "../App.module.css";
import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function HomePage() {
  const { authUser, isLoading } = useAuth();

  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !authUser) {
      navigate("/login");
    }
  }, [isLoading, authUser]);

  const addEntryHandler = (entry) => {
    setEntries((prevEntries) => {
      return [entry, ...prevEntries];
    });
  };
  return !authUser ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: "50%", marginTop: "25%" }}
    />
  ) : (
    <>
      <div className={styles["container"]}>
        <EntriesHistory items={entries} />
        <NewEntry onAddEntry={addEntryHandler} />
      </div>
    </>
  );
}

export default HomePage;
