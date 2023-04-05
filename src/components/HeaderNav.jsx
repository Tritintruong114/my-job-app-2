import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Input from "./Input";
import AuthConsumer from "../hooks/auth";
import { UilUser } from "@iconscout/react-unicons";
import { jobs } from "./../data/data";
function HeaderNav() {
  const [{ auth }] = AuthConsumer();
  const [search, setSearch] = useState("");

  // console.log(jobs.filter((job) => job.title.toLowerCase().includes("fu")));

  function ActiveLink(props) {
    return (
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "#FF8400" : "",
          };
        }}
        {...props}
      />
    );
  }
  return (
    <div className="navbar  ">
      <div className="navbar-start">
        <div className="pr-3">LOGO</div>
      </div>
      <div className="navbar-center w-2/4 flex justify-between gap-3">
        <ActiveLink
          to={`home`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          Home
        </ActiveLink>
        <ActiveLink
          to={`infoJobs`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Jobs
        </ActiveLink>

        <ActiveLink
          to={`infoBlog`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Blog
        </ActiveLink>

        <ActiveLink
          to={`infoCompany`}
          className="text-md md:text-xl xl:text-2xl font-light hover:text-primary hover:scale-110 transition ease-in-out sm:text-xs md:text-md"
        >
          IT Company
        </ActiveLink>
      </div>

      <div className="navbar-end pr-3 gap-3">
        {auth ? (
          <ActiveLink
            to={`login`}
            onClick={() => {
              // setIsLogin(true);
              dispatch({ type: "logout" }),
                navigate("/home", { replace: false });
            }}
            className=" text-black  rounded-full px-3  flex justify-center items-center gap-3"
          >
            <p className="font-medium sm:text-xs xl:text-md text-center">
              Welcome Back Mr.Bruno
            </p>
            <ActiveLink to={`profile`}>
              <UilUser className="hover:scale-125 sm:w-20 transition ease-in-out" />
            </ActiveLink>
            <p className="hover:text-red-700">Sign Out</p>
          </ActiveLink>
        ) : (
          <>
            <ActiveLink
              to={`login`}
              onClick={() => {
                // setIsLogin(true);
                // dispatch({ type: "login" }), navigate("/home", { replace: true });
              }}
              className=" text-black rounded-full px-3"
            >
              Login
            </ActiveLink>
          </>
        )}
        {/* 
        <ActiveLink
          to={`home`}
          onClick={() => {
            // setIsLogin(true);
            // dispatch({ type: "login" }), navigate("/home", { replace: false });
          }}
          className=" text-black rounded-full px-3"
        >
          Sign Out
        </ActiveLink> */}
      </div>
    </div>
  );
}

export default HeaderNav;
