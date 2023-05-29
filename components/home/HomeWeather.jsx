import React from "react";

import { View, Text, ScrollView } from "react-native";
import InfoTable from "./InfoTable";
import Message from "./Message";
import Hourly from "./Hourly";
import { convertWeatherCodeToString } from "../../utils/weather";
import { getCurrentHour } from "../../utils/date";
import { useSelector } from "react-redux";
import { WeatherIcon } from "../../utils/weather";
import Precipitation from "./Precipitation";

const HomeWeather = ({ data }) => {
  const hour = getCurrentHour();
  const preferences = useSelector((state) => state.preferencesState);

  if (data.current_weather) {
    return (
      <View className="flex items-center justify-center w-full flex-1">
        <View className="h-60">
          <WeatherIcon weatherCode={3} iconClass="w-72 h-56" />
        </View>
        <View className="flex flex-row justify-between w-2/3 mt-4 h-20 px-4 ">
          <View>
            <View className="flex flex-row">
              <Text className="text-7xl text-white font-black">
                {data.current_weather.temperature.toFixed(0)}
              </Text>
              <Text className="text-5xl text-white font-bold">
                &#0176;{preferences.temperature_unit}
              </Text>
            </View>
            <Text className="text-lg text-white font-bold relative bottom-2 left-1 capitalize">
              {convertWeatherCodeToString(data.current_weather.weathercode)}
            </Text>
          </View>
          <View>
            <Text className="font-secondary text-white">feels like</Text>
            <Text className="text-white font-semibold text-lg relative bottom-1">
              {data.hourly.apparent_temperature[hour].toFixed(0)}&#0176;
              {preferences.temperature_unit}
            </Text>
          </View>
        </View>
        <InfoTable data={data} />
        <ScrollView
          className="pr-1 h-[35]"
          contentContainerStyle={{ paddingBottom: 195}}
          showsVerticalScrollIndicator={false}
        >
          <Message data={data} />
          <Hourly data={data} />
          <Precipitation data={data} />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
};

export default HomeWeather;
