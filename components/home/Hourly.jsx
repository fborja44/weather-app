import { View, Text, ScrollView } from "react-native";
import RainIcon from "../../assets/icons/weather/RainIcon";
import { parseUnixTime } from "../../utils/date";
import { HourlyIcon } from "../../utils/weather";

const HourlyItem = ({ data, index }) => {
  const last = index === data.hourly.time.length - 1;
  if (data) {
    return (
      <View
        className="flex flex-row self-center items-center w-[90] h-12 ml-3"
        key={`hourly-${index}`}
      >
        <HourlyIcon
          weatherCode={data.hourly.weathercode[index]}
          iconClass="w-9 h-9"
        />
        <View className={`pl-2 ${!last ? "pr-3" : ""}`}>
          <Text className="font-bold text-slate-800">
            {data.hourly.temperature_2m[index].toFixed(0)}&#0176;
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

const Hourly = ({ data }) => {
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
              <HourlyItem data={data} index={index} key={`hourly-${index}`} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Hourly;
