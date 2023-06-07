import { View, Text, ScrollView } from "react-native";
import { getCurrentHour, parseUnixTime } from "../../utils/date";
import { WeatherIcon } from "../../utils/weather";
import ListItemContainer from "./ListItemContainer";
import ListContainer from "./ListContainer";

const HourlyItem = ({ data, index, timezone }) => {
  const hour = getCurrentHour(data.timezone);
  const last = index === hour + 23;
  if (data) {
    return (
      <ListItemContainer last={last}>
        <View>
          <WeatherIcon
            weatherCode={data.hourly.weathercode[index]}
            iconClass="w-9 h-9"
            timezone={data.timezone}
            time={data.hourly.time[index]}
            sunrise={data.daily.sunrise[0]}
            sunset={data.daily.sunset[0]}
          />
        </View>
        <View className={"flex items-end"}>
          <Text className="font-bold text-slate-800">
            {data.hourly.temperature_2m[index].toFixed(0)}&#0176;
          </Text>
          <Text className="text-slate-400 text-xs">
            {parseUnixTime(data.hourly.time[index], timezone)}
          </Text>
        </View>
      </ListItemContainer>
    );
  }
};

const Hourly = ({ data, timezone }) => {
  const hour = getCurrentHour(timezone);

  if (data) {
    const timeArray = data.hourly.time.slice(hour, 24 + hour);
    return (
      <ListContainer>
        {timeArray.map((_, index) => (
          <HourlyItem
            data={data}
            index={index + hour}
            key={`hourly-${index}`}
            timezone={timezone}
          />
        ))}
      </ListContainer>
    );
  }
};

export default Hourly;
