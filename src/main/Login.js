import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import List from "../component/List";
import "../component/Styles/login.css";

export const UserContext = createContext();

function Login() {
  const [users, setUser] = useState();
  useEffect(() => {
    axios.get("https://panorbit.in/api/users.json").then((resp) => {
      setUser(resp.data.users);
    });
  }, []);
  return (
    <UserContext.Provider value ={users}>
      <div className="banner">
        <List />
      </div>
    </UserContext.Provider>
  );
}

export default Login;
