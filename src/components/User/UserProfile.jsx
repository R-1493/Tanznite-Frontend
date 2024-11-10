import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { MdLocalShipping } from "react-icons/md";
import { BiSolidCommentDots } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa6";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

function UserProfile(props) {
  const { userData, setUserData } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  function onChangeHandler(event) {
    setUserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  }
  function UpdateUserProfile() {
    const token = localStorage.getItem("token");
    console.log(token);

    const updatedData = {};
    Object.keys(userInfo).forEach((key) => {
      if (userInfo[key]) {
        updatedData[key] = userInfo[key];
      }
    });

    axios
      .patch("http://localhost:5125/api/v1/User/UpdateProfile", updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        setIsOpen(false);
        alert("User Profile information is Updated successful!");
      })
      .catch((error) => console.log(error));
  }

  function logOutHandler() {
    localStorage.removeItem("token");
    setUserData(null);
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <span className="rounded-full text-xl font-bold mb-4 z-20 bg-purple-500 w-32 h-32 p-2 flex justify-center items-center border">
                  {userData?.name[0].charAt(0).toUpperCase()}
                  {userData?.name[1].charAt(0).toUpperCase()}
                </span>
                <div className="relative flex justify-center">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="px-6 py-1  mb-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-500 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                  >
                    Edit Profile{" "}
                  </button>
                  {isOpen && (
                    <div
                      className="fixed inset-0 flex items-center justify-center z-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className="bg-gray-100 p-6 rounded-lg shadow-xl "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h2 className="text-lg font-semibold">Edit Profile</h2>
                        <div className="px-4 py-2 sm:px-8 sm:py-3">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            First & Last name
                          </label>
                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <TextField
                              id="name"
                              type="name"
                              placeholder="Enter your full name"
                              className="block w-full  pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                              onChange={onChangeHandler}
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                      </svg>
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </div>
                        </div>

                        <div className="px-4 py-2 sm:px-8 sm:py-3">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <TextField
                              id="email"
                              type="email"
                              placeholder="Enter email to get started"
                              className="block w-full  pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                              onChange={onChangeHandler}
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                      </svg>
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div className="px-4 py-2 sm:px-8 sm:py-3">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Phone Number
                          </label>
                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <TextField
                              id="phoneNumber"
                              type="tel"
                              placeholder="Enter your phone number start +966"
                              className="block w-full  pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                              onChange={onChangeHandler}
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                      </svg>
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </div>
                        </div>

                        <div className="px-4 py-2 sm:px-8 sm:py-3">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Password{" "}
                          </label>

                          <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                            <OutlinedInput
                              id="password"
                              placeholder="Enter your password"
                              className="block w-full pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                              onChange={onChangeHandler}
                              type={showPassword ? "text" : "password"}
                              startAdornment={
                                <InputAdornment position="start">
                                  <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                    />
                                  </svg>
                                </InputAdornment>
                              }
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label={
                                      showPassword
                                        ? "hide the password"
                                        : "display the password"
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => setIsOpen(false)}
                          className="mt-3 ml-4 mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
                        >
                          Close
                        </button>
                        <button
                          onClick={UpdateUserProfile}
                          className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-bold">{userData.name}</h1>
                <p className="text-gray-400 py-2">{userData.email}</p>{" "}
                <p className="text-gray-700 pb-5">{userData.role}</p>
                <button
                  variant="contained"
                  onClick={logOutHandler}
                  className="px-6 py-1 mb-2 mx-auto tracking-wide text-gray-500 capitalize transition-colors duration-300 transform rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="flex items-center text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  tabIndex="0"
                  role="link"
                >
                  <FaAddressBook className="h-7 w-7 mr-5" />
                  Address
                </a>
                <a
                  className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500 "
                  tabIndex="0"
                  role="button"
                >
                  Address
                </a>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-5">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="flex items-center text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  tabIndex="0"
                  role="link"
                >
                  <MdLocalShipping className="h-7 w-7 mr-5" />
                  Shippend
                </a>
                <a
                  className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                  tabIndex="0"
                  role="button"
                >
                  Shippend
                </a>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 mt-5">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="flex items-center text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  tabIndex="0"
                  role="link"
                >
                  <BiSolidCommentDots className="h-7 w-7 mr-5" />
                  Review
                </a>
                <a
                  className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                  tabIndex="0"
                  role="button"
                >
                  Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
