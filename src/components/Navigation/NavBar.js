import React from "react";
import logoImage from "../../assets/images/logo.png";
import styles from "./NavBar.module.css";
import Button from "../UI/Button/Button";
import { useAuth } from "../../firebase/auth.js";

function NavBar() {
  const { authUser, signOut } = useAuth();
  return authUser ? (
    <nav className={styles.navbar}>
      <div className={styles["logo-name"]}>
        <div className={styles.logo}>
          <img src={logoImage} alt="Logo" />
        </div>
        <div className={styles["website-name"]}>LeafDiary</div>
      </div>

      <div className={styles.userInfo}>
        <span className={styles["user-email"]}>{authUser?.email}</span>
        <Button type="submit" onClick={signOut}>
          Logout
        </Button>
      </div>
    </nav>
  ) : (
    <></>
  );
}

export default NavBar;
