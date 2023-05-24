import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, location) => {
  const url = `https://api.open-meteo.com/v1/${endpoint}`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = {
    latitude: location.lat,
    longitude: location.long,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, { params });
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
      alert("An error has ocurred. " + url);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
