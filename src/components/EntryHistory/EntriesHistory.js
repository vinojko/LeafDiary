import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CostumCalendar.css";
import styles from "./EntriesHistory.module.css";

import EntriesList from "./EntriesList";

const EntriesHistory = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles["entries-container"]}>
      <Calendar onChange={setDate} value={date} className={styles.calendar} />
      <div className={styles["entries-history"]}>
        <EntriesList />
      </div>
    </div>
  );
};

export default EntriesHistory;
