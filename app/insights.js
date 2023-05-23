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
import { getCurrentDate } from "../utils/date";
import LocationIcon from "../assets/icons/LocationIcon";
import SunIcon from "../assets/icons/SunIcon";
import DataTable from "../components/insights/DataTable";
import DataItem from "../components/insights/DataItem";

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
          <View className="flex flex-row">
            <View className="flex flex-col items-end mr-5">
              <Text className="text-white text-base font-secondary">
                min temp
              </Text>
              <Text className="text-white text-base font-black">
                65&#0176;F
              </Text>
            </View>
            <View className="flex flex-col items-end">
              <Text className="text-white text-base font-secondary">
                max temp
              </Text>
              <Text className="text-white text-base font-black">
                83&#0176;F
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-1 flex-col justify-end px-4">
          <DataTable>
            <DataItem col left label="Speed" value="12 mi/hr" />
            <View className="w-[1] h-14 bg-slate-300" />
            <DataItem col left right label="Gust" value="1.18" />
            <View className="w-[1] h-14 bg-slate-300" />
            <DataItem col label="Direction" value="349&#0176; SE" />
          </DataTable>
          <DataTable>
            <DataItem left label="Visibility" value="05:31" />
            <View className="w-[1] h-14 bg-slate-300" />
            <DataItem label="Clouds" value="21:24" />
          </DataTable>
          <DataTable>
            <DataItem left label="Sunrise" value="05:31" />
            <View className="w-[1] h-14 bg-slate-300" />
            <DataItem label="Sunset" value="21:24" />
          </DataTable>
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
