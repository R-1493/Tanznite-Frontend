import React, { useState, useEffect } from "react";
import axios from "axios";

function UserItem(props) {
  const { user, fetchUserList } = props;
  function deleteUser() {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:5125/api/v1/User/${user.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("A user is deleted");
          fetchUserList();
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="max-w-full mx-auto ">
      <div className="p-3 flex flex-col md:flex-row  items-center justify-between border-t cursor-pointer hover:bg-gray-200">
        <div className="flex items-center w-full md:w-auto">
          <span className="rounded-full text-sm font-bold  z-20 bg-purple-500 w-10 h-10 p-2  flex justify-center items-center border">
            {user?.name[0].charAt(0).toUpperCase()}
            {user?.name[1].charAt(0).toUpperCase()}
          </span>
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">
              {user?.name}
            </div>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto py-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Email: </p>
            <span className="font-medium md:font-bold"> {user?.email}</span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Role: </p>
            <span className="font-medium md:font-bold">{user?.role}</span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto   pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold ">
            <p className="inline md:hidden mr-1">Phone Number :</p>{" "}
            <span className="font-medium md:font-bold">
              {user?.phoneNumber}
            </span>
          </div>
        </div>
        <button
          onClick={deleteUser}
          className="mt-2 md:mt-0 h-8 px-3 text-md font-bold text-red-400 border border-red-400 rounded-full hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserItem;
