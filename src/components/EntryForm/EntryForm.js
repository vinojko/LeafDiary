import React, { useState, useRef } from "react";

import Button from "../UI/Button/Button";
import MDEditor from "@uiw/react-md-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./EntryForm.module.css";

const EntryForm = (props) => {
  const [contentValue, setContentValue] = useState("");

  const inputTitleRef = useRef();
  const inputDateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateFormInputs() === false) return;

    const entryData = {
      title: inputTitleRef.current.value,
      date: new Date(inputDateRef.current.value),
      content: contentValue,
    };

    console.log(entryData);
    resetFormInputs();
    toastSuccess();

    props.onSaveEntryData(entryData);
  };

  const resetFormInputs = () => {
    inputTitleRef.current.value = "";
    inputDateRef.current.value = "";
    setContentValue("");
  };

  const validateFormInputs = () => {
    if (
      inputTitleRef.current.value.trim() === "" ||
      inputDateRef.current.value.trim() === "" ||
      contentValue.trim() === ""
    ) {
      toastError();
      return false;
    }
    return true;
  };

  const toastSuccess = () => {
    toast.success("The entry has been successfully added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: styles["toast-success"],
    });
  };

  const toastError = () => {
    toast.error(
      "The entry has not been added. Please check that your input fields aren't empty.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: styles["toast-error"],
      }
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <ToastContainer
        toastStyle={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      />
      <div className={styles["entry-form__controls"]}>
        <div className={styles["entry-form__control"]}>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles["entry-controls"]}
            ref={inputTitleRef}
          />
        </div>

        <div className={styles["entry-form__control"]}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" ref={inputDateRef} />
        </div>

        <div className={styles["entry-form__control"]} data-color-mode="light">
          <div className={styles["mdeditor"]}></div>
          <label>Content</label>
          <MDEditor
            value={contentValue}
            onChange={setContentValue}
            preview={"edit"}
          />
        </div>

        <Button type="submit">Add Entry</Button>
      </div>
    </form>
  );
};

export default EntryForm;
