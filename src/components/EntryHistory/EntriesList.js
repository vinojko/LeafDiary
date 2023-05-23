import EntryHistory from "./EntryHistory";
import styles from "./EntriesList.module.css";

const EntriesList = () => {
  const isEmpty = props.items.length === 0;
  //Prvo neki kar se navezuje, potem pa set...., to kar posodobi spremenljivko
  if (isEmpty) {
    return <div className={styles["no-entries"]}>No entries found...</div>;
  } else
    return (
      <div>
        {props.items.map((entry) => (
          <EntryHistory
            title={entry.title}
            date={entry.date}
            content={entry.content}
          />
        ))}
      </div>
    );
};

export default EntriesList;
