export const convertWeatherCodeToString = (weatherCode) => {
  let weatherString = "";
  switch (weatherCode) {
    case 0:
      weatherString = "Clear sky";
      break;
    case 1:
      weatherString = "Cloudy";
      break;
    case 2:
      weatherString = "Partly cloudy";
      break;
    case 3:
      weatherString = "Overcast";
      break;
    case 10:
      weatherString = "Rain showers";
      break;
    case 20:
      weatherString = "Rain";
      break;
    case 21:
      weatherString = "Heavy rain";
      break;
    case 30:
      weatherString = "Snow showers";
      break;
    case 40:
      weatherString = "Snowfall";
      break;
    case 41:
      weatherString = "Heavy snowfall";
      break;
    default:
      weatherString = "Unknown weather";
      break;
  }
  return weatherString;
};
