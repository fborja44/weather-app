import { View, Text } from "react-native";

const Label = ({ children }) => {
  return <Text className="text-white font-secondary text-lg">{children}</Text>;
};

const Value = ({ children }) => {
  return (
    <Text className="text-white font-bold text-lg relative bottom-[2]">
      {children}
    </Text>
  );
};

const InfoTable = () => {
  return (
    <View className="mt-7 w-full">
      <View className="flex flex-row justify-between border-b border-white">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label>Humidity</Label>
          <Value>80%</Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label>Rain</Label>
          <Value>89%</Value>
        </View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label>Pressure</Label>
          <Value>30 inHg</Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label>Wind</Label>
          <Value>12 mi/hr</Value>
        </View>
      </View>
    </View>
  );
};

export default InfoTable;
