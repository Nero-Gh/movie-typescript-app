import React from "react";
import { images } from "../utils/utils";
import { Link } from "react-router-dom";
import { Props } from "../types/types";

const MovieCard = ({ image, id }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;
  return (
    <div className=" w-[200px] h-[250px] shadow-md  flex flex-col">
      <div className="  rounded-md h-full">
        <img src={imageUrl} alt="" className="w-full h-full" />
      </div>
      <Link to={`/${id}`}>
        <button className="p-3 text-center w-full">Read More</button>
      </Link>
    </div>
  );
};

export default MovieCard;
