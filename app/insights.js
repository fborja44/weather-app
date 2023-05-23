import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { getCurrentDate } from "../../utils/date";
import LocationIcon from "../../assets/icons/LocationIcon";
import SunIcon from "../../assets/icons/SunIcon";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Insights = () => {
  const location = useSelector((state) => state.locationState);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#F17720", "#FFA630", "#FFFFFF"]}
        style={styles.background}
      />
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
        <View className="flex flex-col items-end px-4">
          <View className="flex flex-row">
            <Text className="text-white font-black text-2xl">
              Today's Insights
            </Text>
            <SunIcon color="white" filled iconClass="w-8 h-8 ml-2" />
          </View>
          <View className="flex flex-row mt-4">
            <Text className="text-8xl text-white font-black">81</Text>
            <Text className="text-6xl text-white font-bold">&#0176;F</Text>
          </View>
        </View>
        <View className="flex flex-1 flex-col justify-end px-4">
          <View className="bg-white rounded-2xl h-[90] w-full mb-6"></View>
          <View className="bg-white rounded-2xl h-[90] w-full mb-6"></View>
          <View className="bg-white rounded-2xl h-[90] w-full mb-6"></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenDimensions.height,
  },
});

export default Insights;
