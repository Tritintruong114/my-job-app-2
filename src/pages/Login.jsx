import React, { useState } from "react";
import AuthConsumer from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
// import {BiUser}
import {
  UilUser,
  UilPadlock,
  UilFacebook,
  UilInstagramAlt,
  UilGoogle,
  UilTwitter,
} from "@iconscout/react-unicons";

function Login() {
  const [authed, dispatch] = AuthConsumer();

  console.log(authed);
  let navigate = useNavigate();

  return (
    <div className="h-fit  md:h-screen sm:h-screen w-full items-center flex justify-center ">
      <div className="h-3/4 w-1/4 md:w-2/4 sm:w-2/4 xl:w-1/4 bg-white   bg-opacity-50 rounded-xl  flex flex-col justify-center gap-6 py- items-center">
        <h1 className="font-bold text-3xl">Login</h1>
        <div className="flex items-center gap-3">
          <UilUser className="h-10 w-5" />
          <TextField
            className="shadow-md"
            variant="outlined"
            label="User Name"
            value="Bruno Truong"
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <UilPadlock className="h-10 w-5" />
          <TextField
            className="shadow-md"
            variant="outlined"
            label="Password"
            value="****"
            required
          />
        </div>
        <div className="w-full">
          <p className="font-light text-xs opacity-80 text-center cursor-pointer hover:text-cyan-400">
            Forgot password?
          </p>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "login" }), navigate("/home", { replace: true });
          }}
          variant="outlined"
          className="text-black shadow-md  hover:scale-110 transition ease-in-out text-center bg-secondary rounded-full px-5 py-1"
        >
          Login
        </button>

        <div className="flex flex-col justify-center items-center gap-3">
          <p>Or sign up with</p>
          <div className="flex gap-3">
            <UilInstagramAlt className="h-10 w-8 cursor-pointer hover:scale-110 transition ease-in-out" />
            <UilGoogle className="h-10 w-8 cursor-pointer hover:scale-110 transition ease-in-out" />
            <UilFacebook className="h-10 w-8 cursor-pointer hover:scale-110 transition ease-in-out" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-600 opacity-60">Don't have account ?</p>
            <p className="text-cyan-800 hover:text-cyan-500 cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
