import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovie = (id: number) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }&language=en-US}`
        );
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return { movie, loading, error };
};

export default useFetchMovie;
