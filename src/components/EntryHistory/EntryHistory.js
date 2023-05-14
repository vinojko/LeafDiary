import React from "react";
import styles from "./EntryHistory.module.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import "../../variables.css";
import { Link } from "react-router-dom";

const EntryHistory = (props) => {
  const formattedDate = props.date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const dotFormattedDate = formattedDate.replace(/\//g, ".");

  return (
    <Link
      to="/entry-detail"
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div className={styles["entry"]}>
        <div className={styles["flex-container"]}>
          <div className={styles["title"]}>{props.title}</div>
          <div className={styles["edit-icon"]}>
            <FiEdit></FiEdit>
          </div>
          <div className={styles["trash-icon"]}>
            <FiTrash></FiTrash>
          </div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["date"]}>{dotFormattedDate}</div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["date"]}>{props.content}</div>
        </div>
        <hr />
      </div>
    </Link>
  );
};

export default EntryHistory;
