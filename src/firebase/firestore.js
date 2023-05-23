import { db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const ENTRIES_COLLECTION = "entries";

export function addEntry(uid, title, date, content) {
  addDoc(collection(db, ENTRIES_COLLECTION), { uid, title, date, content });
}

export async function getEntries(uid) {
  const entries = query(
    collection(db, ENTRIES_COLLECTION),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );
  const snapshot = await getDocs(entries);

  let allEntries = [];
  for (const documentSnapshot of snapshot.docs) {
    const entry = documentSnapshot.data();
  }
  return allEntries;
}
