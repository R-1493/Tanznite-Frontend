import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";
function UserDashBoard(props) {
  const [userList, setUserList] = useState([]);

  function fetchUserList() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5125/api/v1/User", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUserList(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchUserList();
  }, []);
  console.log(userList);
  return (
    <div>
      <h1 className="font-bold text-lg mb-5">User DashBoard</h1>
      {userList.map((user) => {
        return (
          <UserItem
            key={user.userId}
            user={user}
            fetchUserList={fetchUserList}
          />
        );
      })}
    </div>
  );
}

export default UserDashBoard;
