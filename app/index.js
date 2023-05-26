import React from "react";

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
import LocationButton from "../components/common/LocationButton";
import CalendarIcon from "../assets/icons/CalendarIcon";

import HomeWeather from "../components/home/HomeWeather";

import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
import { useEffect } from "react";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Home = () => {
  const router = useRouter();
  const location = useSelector((state) => state.locationState);

  const { data, isLoading, error, refetch } = useFetch(
    `forecast?&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,surface_pressure,visibility,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&forecast_days=1`,
    location
  );

  useEffect(() => {
    refetch();
  }, [location]);

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
                <Text className="text-white">14 Day Forecast</Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <LocationButton />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[135] w-full h-full mb-[65]"
      >
        {!isLoading && !error && <HomeWeather data={data} />}
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
