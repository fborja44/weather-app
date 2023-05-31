import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { setPreferenceAction } from "../../redux/actions";

const PreferenceSelect = ({ id, label, icon, selectedValue, children }) => {
  const dispatch = useDispatch();

  return (
    <View
      className={`bg-white h-[60] w-full rounded-lg mb-6 flex flex-row items-center justify-between pl-${
        icon ? 4 : 5
      } pr-1`}
    >
      <View>{icon}</View>
      <Text className={`font-semibold text-slate-700 flex-1 ${icon && "ml-2"}`}>
        {label}
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setPreferenceAction(dispatch, id, itemValue);
        }}
        itemStyle={styles.item}
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
  item: {
    textAlign: "right",
  },
});

export default PreferenceSelect;
