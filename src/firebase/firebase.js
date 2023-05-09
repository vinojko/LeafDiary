import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw7y7ajNMnIOSZbr-39MaI6MtrMoTyFpo",
  authDomain: "leafdiary-331e6.firebaseapp.com",
  projectId: "leafdiary-331e6",
  storageBucket: "leafdiary-331e6.appspot.com",
  messagingSenderId: "238496224460",
  appId: "1:238496224460:web:1d8363e9f51939c30d1e69",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
