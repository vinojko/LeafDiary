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
  const entriesQuery = query(
    collection(db, ENTRIES_COLLECTION),
    where("uid", "==", uid),
    orderBy("date", "desc")
  );
  const snapshot = await getDocs(entriesQuery);

  let allEntries = [];
  snapshot.forEach((documentSnapshot) => {
    const entry = {
      id: documentSnapshot.id, // Include the ID of the entry
      ...documentSnapshot.data(),
    };
    allEntries.push(entry);
  });

  return allEntries;
}

export async function deleteEntry(entryId) {
  await deleteDoc(doc(db, ENTRIES_COLLECTION, entryId));
}
