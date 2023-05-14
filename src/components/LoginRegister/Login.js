import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import logoImage from "../../assets/images/logo.png";
import { HiUser } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Signin successful
      //toastSuccess();
      navigate("/");
    } catch (error) {
      // Handle registration error
      console.error(error);
      //toastError(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className={styles["login-container"]}>
          <div className={styles["login"]}>
            <div className={styles["login-logo"]}>
              <img src={logoImage} alt="Logo" />

              <div className={styles["login-title"]}>LeafDiary</div>
            </div>

            <div className={styles["input-container"]}>
              <HiUser className={styles["icon"]} />

              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles["login-input"]}
              />
            </div>
            <div className={styles["input-container"]}>
              <HiLockClosed className={styles["icon"]} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles["login-input"]}
              />
            </div>
            <div className={styles["no-account"]}>
              <p>
                Don't have an account? <Link to="/register">Join now. </Link>
              </p>
            </div>
            <div className={styles["login-button"]}>
              <Button type="submit">Sign in</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
