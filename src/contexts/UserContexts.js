import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
// creating context
export const AuthContext = createContext();
// get auth

const auth = getAuth(app);
const UserContexts = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Forid" });
  const uservalue = { displayName: "Batash" };
  const authInfo = { user: uservalue };
  //! see  documentation
  // here children is coming  from  index.js
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContexts;
