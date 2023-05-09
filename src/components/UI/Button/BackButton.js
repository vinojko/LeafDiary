import styles from "./BackButton.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <Link to={"/"} className={styles["back-button"]}>
      <span className={styles["back-button-icon"]}>
        <MdOutlineArrowBackIosNew></MdOutlineArrowBackIosNew>
      </span>
    </Link>
  );
}

export default BackButton;
