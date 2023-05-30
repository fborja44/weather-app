import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import PreferenceSelect from "../components/settings/PreferenceSelect";
import TemperatureIcon from "../assets/icons/TemperatureIcon";
import { Picker } from "@react-native-picker/picker";
import WindIcon from "../assets/icons/stats/WindIcon";
import RainIcon from "../assets/icons/weather/RainIcon";

import { useSelector } from "react-redux";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Settings = () => {
  const preferences = useSelector((state) => state.preferencesState);

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#2B2543", "#788AA0", "#BBC4CF", "#FFFFFF"]}
        locations={[0, 0.5, 0.7, 0.85]}
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
          headerBackVisible: false,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-[125] w-full px-4"
      >
        <View>
          <Text className="font-secondary text-white text-lg mb-4">
            Preferences
          </Text>
          <PreferenceSelect
            id="temperature_unit"
            label="Temperature Unit:"
            icon={
              <TemperatureIcon
                color="rgb(51 65 85)"
                iconClass="w-6 h-6 relative top-[1]"
              />
            }
            selectedValue={preferences.temperature_unit}
          >
            <Picker.Item label="Fahrenheit (&#0176;F)" value="F" />
            <Picker.Item label="Celcius (&#0176;C)" value="C" />
          </PreferenceSelect>
          <PreferenceSelect
            id="windspeed_unit"
            label="Wind Speed Unit:"
            icon={
              <WindIcon
                color="rgb(51 65 85)"
                iconClass="w-7 h-7 relative top-[1]"
              />
            }
            selectedValue={preferences.windspeed_unit}
          >
            <Picker.Item label="Km/h" value="Km/h" />
            <Picker.Item label="m/s" value="m/s" />
            <Picker.Item label="mph" value="mph" />
            <Picker.Item label="Knots" value="kn" />
          </PreferenceSelect>
          <PreferenceSelect
            id="precipitation_unit"
            label="Precipitation Unit:"
            icon={
              <RainIcon
                color="rgb(51 65 85)"
                iconClass="w-5 h-5 relative top-[1]"
              />
            }
            selectedValue={preferences.precipitation_unit}
          >
            <Picker.Item label="Millimeters" value="mm" />
            <Picker.Item label="Inches" value="in" />
          </PreferenceSelect>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenDimensions.height,
  },
});

export default Settings;
