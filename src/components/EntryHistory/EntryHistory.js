import React from "react";
import styles from "./EntryHistory.module.css";
import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import "../../variables.css";
import { Link } from "react-router-dom";
import { deleteEntry } from "../../firebase/firestore";
import Modal from "react-modal";

const EntryHistory = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const formattedDate = props.date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const dotFormattedDate = formattedDate.replace(/\//g, ".");

  const handleTrashClick = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (props.onDelete) {
      props.onDelete(props.id);
    }

    // Add your logic for handling the trash button click here
    // For example, you can delete the entry or show a confirmation dialog
  };

  return (
    <>
      <Link
        to={`/entry-detail/${props.id}`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className={styles["entry"]}>
          <div className={styles["flex-container"]}>
            <div className={styles["title"]}>{props.title}</div>
            <div className={styles["edit-icon"]}>
              <button onClick={handleTrashClick}>
                <FiEdit className={styles["edit-icon"]} />
              </button>
            </div>
            <div className={styles["trash-icon"]}>
              <button onClick={handleTrashClick}>
                <FiTrash className={styles["trash-icon"]} />
              </button>
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
    </>
  );
};

export default EntryHistory;
