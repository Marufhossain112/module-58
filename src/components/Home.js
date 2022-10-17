import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContexts";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>This is home for {user?.displayName}</h2>
    </div>
  );
};

export default Home;
