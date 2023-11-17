import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchHook = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: import.meta.env.VITE_APP_API_KEY,
            language: "en-US",
            page: 1,
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchHook;
