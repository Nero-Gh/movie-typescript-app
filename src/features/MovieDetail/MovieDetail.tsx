import React from "react";
import MovieD from "../../components/MovieD";
import { useLocation } from "react-router-dom";
import useMovie from "../../hooks/useMovie";

const MovieDetail = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[1]);
  const movie = useMovie(id);

  return (
    <div>
      {movie && (
        <MovieD
          key={id}
          name={movie.name}
          year={movie.year}
          image={movie.image}
          id={movie.id}
          description={movie.description}
          cast={movie.cast}
        />
      )}
    </div>
  );
};

export default MovieDetail;
