const initialState = "New York";

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
