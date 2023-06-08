import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Dimensions } from "react-native";
import { getHourTimezone } from "../../utils/date";

const screenDimensions = Dimensions.get("screen");

const BackgroundGradient = ({ data }) => {
  let colors = ["#00A7E1", "#62C9EC", "#C1EAF8", "#FFFFFF"];
  if (data && data.current_weather && data.daily) {
    const hour = getHourTimezone(Math.floor(Date.now() / 1000), data.timezone);
    const sunriseHour = getHourTimezone(data.daily.sunrise[0], data.timezone);
    const sunsetHour = getHourTimezone(data.daily.sunset[0], data.timezone);
    const is_day = hour > sunriseHour && hour < sunsetHour;

    // Gloomy weather
    if (data.current_weather.weathercode >= 45) {
      colors = ["#51698D", "#6E95B9", "#C1DEF8", "#FFFFFF"];
    }

    // Night
    if (!is_day) {
      colors = ["#141B2F", "#434F5E", "#7C888C", "#FFFFFF"];
    }
  }

  // Clear weather
  return (
    <LinearGradient
      colors={colors}
      locations={[0, 0.4, 0.65, 0.88]}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenDimensions.height,
  },
});

export default BackgroundGradient;
