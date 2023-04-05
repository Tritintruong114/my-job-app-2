import React, { useState } from "react";
import { Outlet } from "react-router";
import Pagination from "../components/Pagination";
import { faker } from "@faker-js/faker";
import { jobs } from "../data/data";
function InfoJobs({ handleTheDetailPage }) {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex items-center justify-center w-1/4">
        <input
          className="w-full p-1 pl-3 rounded-xl font-bold capitalize "
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="grid grid-cols1-1 gap-3 p-3 h-fit overflow-scroll sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {jobs
          .filter((job) => job.title.toLocaleLowerCase().includes(search))
          .slice(0, 10)
          .map((job) => (
            <div key={job.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col gap-3">
                  <h1 className="text-black font-bold text-xl">{job.title}</h1>
                  <div className="flex text-md gap-1">
                    {job.skills.slice(0, 3).map((skill) => (
                      <p className="rounded-full bg-accent text-center w-fit text-white">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <p>{job.description}</p>
                <p className="opacity-40 text-md">
                  {job.postedDate.slice(0, 10)}
                </p>
                <div className="card-actions justify-end flex  items-center">
                  <div className="badge  cursor-default badge-outline text-rose-600 p-3">
                    {job.city}
                  </div>
                  <div className="badge  cursor-default badge-outline text-rose-600 p-3">
                    2 Remain
                  </div>
                  {/* <span></span> */}
                  <div
                    onClick={handleTheDetailPage}
                    className="badge hover:scale-110 transition ease-in-out cursor-pointer badge-outline  text-warning p-3"
                  >
                    Detail
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InfoJobs;
