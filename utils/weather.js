import DrizzleIcon from "../assets/icons/weather/DrizzleIcon";
import CloudyIcon from "../assets/icons/weather/CloudyIcon";
import FoggyIcon from "../assets/icons/weather/FoggyIcon";
import HailIcon from "../assets/icons/weather/HailIcon";
import MoonIcon from "../assets/icons/weather/MoonIcon";
import PartlyCloudyIcon from "../assets/icons/weather/PartlyCloudyIcon";
import RainyIcon from "../assets/icons/weather/RainyIcon";
import SleetIcon from "../assets/icons/weather/SleetIcon";
import SnowyIcon from "../assets/icons/weather/SnowyIcon";
import SunnyIcon from "../assets/icons/weather/SunnyIcon";
import ThunderstormIcon from "../assets/icons/weather/ThunderstormIcon";
import WindyIcon from "../assets/icons/weather/WindyIcon";
import InvalidIcon from "../assets/icons/weather/InvalidIcon";
import RainShowersIcon from "../assets/icons/weather/RainShowersIcon";
import CloudIcon from "../assets/icons/weather/CloudIcon";
import SunCloudIcon from "../assets/icons/weather/SunCloudIcon";
import SnowIcon from "../assets/icons/weather/SnowIcon";
import LightningIcon from "../assets/icons/weather/LightningIcon";
import RainIcon from "../assets/icons/weather/RainIcon";

export const convertWeatherCodeToString = (weatherCode) => {
  const weatherCodes = {
    0: "Clear skies",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Overcast",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Heavy drizzle",
    56: "Freezing drizzle",
    57: "Heavy drizzle",
    61: "Rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy rain showers",
    83: "Sleet showers",
    84: "Sleet showers",
    85: "Snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm, light hail",
    99: "Thunderstorm, heavy hail",
  };

  return weatherCodes[weatherCode] || "Unknown";
};

export const WeatherIcon = ({ weatherCode, iconClass }) => {
  if (weatherCode === 0 || weatherCode === 1) {
    return <SunnyIcon iconClass={iconClass} />;
  } else if (weatherCode === 2) {
    return <PartlyCloudyIcon iconClass={iconClass} />;
  } else if (weatherCode === 3) {
    return <CloudyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 51 && weatherCode <= 57) {
    return <DrizzleIcon iconClass={iconClass} />;
  } else if (weatherCode >= 61 && weatherCode <= 67) {
    return <RainyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 71 && weatherCode <= 77) {
    return <SnowyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 80 && weatherCode <= 82) {
    return <RainShowersIcon iconClass={iconClass} />;
  } else if (weatherCode >= 83 && weatherCode <= 84) {
    return <SleetIcon iconClass={iconClass} />;
  } else if (weatherCode >= 85 && weatherCode <= 86) {
    return <SnowyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return <ThunderstormIcon iconClass={iconClass} />;
  } else {
    return <InvalidIcon iconClass={iconClass} />;
  }
};

export const HourlyIcon = ({ weatherCode, iconClass }) => {
  if (weatherCode === 0 || weatherCode === 1) {
    return <SunnyIcon iconClass={iconClass} color="#FFA630" filled />;
  } else if (weatherCode === 2) {
    return <SunCloudIcon iconClass={iconClass} />;
  } else if (weatherCode === 3) {
    return <CloudIcon iconClass={iconClass} color="#EAECF6" filled />;
  } else if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  ) {
    return <RainIcon iconClass={iconClass} color="#00A7E1" />;
  } else if (weatherCode >= 71 && weatherCode <= 86) {
    return <SnowIcon iconClass={iconClass} color="#4EBFFF" />;
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return <LightningIcon iconClass={iconClass} />;
  } else {
    return <InvalidIcon iconClass={iconClass} />;
  }
};
