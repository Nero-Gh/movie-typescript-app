import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex text-xl text-center  align-middle">
        <PlayIcon className="h-6 w-6 text-black" />
        <h1 className="">NeroUp</h1>
      </div>
      <div className="w-4/12 ">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 rounded-lg px-2 w-full py-2"
          />
        </form>
      </div>
      <button className="rounded-full p-2 bg-white shadow-lg">
        <MoonIcon className="h-6 w-6 text-black" />
      </button>
    </div>
  );
};

export default Navbar;
