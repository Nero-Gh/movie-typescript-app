import React from "react";
import MovieCard from "../../components/MovieCard";
import useFetchHook from "../../hooks/useFetchHook";

const Movie = () => {
  const {
    data: { results: movies } = {},
    loading,
    error,
  } = useFetchHook("https://api.themoviedb.org/3/movie/popular");

  console.log(movies);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-wrap gap-2 justify-between">
      {movies?.map((movie) => (
        <MovieCard image={movie.backdrop_path} id={movie.id} />
      ))}
    </div>
  );
};

export default Movie;
