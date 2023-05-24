const initialState = {
  city: "New York",
  lat: 40.71427,
  long: -74.00597,
};

const locationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOCATION":
      const location = payload;
      return location;
    default:
      return state;
  }
};

export default locationReducer;
