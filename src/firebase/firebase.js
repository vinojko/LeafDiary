import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/* const firebaseConfig = {
  apiKey: "AIzaSyCw7y7ajNMnIOSZbr-39MaI6MtrMoTyFpo",
  authDomain: "leafdiary-331e6.firebaseapp.com",
  projectId: "leafdiary-331e6",
  storageBucket: "leafdiary-331e6.appspot.com",
  messagingSenderId: "238496224460",
  appId: "1:238496224460:web:1d8363e9f51939c30d1e69",
}; */

const firebaseConfig = {
  apiKey: "AIzaSyALW4M4LxyerGrVqTQpKWAUxyp841W_iDk",
  authDomain: "leafdiary-c438b.firebaseapp.com",
  projectId: "leafdiary-c438b",
  storageBucket: "leafdiary-c438b.appspot.com",
  messagingSenderId: "428705966772",
  appId: "1:428705966772:web:dfc419a7d18992025685e1",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
