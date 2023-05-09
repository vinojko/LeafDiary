import React from "react";
import logoImage from "../../assets/images/logo.png";
import styles from "./NavBar.module.css";
import Button from "../UI/Button/Button";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-name"]}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Logo" />
        </div>
        <div className={styles["website-name"]}>LeafDiary</div>
      </div>

      <div className={styles.userInfo}>
        <span className={styles["user-email"]}>example@gmail.com</span>
        <Button type="submit">Logout</Button>
      </div>
    </nav>
  );
}

export default NavBar;
