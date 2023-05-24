import { View, Text, ScrollView, FlatList } from "react-native";
import RainIcon from "../../assets/icons/stats/RainIcon";
import { parseUnixTime } from "../../utils/date";

import { useSelector } from "react-redux";

const HourlyItem = ({ data, index }) => {
  const last = index === data.hourly.time.length -1;

  if (data) {
    return (
      <View className="flex flex-row self-center items-center w-[90] h-12 ml-3">
        <RainIcon color="#00A7E1" iconClass="w-9 h-9" />
        <View className={`pl-2 ${!last ? "pr-3" : ""}`}>
          <Text className="font-bold text-slate-800">{data.hourly.temperature_2m[index].toFixed(0)}&#0176;</Text>
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
  const location = useSelector((state) => state.locationState);

  if (data) {
    return (
      <ScrollView
        className="flex-1"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-4 pb-6">
          <View>{}</View>
          <View className="flex flex-row bg-white h-[90] rounded-full min-w-full px-4 box-border self-start shadow-xl">
            {data.hourly.time.map((hour, index) => (
              <HourlyItem data={data} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Hourly;
