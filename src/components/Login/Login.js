import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import logoImage from "../../assets/images/logo.png";

function Login() {
  return (
    <>
      <div className={styles["login-container"]}>
        <div className={styles["login"]}>
          <div className={styles["login-logo"]}>
            <img src={logoImage} alt="Logo" />
            <div className={styles["login-title"]}>LeafDiary</div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Username"
              className={styles["login-input"]}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className={styles["login-input"]}
            />
          </div>

          <div className={styles["login-button"]}>
            <Button>Sign in</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
