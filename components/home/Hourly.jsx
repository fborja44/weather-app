import { View, Text, ScrollView } from "react-native";
import RainIcon from "../../assets/icons/stats/RainIcon";
import useFetch from "../../hook/useFetch";

import { useSelector } from "react-redux";

const HourlyItem = ({ last }) => {
  return (
    <View className="flex flex-row self-center items-center w-[90] h-12 ml-2">
      <RainIcon color="#00A7E1" iconClass="w-9 h-9" />
      <View className={`pl-3 ${!last ? "pr-3" : ""}`}>
        <Text className="font-bold text-slate-800">70&#0176;</Text>
        <Text className="text-slate-400">9:00</Text>
      </View>
      {!last && <View className="w-[1] bg-slate-300 h-full" />}
    </View>
  );
};

const Hourly = () => {
  const location = useSelector((state) => state.locationState);

  const data = {};

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
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
            <HourlyItem />
            <HourlyItem last />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Hourly;
