import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContexts";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
