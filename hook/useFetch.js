import { useState, useEffect } from "react";
import axios from "axios";

import { WEATHER_API_KEY } from "@env";

const useFetch = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=imperial`;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
      alert("An error has ocurred.");
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
