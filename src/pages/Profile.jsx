import React from "react";
import { Avatar, TextField } from "@mui/material";
import { UilUpload, UilTrashAlt } from "@iconscout/react-unicons";
function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:w-3/4 xl:w-2/4 bg-white bg-opacity-90 rounded-xl gap-3 justify-center items-center h-full w-full">
      <div className=" w-full h-1/4 flex flex-col justify-center items-center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <p className="font-bold  flex justify-center items-center gap-1  text-lg opacity-60 hover:opacity-100 cursor-pointer">
          Upload <UilUpload />
        </p>
        <p className="font-bold flex justify-center items-center gap-1 text-lg opacity-60 hover:opacity-100 cursor-pointer">
          Remove <UilTrashAlt />
        </p>
      </div>
      <div className=" w-full h-2/4 flex flex-col gap-3 justify-center items-center">
        <TextField
          value="Bruno Truong"
          id="outlined-basic"
          variant="outlined"
          label="User Name"
        />
        <TextField
          value="truongtritin.bee@gmail.com"
          id="outlined-basic"
          variant="outlined"
          label="Gmail"
        />
        <TextField
          value="****"
          label="Password"
          id="outlined-basic"
          variant="outlined"
        />
        <TextField
          value="0385611407"
          label="Phone number"
          id="outlined-basic"
          variant="outlined"
        />
        <div className="flex md:justify-around xl:justify-around justify-center gap-2 w-full">
          <button className="bg-rose-200 px-3 rounded-full active:bg-rose-700 active:text-white">
            Save
          </button>
          <button className="bg-rose-200 px-3 rounded-full active:bg-rose-700 active:text-white">
            Edit
          </button>
        </div>
      </div>
      <div className=" w-full h-1/4 flex justify-center items-center">
        <p>Front-End Developer</p>
      </div>
    </div>
  );
}

export default Profile;
