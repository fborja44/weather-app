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
import Footer from "../components/footer/Footer";
import SettingsIcon from "../assets/icons/SettingsIcon";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Settings = () => {

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#2B2543", "#788AA0", "#BBC4CF", "#FFFFFF"]}
        style={styles.background}
      />
      <Stack.Screen
        options={{
          title: "App Settings",
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
            fontFamily: "Inter",
            fontWeight: "800",
          },
          headerLeft: () => <SettingsIcon color="white" iconClass="w-6 h-6 mr-2" />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[135] w-full"
      ></ScrollView>
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

export default Settings;
