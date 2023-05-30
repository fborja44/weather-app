import React, { useEffect } from "react";
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
import Footer from "../components/footer/Footer";
import BackIcon from "../assets/icons/BackIcon";
import ForecastWeather from "../components/forecast/ForecastWeather";

import useFetch from "../hook/useFetch";
import LocationButton from "../components/common/LocationButton";
import { buildEndpoint } from "../utils/endpoint";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Forecast = () => {
  const router = useRouter();

  const location = useSelector((state) => state.locationState);
  const preferences = useSelector((state) => state.preferencesState);

  const { data, isLoading, error, refetch } = useFetch(
    buildEndpoint(
      "forecast?&daily=weathercode,temperature_2m_max&timeformat=unixtime&forecast_days=14&timezone=America%2FNew_York",
      preferences,
      location.timezone
    ),
    location
  );

  useEffect(() => {
    refetch();
  }, [location]);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#4800E1", "#D962EC", "#F8C1D5", "#FFFFFF"]}
        locations={[0, 0.62, 0.77, 0.88]}
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
          headerRight: () => <LocationButton />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[125] w-full px-4"
      >
        <ForecastWeather data={data} />
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
