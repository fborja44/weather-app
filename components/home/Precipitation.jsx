import { View, Text, ScrollView } from "react-native";
import { parseUnixTime } from "../../utils/date";
import RaindropIcon from "../../assets/icons/weather/RaindropIcon";
import ListItemContainer from "./ListItemContainer";
import ListContainer from "./ListContainer";

const PrecipitationItem = ({ data, index, timezone }) => {
  const last = index === data.hourly.time.length - 1;
  if (data) {
    return (
      <ListItemContainer last={last}>
        <View className="pl-0.5">
          <RaindropIcon
            chance={data.hourly.precipitation_probability[index]}
            iconClass="w-6 h-7"
          />
        </View>
        <View className="flex items-end pr-1">
          <Text className="font-bold text-slate-800">
            {data.hourly.precipitation_probability[index].toFixed(0)}%
          </Text>
          <Text className="font-base text-sky-500 text-xs">
            {data.hourly.precipitation[index] > 0
              ? `${data.hourly.precipitation[index]}"`
              : "—"}
          </Text>
          <Text className="text-slate-400 text-xs">
            {parseUnixTime(data.hourly.time[index], timezone)}
          </Text>
        </View>
      </ListItemContainer>
    );
  }
};

const Precipitation = ({ data, timezone }) => {
  if (data) {
    return (
      <ListContainer>
        {data.hourly.time.map((_, index) => (
          <PrecipitationItem
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

export default Precipitation;
