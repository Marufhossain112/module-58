import React, { Children, createContext } from "react";

// creating context
const AuthContext = createContext();

const UserContexts = ({ Children }) => {
  const user = { displayName: "Batash" };
  const authInfo = { user : user};
  //! see  documentation
  // here Children is coming  from  index.js
  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default UserContexts;
