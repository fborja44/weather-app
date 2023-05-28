export const buildEndpoint = (base, preferences) => {
  let temperature_query;
  switch (preferences.temperature_unit) {
    case "C":
      temperature_query = "";
      break;
    case "F":
      temperature_query = `&temperature_unit=fahrenheit`;
      break;
    default:
      temperature_query = "";
      break;
  }
  let windspeed_query;
  switch (preferences.windspeed_unit) {
    case "Km/h":
      windspeed_query = "";
      break;
    case "m/s":
      windspeed_query = "&windspeed_unit=ms";
      break;
    case "mph":
      windspeed_query = "&windspeed_unit=mph";
      break;
    case "knots":
      windspeed_query = "&windspeed_unit=kn";
      break;
    default:
      windspeed_query = "";
      break;
  }
  let precipitation_query;
  switch (preferences.precipitation_unit) {
    case "mm":
      precipitation_query = "";
      break;
    case "in":
      precipitation_query = "&precipitation_unit=inch";
      break;
    default:
      precipitation_query = "";
      break;
  }
  const endpoint =
    base + temperature_query + windspeed_query + precipitation_query;
  return endpoint;
};
