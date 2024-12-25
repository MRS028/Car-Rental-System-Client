import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   console.log(loading,user);

  //   console.log(user);

  //   New user Register
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   User Log in

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Logout
  const logOut = () => {
    return signOut(auth);
  };
  //Signin
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update data
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //   Sendings
  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
    loading,
    signInWithGoogle,
    updateUserProfile,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("state captured", currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://car-rental-system-server-five.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            // console.log("Logged in", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post("https://car-rental-system-server-five.vercel.app/logout", {}, { withCredentials: true })
          .then((res) => {
            // console.log("Logged Out", res.data);
            setLoading(false);
          });
      }

      //put
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
