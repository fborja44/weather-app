import React from "react";

import { View, Text } from "react-native";
import SunIcon from "../../assets/icons/SunIcon";
import DataTable from "./DataTable";
import { getCurrentHour } from "../../utils/date";

const InsightsWeather = ({ data }) => {
  const hour = getCurrentHour();

  if (data.current_weather) {
    return (
      <>
        <View className="flex flex-col items-end px-4">
          <View className="flex flex-row">
            <Text className="text-white font-black text-2xl">
              Today's Insights
            </Text>
            <SunIcon color="white" filled iconClass="w-8 h-8 ml-2" />
          </View>
          <View className="flex flex-row mt-4">
            <Text className="text-8xl text-white font-black">
              {data.current_weather.temperature}
            </Text>
            <Text className="text-6xl text-white font-bold">&#0176;F</Text>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-col items-end mr-5">
              <Text className="text-white text-base font-secondary">
                min temp
              </Text>
              <Text className="text-white text-base font-black">
                {data.daily.temperature_2m_max[0].toFixed(0)}&#0176;F
              </Text>
            </View>
            <View className="flex flex-col items-end">
              <Text className="text-white text-base font-secondary">
                max temp
              </Text>
              <Text className="text-white text-base font-black">
                {data.daily.temperature_2m_min[0].toFixed(0)}&#0176;F
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-1 flex-col justify-end px-4">
          <DataTable data={data} />
        </View>
      </>
    );
  }
};

export default InsightsWeather;
