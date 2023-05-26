import React from "react";

import { View, Text } from "react-native";
import SunIcon from "../../assets/icons/SunIcon";
import { getDayOfWeek } from "../../utils/date";
import { convertWeatherCodeToString } from "../../utils/weather";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const ForecastItem = ({ data, index }) => {
  if (data) {
    return (
      <View className="flex flex-row w-full items-center mb-4 h-[60]">
        <View className="w-2/5">
          <Text className="text-white font-secondary text-base">
            {index === 0 ? "Today" : getDayOfWeek(data.daily.time[index])}
          </Text>
        </View>
        <View className="flex flex-1 flex-row items-center">
          <SunIcon filled color="#FFA630" iconClass="w-8 h-8 mr-1.5" />
          <Text className="text-white font-primary capitalize">
            {convertWeatherCodeToString(data.daily.weathercode[index])}
          </Text>
        </View>
        <View className="flex-1 items-end">
          <View className="flex flex-row mt-4">
            <Text className="text-4xl text-white font-black">
              {data.daily.temperature_2m_max[index].toFixed(0)}
            </Text>
            <Text className="text-2xl text-white font-bold relative bottom-[3]">&#0176;F</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default ForecastItem;
