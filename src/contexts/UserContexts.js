import React, { createContext } from "react";

// creating context
export const AuthContext = createContext();

const UserContexts = ({ children }) => {
  const uservalue = { displayName: "Batash" };
  const authInfo = { user: uservalue };
  //! see  documentation
  // here children is coming  from  index.js
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContexts;
