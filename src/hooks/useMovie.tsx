import { movies } from "../utils/utils";

// usemovie hook is used to get the movie with the id
const useMovie = (id: number) => {
  const movie = movies.find((movie) => movie.id === id);
  return movie;
};

export default useMovie;
