import { View, Text, ScrollView } from "react-native";
import RainIcon from "../../assets/icons/weather/RainIcon";
import { parseUnixTime } from "../../utils/date";
import RaindropIcon from "../../assets/icons/weather/RaindropIcon";

const PrecipitationItem = ({ data, index }) => {
  const last = index === data.hourly.time.length - 1;
  if (data) {
    return (
      <View
        className="flex flex-row self-center items-center w-[90] h-12 ml-3"
        key={`hourly-${index}`}
      >
        <RaindropIcon />
        <View className={`pl-2 ${!last ? "pr-3" : ""}`}>
          <Text className="font-bold text-slate-800">
            {data.hourly.precipitation_probability[index].toFixed(0)}%
          </Text>
          <Text className="font-base text-sky-500">
            {data.hourly.precipitation[index] > 0
              ? `${data.hourly.precipitation[index]}"`
              : "—"}
          </Text>
          <Text className="text-slate-400">
            {parseUnixTime(data.hourly.time[index])}
          </Text>
        </View>
        {!last && <View className="w-[1] bg-slate-300 h-full" />}
      </View>
    );
  }
};

const Precipitation = ({ data }) => {
  if (data) {
    return (
      <ScrollView
        className="flex-1"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-4 pb-6">
          <View className="flex flex-row bg-white h-[80] rounded-full min-w-full px-4 box-border self-start shadow-xl">
            {data.hourly.time.map((_, index) => (
              <PrecipitationItem
                data={data}
                index={index}
                key={`hourly-${index}`}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Precipitation;
