import { View, Text, ScrollView } from "react-native";
import { parseUnixTime } from "../../utils/date";
import { HourlyIcon } from "../../utils/weather";
import ListItemContainer from "./ListItemContainer";
import ListContainer from "./ListContainer";

const HourlyItem = ({ data, index, timezone }) => {
  const last = index === data.hourly.time.length - 1;
  if (data) {
    return (
      <ListItemContainer last={last}>
        <View>
          <HourlyIcon
            weatherCode={data.hourly.weathercode[index]}
            iconClass="w-9 h-9"
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
  if (data) {
    return (
      <ListContainer>
        {data.hourly.time.map((_, index) => (
          <HourlyItem
            data={data}
            index={index}
            key={`hourly-${index}`}
            timezone={timezone}
          />
        ))}
      </ListContainer>
    );
  }
};

export default Hourly;
