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
import RainIcon from "../assets/icons/stats/RainIcon";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const screenDimensions = Dimensions.get("screen");

const Settings = () => {
  const [selectedTemp, setSelectedTemp] = useState("f");
  const [selectedWind, setSelectedWind] = useState("km");
  const [selectedPrecipitation, setSelectedPrecipitation] = useState("mm");

  return (
    <SafeAreaView className="flex flex-1">
      <LinearGradient
        colors={["#2B2543", "#788AA0", "#BBC4CF", "#FFFFFF"]}
        locations={[0, 0.5, 0.65, 0.8]}
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
          <Text className="font-secondary text-white text-lg">Preferences</Text>
          <PreferenceSelect
            label="Temperature Unit:"
            icon={
              <TemperatureIcon
                color="rgb(51 65 85)"
                iconClass="w-6 h-6 relative top-[1]"
              />
            }
            selectedValue={selectedTemp}
            setSelectedValue={setSelectedTemp}
          >
            <Picker.Item label="Fahrenheit (&#0176;F)" value="f" />
            <Picker.Item label="Celcius (&#0176;C)" value="c" />
          </PreferenceSelect>
          <PreferenceSelect
            label="Wind Speed Unit:"
            icon={
              <WindIcon
                color="rgb(51 65 85)"
                iconClass="w-7 h-7 relative top-[1]"
              />
            }
            selectedValue={selectedWind}
            setSelectedValue={setSelectedWind}
          >
            <Picker.Item label="Km/h" value="km" />
            <Picker.Item label="m/s" value="m" />
            <Picker.Item label="mph" value="mi" />
            <Picker.Item label="Knots" value="knots" />
          </PreferenceSelect>
          <PreferenceSelect
            label="Precipitation Unit:"
            icon={
              <RainIcon
                color="rgb(51 65 85)"
                iconClass="w-5 h-5 relative top-[1]"
              />
            }
            selectedValue={selectedWind}
            setSelectedValue={setSelectedWind}
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
