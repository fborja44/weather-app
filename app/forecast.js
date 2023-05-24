import React from "react";
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
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { getCurrentDate } from "../utils/date";
import LocationIcon from "../assets/icons/LocationIcon";
import Footer from "../components/footer/Footer";
import BackIcon from "../assets/icons/BackIcon";
import SunIcon from "../assets/icons/SunIcon";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const ForecastItem = () => {
  return (
    <View className="flex flex-row w-full items-center mb-2">
      <View className="w-2/5">
        <Text className="text-white font-secondary text-lg">Today</Text>
      </View>
      <View className="flex flex-1 flex-row items-center">
        <SunIcon filled color="#FFA630" iconClass="w-8 h-8 mr-1.5" />
        <Text className="text-white text-base font-primary">Clear</Text>
      </View>
      <View className="flex-1 items-end">
        <View className="flex flex-row mt-4">
          <Text className="text-5xl text-white font-black">81</Text>
          <Text className="text-3xl text-white font-bold">&#0176;F</Text>
        </View>
      </View>
    </View>
  );
};

const Forecast = () => {
  const router = useRouter();

  const location = useSelector((state) => state.locationState);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#4800E1", "#D962EC", "#F8C1D5", "#FFFFFF"]}
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
              <TouchableOpacity
                className="flex flex-row relative bottom-[2]"
                onPress={() => router.back()}
              >
                <BackIcon color="white" iconClass="w-5 h-5 mr-2" />
                <Text className="text-white">Back to Today</Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View className="mt-2 h-14">
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="text-white text-xl font-bold">{location.city}</Text>
                <LocationIcon />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[135] w-full px-4"
      >
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </ScrollView>
      <Footer />
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

export default Forecast;
