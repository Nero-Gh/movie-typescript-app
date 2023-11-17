import React from "react";
import MovieD from "../../components/MovieD";
import { useLocation } from "react-router-dom";
import { movies } from "../../utils/utils";
import useMovie from "../../hooks/useMovie";
import useFetchMovie from "../../hooks/useMovie";

const MovieDetail = () => {
  const location = useLocation();
  const id = Number(location.pathname.split("/")[1]);
  const { movie, loading, error } = useFetchMovie(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {movie && (
        <MovieD
          key={id}
          name={movie.title}
          year={movie.release_date}
          image={movie.poster_path}
          id={movie.id}
          description={movie.overview}
          cast={movie.cast}
        />
      )}
    </div>
  );
};

export default MovieDetail;
