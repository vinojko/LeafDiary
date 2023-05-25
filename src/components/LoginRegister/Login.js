import styles from "./Login.module.css";
import Button from "../UI/Button/Button";
import logoImage from "../../assets/images/logo.png";
import { HiUser } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.js";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../firebase/auth";
import { CircularProgress } from "@mui/material";

//Tu si ostal.

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authUser, isLoading } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toastSuccess("You have succesfully logged in!");
      navigate("/");
    } catch (error) {
      // Handle registration error

      toastError(error.message);
    }
  };
  const toastSuccess = (successMessage) => {
    toast.success(successMessage, {
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
  const toastError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: styles["toast-error"],
    });
  };

  useEffect(() => {
    if (!isLoading && authUser) {
      navigate("/");
    }
  }, [authUser, isLoading]);

  return isLoading || (isLoading && !!authUser) ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: "50%", marginTop: "25%" }}
    />
  ) : (
    <>
      <ToastContainer
        toastStyle={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      />

      <div className={styles["login-container"]}>
        <div className={styles["login"]}>
          <div className={styles["login-logo"]}>
            <img src={logoImage} alt="Logo" />

            <div className={styles["login-title"]}>LeafDiary</div>
          </div>
          <form onSubmit={handleLogin}>
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
                Don't have an account? <Link to="/register">Join now.</Link>
              </p>
            </div>
            <div className={styles["login-button"]}>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
