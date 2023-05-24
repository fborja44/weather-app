import React from "react";
import { useSelector } from "react-redux";

import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { getCurrentDate } from "../utils/date";
import LocationIcon from "../assets/icons/LocationIcon";
import RadialBackground from "../components/insights/RadialBackground";

import useFetch from "../hook/useFetch";
import InsightsWeather from "../components/insights/InsightsWeather";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const Insights = () => {
  const location = useSelector((state) => state.locationState);

  const { data, isLoading, error } = useFetch(location);

  return (
    <SafeAreaView className="flex flex-1">
      <RadialBackground />
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <View className="mt-2 flex h-14 justify-between">
              <Text className="text-white font-secondary text-xl">
                {getCurrentDate()}
              </Text>
            </View>
          ),
          headerRight: () => (
            <View className="mt-2 h-14">
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="text-white text-xl font-bold">{location}</Text>
                <LocationIcon />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View className="flex flex-1 mt-[135] w-full mb-[65]">
        <InsightsWeather data={data} />
      </View>
    </SafeAreaView>
  );
};

export default Insights;
