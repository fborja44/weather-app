import DrizzleIcon from "../assets/icons/weather/DrizzleIcon";
import FoggyIcon from "../assets/icons/weather/FoggyIcon";
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

import SmileIcon from "../assets/icons/message/SmileIcon";
import UmbrellaIcon from "../assets/icons/message/UmbrellaIcon";
import LightningIcon from "../assets/icons/message/LightningIcon";
import FreezingIcon from "../assets/icons/message/FreezingIcon";
import HotIcon from "../assets/icons/message/HotIcon";
import HighWindsIcon from "../assets/icons/message/HighWindsIcon";
import HighUVIcon from "../assets/icons/message/HighUVIcon";
import LowVisibilityIcon from "../assets/icons/message/LowVisibilityIcon";
import { getCurrentHour } from "./date";

export const convertWeatherCodeToString = (weatherCode) => {
  const weatherCodes = {
    0: "Clear skies",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Frozen Fog",
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
    // Clear
    return <SunnyIcon iconClass={iconClass} />;
  } else if (weatherCode === 2) {
    // Partly Cloudy
    return <PartlyCloudyIcon iconClass={iconClass} />;
  } else if (weatherCode === 3) {
    // Overcast
    return <CloudIcon iconClass={iconClass} />;
  } else if (weatherCode >= 45 && weatherCode <= 48) {
    // Foggy
    return <FoggyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 51 && weatherCode <= 57) {
    // Drizzle
    return <DrizzleIcon iconClass={iconClass} />;
  } else if ((weatherCode >= 61 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) {
    // Rainy/Showers
    return <RainyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 71 && weatherCode <= 77) {
    // Snowy
    return <SnowyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 83 && weatherCode <= 84) {
    // Sleet
    return <SleetIcon iconClass={iconClass} />;
  } else if (weatherCode >= 85 && weatherCode <= 86) {
    // Snow
    return <SnowyIcon iconClass={iconClass} />;
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    // Thunderstorms
    return <ThunderstormIcon iconClass={iconClass} />;
  } else {
    // Missing
    return <InvalidIcon iconClass={iconClass} />;
  }
};

const MessageIconClass = "w-10 h-10 -rotate-12 relative left-[6]";

export const messages = {
  sunny: {
    title: "Carpe diem!",
    message: "Perfect day for outdoor activities!",
    icon: <SmileIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  partly: {
    title: "A great day!",
    message: "Mix of sun and clouds, pleasant weather expected.",
    icon: <SmileIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  overcast: {
    title: "Cloudy overhead.",
    message: "Overcast skies with limited sunshine.",
    icon: <SmileIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  rain: {
    title: "Possible rain!",
    message: "Rain likely, don't forget your umbrella!",
    icon: <UmbrellaIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  thunder: {
    title: "Thunderstorm warning!",
    message: "Stormy weather with lightning strikes.",
    icon: <LightningIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  freezing: {
    title: "Freezing temperatures!",
    message: "Possible icy conditions, use caution while traveling.",
    icon: <FreezingIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  snow: {
    title: "Expected snow!",
    message: "Be sure to use caution while traveling.",
    icon: <FreezingIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  hot: {
    title: "Hot hot hot!",
    message: "Extreme heat, stay hydrated and seek shade!",
    icon: <HotIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  windy: {
    title: "Heavy winds!",
    message: "Strong winds, stay cauious outdoors.",
    icon: <WindyIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  uv: {
    title: "High UV warning!",
    message: "Protect your skin, high UV today!",
    icon: <HighUVIcon color="#F17720" iconClass={MessageIconClass} />,
  },
  foggy: {
    title: "Low visibility!",
    message: "It's foggy out! Drive carefully.",
    icon: <LowVisibilityIcon color="#F17720" iconClass={MessageIconClass} />,
  },
};

export const getMessage = (weatherCode, data, preferences) => {
  const hour = getCurrentHour();

  // Primary messages
  if (data.hourly.visibility[hour] < 1000) {
    // Low visibility
    return messages.foggy;
  } else if (data.daily.uv_index_max[0] >= 8) {
    // High UV
    return messages.uv;
  }

  // Temperature
  if (preferences.temperature_unit === "C") {
    if (data.current_weather.temperature >= 30) {
      return messages.hot;
    } else if (data.current_weather.temperature <= 0) {
      return messages.freezing;
    }
  } else if (preferences.temperature_unit === "F") {
    if (data.current_weather.temperature >= 90) {
      return messages.hot;
    } else if (data.current_weather.temperature <= 45) {
      return messages.freezing;
    }
  }

  // TODO: Heavy winds

  // Weather codes
  if (weatherCode === 0 || weatherCode === 1) {
    // Clear
    return messages.sunny;
  } else if (weatherCode === 2) {
    // Partly Cloudy
    return messages.partly;
  } else if (weatherCode === 3) {
    // Overcast
    return messages.overcast;
  } else if (weatherCode >= 45 && weatherCode <= 48) {
    // Foggy
    return messages.foggy;
  } else if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  ) {
    // Drizzle / Rain
    return messages.rain;
  } else if (
    (weatherCode >= 71 && weatherCode <= 77) ||
    (weatherCode >= 83 && weatherCode <= 86)
  ) {
    // Sleet / Snow
    return messages.snow;
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    // Thunderstorms
    return messages.thunder;
  } else {
    // Missing
    return null;
  }
};
