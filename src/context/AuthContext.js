import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config/initialFirebase';
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  logout: () => Promise,
});
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/display-name
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
      if (user) router.push('/layout');
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    console.log('The user is', currentUser);
  }, [currentUser]);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  function logout() {
    return signOut(auth);
  }
  const value = { currentUser, signInWithGoogle, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
