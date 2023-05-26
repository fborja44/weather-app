import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PreferenceSelect = ({
  label,
  icon,
  selectedValue,
  setSelectedValue,
  children,
}) => {
  return (
    <View
      className={`bg-white h-[60] w-full rounded-lg mt-3 flex flex-row items-center justify-between pl-${
        icon ? 4 : 5
      } pr-1`}
    >
      <View>{icon}</View>
      <Text
        className={`font-semibold text-slate-700 flex-1 ${
          icon && "ml-2"
        }`}
      >
        {label}
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {children}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 200,
  },
});

export default PreferenceSelect;
