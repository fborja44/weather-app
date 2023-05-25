import ForecastItem from "./ForecastItem";

const ForecastWeather = ({ data }) => {
  if (data.daily) {
    return data.daily.time.map((_, index) => (
      <ForecastItem data={data} index={index} />
    ));
  }
};

export default ForecastWeather;
