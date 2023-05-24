import React from "react";
import { useSelector } from "react-redux";

import { useRouter } from "expo-router";

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
import CalendarIcon from "../assets/icons/CalendarIcon";

import HomeWeather from "../components/home/HomeWeather";

import useFetch from "../hook/useFetch";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Home = () => {
  const router = useRouter();

  const location = useSelector((state) => state.locationState);

  const { data, isLoading, error } = useFetch(location);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#00A7E1", "#62C9EC", "#C1EAF8", "#FFFFFF"]}
        locations={[0, 0.4, 0.65, 0.8]}
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
                onPress={() => router.push("/forecast")}
              >
                <CalendarIcon />
                <Text className="text-white">10 Day Forecast</Text>
              </TouchableOpacity>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[135] w-full h-full mb-[65]"
      >
        <HomeWeather data={data} />
      </ScrollView>
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

export default Home;
