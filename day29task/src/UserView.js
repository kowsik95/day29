import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./UserContext";

function UserView() {
  let params = useParams();
  console.log(params);
  // const userContext = useContext(UserContext);
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      let user = await axios.get(
        `https://62466c1f739ac845918e4c16.mockapi.io/react/students/${params.id}`
      );
      console.log(user.data);
      setUsers(user.data);
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      UserView
      <h1>{users.id}</h1>
      {/* <h2>{userContext.users[params.id].name}</h2> */}
      <h2>{users.name}</h2>
    </div>
  );
}

export default UserView;
