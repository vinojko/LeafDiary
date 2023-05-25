import React, { createContext, useContext, useState } from "react";
import { addEntry, deleteEntry, getEntries } from "../../firebase/firestore";
import { useAuth } from "../../firebase/auth";
import firebase from "../../firebase/firebase";
import "firebase/firestore";

// Create the entries context
const EntriesContext = createContext();

// Custom hook to access the entries context
export const useEntries = () => useContext(EntriesContext);

// Entries provider component
export const EntriesProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useAuth();

  // Function to fetch entries from Firestore
  const fetchEntries = async (uid) => {
    console.log("called fetchEntries");
    setIsLoading(true);
    const fetchedEntries = await getEntries(uid);
    console.log(fetchedEntries);
    setEntries(fetchedEntries);
    setIsLoading(false);
  };

  // Function to add an entry
  const addEntryToContext = async (uid, title, date, content) => {
    console.log(date);

    const newEntry = {
      id: uid,
      title: title,
      date: new Date(date).getTime(),
      content: content,
    };
    console.log("ENTRIES FROM ADDING: " + newEntry);
    addEntry(uid, title, new Date(date), content);
    fetchEntries(uid);
  };

  // Function to delete an entry
  const deleteEntryFromContext = async (entryId) => {
    await deleteEntry(entryId);
    setEntries((prevEntries) =>
      prevEntries.filter((entry) => entry.id !== entryId)
    );
    fetchEntries(authUser.uid);
  };

  // Create the entries context value
  const entriesContextValue = {
    entries,
    setEntries,
    isLoading,
    fetchEntries,
    addEntryToContext,
    deleteEntryFromContext,
  };

  // Provide the entries context to its children
  return (
    <EntriesContext.Provider value={entriesContextValue}>
      {children}
    </EntriesContext.Provider>
  );
};
