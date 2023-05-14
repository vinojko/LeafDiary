import styles from "./Register.module.css";
import Button from "../UI/Button/Button";
import logoImage from "../../assets/images/logo.png";
import { HiUser } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/auth";
import { CircularProgress } from "@mui/material";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!checkFormInputs()) return;

    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      // Registration successful
      toastSuccess();
      navigate("/");
    } catch (error) {
      // Handle registration error
      setIsLoading(false);
      toastError(error.message);
    }
  };

  const checkFormInputs = () => {
    if (email.trim() === "" || password.trim() === "") {
      toastError("Please fill in all the fields!");
      return false;
    } else if (password.length < 6) {
      toastError("Password must be at least 6 characters long!");
      return false;
    } else if (!emailRegex.test(email)) {
      toastError("Please enter a valid email address!");
      return false;
    }
    return true;
  };

  console.log(authUser);

  const toastSuccess = () => {
    toast.success("You have succesfully registered!", {
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
  return !isLoading ? (
    <>
      <ToastContainer
        toastStyle={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      />
      <div className={styles["login-container"]}>
        <div className={styles["login-caption"]}>
          <h1>Create your account.</h1>
          <p>Capture your thoughts and experiences in a digital sanctuary!</p>
        </div>
        <div className={styles["login"]}>
          <div className={styles["login-logo"]}>
            <img src={logoImage} alt="Logo" />
            <div className={styles["login-title"]}>LeafDiary</div>
          </div>

          <form onSubmit={handleRegister}>
            <div className={styles["input-container"]}>
              <HiUser className={styles["icon"]} />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles["login-input"]}
                required
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
                required
              />
            </div>

            <div className={styles["login-button"]}>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: "50%", marginTop: "25%" }}
    />
  );
}

export default Register;
