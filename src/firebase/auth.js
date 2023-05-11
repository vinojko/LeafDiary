import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (user) => {
    setIsLoading(true);

    if (!user) {
      setAuthUser(null);
      setIsLoading(false);
      return;
    }

    setAuthUser({
      uid: user.uid,
      email: user.email,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return { authUser, isLoading };
}

export function AuthUserProvider({ children }) {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
