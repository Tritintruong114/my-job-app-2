import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div>
      <div className=" gap-3 flex ">
        <Link
          to={`1`}
          className="bg-neutral text-center flex justify-center items-center text-white h-10 w-10 rounded-full hover:opacity-60 active:bg-success"
        >
          1
        </Link>
        <Link
          to={`2`}
          className="bg-neutral text-center flex justify-center items-center text-white h-10 w-10 rounded-full hover:opacity-60 active:bg-success"
        >
          2
        </Link>
        <Link
          to={`3`}
          className="bg-neutral text-center flex justify-center items-center text-white h-10 w-10 rounded-full hover:opacity-60 active:bg-success"
        >
          3
        </Link>
        <Link
          to={`4`}
          className="bg-neutral text-center flex justify-center items-center text-white h-10 w-10 rounded-full hover:opacity-60 active:bg-success"
        >
          4
        </Link>
      </div>
    </div>
  );
}

export default Pagination;
