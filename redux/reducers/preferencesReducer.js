const initialState = {
  temperature_unit: "C",
  windspeed_unit: "Km/h",
  precipitation_unit: "mm",
  timezone: "", // TODO
};

const preferencesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PREFERENCE":
      const preference = payload;
      return { ...state, ...preference };
    default:
      return state;
  }
};

export default preferencesReducer;
