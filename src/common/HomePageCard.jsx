import React from "react";

function HomePageCard({ urlImage, title }) {
  return (
    <div className=" cursor-pointer hover:scale-105 bg-white bg-opacity-90 overflow-hidden  transition ease-in-out relative rounded-xl flex items-center w-full shadow-lg">
      <img className="absolute h-full w-3/4 rounded-xl" src={urlImage}></img>
      <h1 className="w-1/4 absolute right-0 p-3 font-bold text-center">
        {title}
      </h1>
    </div>
  );
}

export default HomePageCard;
