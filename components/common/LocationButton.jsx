import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LocationIcon from "../../assets/icons/LocationIcon";
import { useRouter } from "expo-router";

const LocationButton = () => {
  const router = useRouter();
  const location = useSelector((state) => state.locationState);

  return (
    <View className="mt-2 h-14 flex">
      <TouchableOpacity
        className="flex flex-row items-center"
        onPress={() => router.push("/search")}
      >
        <Text className="text-white text-xl font-bold mr-1.5">{location.city}</Text>
        <LocationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default LocationButton;
