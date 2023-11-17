import React from "react";
import MovieCard from "../../components/MovieCard";
import { movies } from "../../utils/utils";

type Props = {};

const Movie = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-2 justify-between">
      {movies.map((movie) => (
        <MovieCard image={movie.image} id={movie.id} />
      ))}
    </div>
  );
};

export default Movie;
