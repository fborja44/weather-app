import axios from "axios";

/* Location
/***********************************/
export const setLocationAction = async (dispatch, city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
  try {
    const response = await axios.get(url);
    const location = {
      city: response.data.results[0].name,
      country: response.data.results[0].country,
      timezone: response.data.results[0].timezone,
      lat: response.data.results[0].latitude,
      long: response.data.results[0].longitude,
    };
    dispatch({
      type: "SET_LOCATION",
      payload: location,
    });
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

/* Preferences
/***********************************/
export const setPreference = async (dispatch, key, value) => {
  dispatch({
    type: "SET_PREFERENCE",
    payload: { key: value },
  });
};
