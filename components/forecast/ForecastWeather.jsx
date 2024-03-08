import ForecastItem from "./ForecastItem";

const ForecastWeather = ({ data }) => {
  if (data.daily && data.daily.time) {
    return data.daily.time.map((_, index) => (
      <ForecastItem data={data} index={index} key={`forecast-${index}`} />
    ));
  }
};

export default ForecastWeather;
