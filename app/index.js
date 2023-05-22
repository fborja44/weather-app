import React, { useState } from "react";

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
import RainIcon from "../assets/icons/weather/RainIcon";
import Footer from "../components/footer/Footer";
import InfoTable from "../components/home/InfoTable";
import Message from "../components/home/Message";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Home = () => {
  const [location, setLocation] = useState("New York");

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#00A7E1", "#62C9EC", "#C1EAF8", "#FFFFFF"]}
        style={styles.background}
      />
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <View className="mt-2 flex h-12">
              <Text className="text-white font-secondary text-lg">
                {getCurrentDate()}
              </Text>
              <TouchableOpacity className="flex flex-row">
                <CalendarIcon />
                <Text className="text-white">View 10 Days</Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View className="mt-2 h-12">
              <View className="flex flex-row items-center">
                <Text className="text-white text-xl font-bold">{location}</Text>
                <LocationIcon />
              </View>
            </View>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-36 w-full"
      >
        <View className="w-full px-4 flex items-center justify-center">
          <RainIcon />
          <View className="flex flex-row justify-between w-2/3 file:mt-4 h-20">
            <View>
              <View className="flex flex-row">
                <Text className="text-7xl text-white font-black">81</Text>
                <Text className="text-5xl text-white font-bold">&#0176;F</Text>
              </View>
              <Text className="text-lg text-white font-bold relative bottom-2 left-1">
                Rainy
              </Text>
            </View>
            <View>
              <Text className="font-secondary text-white">feels like</Text>
              <Text className="text-white font-semibold text-lg relative bottom-1">
                78&#0176;F
              </Text>
            </View>
          </View>
          <InfoTable />
          <Message />
        </View>
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

export default Home;
