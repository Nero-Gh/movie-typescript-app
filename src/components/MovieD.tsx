import React from "react";
import { images } from "../utils/utils";
import { Movie } from "../types/types";

const MovieD = ({ name, year, cast, description, image }: Movie) => {
  return (
    <div className="flex gap-20">
      <div className="w-[40%] h-[400px]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-[50%]">
        <div className="flex gap-5 align-middle my-3">
          <h1 className="text-md font-bold">Name:</h1>
          <span className="text-md">{name}</span>
        </div>
        <div className="flex gap-5 align-middle my-3">
          <h1 className="text-md font-bold">Year:</h1>
          <span className="text-md">{year}</span>
        </div>
        <div className="flex gap-5 align-middle my-3">
          <h1 className="text-md font-bold">Cast:</h1>
          <span className="text-md">{cast}</span>
        </div>
        <div className="flex gap-5 align-middle my-3">
          <h1 className="text-md font-bold">Description:</h1>
          <span className="text-md">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieD;
