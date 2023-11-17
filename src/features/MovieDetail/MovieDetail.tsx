import React from "react";
import MovieD from "../../components/MovieD";
import { useLocation } from "react-router-dom";
import { movies } from "../../utils/utils";

const MovieDetail = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[1]);

  return (
    <div>
      {movies
        .filter((movie) => movie.id === id)
        .map((movie) => (
          <MovieD
            key={id}
            name={movie.name}
            year={movie.year}
            image={movie.image}
            id={movie.id}
            description={movie.description}
            cast={movie.cast}
          />
        ))}
    </div>
  );
};

export default MovieDetail;
