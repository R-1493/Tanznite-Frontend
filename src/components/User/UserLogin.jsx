import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin(prop) {
  const { getUserData } = prop;
  const [showPassword, setShowPassword] = useState(false);
  const [userLogIn, setUserLogIn] = useState({
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

  function onChangeHandlerLogIn(event) {
    setUserLogIn({ ...userLogIn, [event.target.id]: event.target.value });
  }

  // function onChangeHandlerPasswordLogIn(event) {
  //   setUserLogIn({ ...userLogIn, password: event.target.value });
  // }
  console.log(userLogIn);
  const navigate = useNavigate();

  function LoginUser() {
    const userUrlLogIn = "http://localhost:5125/api/v1/User/LogIn";
    axios
      .post(userUrlLogIn, userLogIn)
      .then((res) => {
        console.log(res, "response from log in");
        if (res.status === 200) {
          localStorage.setItem("token", res.data);
        }
      })
      .then(() => getUserData())
      .then(() => navigate("/Profile"))
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 401) {
            alert(error.response.data.message);
            return;
          }
          if (error.response.status === 400) {
            const errors = error.response.data.errors;
            if (errors.Email) {
              alert(errors.Email[0]);
            }
            if (errors.Password) {
              alert(errors.Password[0]);
            }
          }
        }
      });
  }
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Welcome Back!
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Login to your account
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form action="#" method="POST">
                <div className="space-y-5">
                  <div>
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
                        onChange={onChangeHandlerLogIn}
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

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>

                      <a
                        href="#"
                        title=""
                        className="text-sm font-medium text-[#584BA5] transition-all duration-200 hover:text-[584BA5] focus:text-[#584BA5] hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <OutlinedInput
                        id="password"
                        placeholder="Enter your password"
                        className="block w-full pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        onChange={onChangeHandlerLogIn}
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

                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      onClick={LoginUser}
                    >
                      log in{" "}
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Don’t have an account?{" "}
                      <a
                        href="/Register"
                        title=""
                        className="font-medium text-[#584BA5] transition-all duration-200 hover:text-[#584BA5] hover:underline"
                      >
                        Create a free account
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserLogin;
