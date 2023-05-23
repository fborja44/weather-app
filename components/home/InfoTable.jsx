import { View, Text } from "react-native";
import HumidityIcon from "../../assets/icons/stats/HumidityIcon";
import RainIcon from "../../assets/icons/stats/RainIcon";
import BarometerIcon from "../../assets/icons/stats/BarometerIcon";
import WindIcon from "../../assets/icons/stats/WindIcon";

const Label = ({ icon, children }) => {
  return (
    <View className="flex flex-row items-center">
      {icon && <View className="relative bottom-[1] mr-2">{icon}</View>}
      <Text className="text-white font-secondary text-lg">{children}</Text>
    </View>
  );
};

const Value = ({ suffix, children }) => {
  return (
    <View className="flex flex-row ">
      <Text className="text-white font-bold text-lg relative bottom-[2]">
        {children}
      </Text>
      {suffix && (
        <Text className="text-white font-semibold ml-1 self-center">
          {suffix}
        </Text>
      )}
    </View>
  );
};

const InfoTable = () => {
  return (
    <View className="box-border mt-6 px-4 w-full">
      <View className="flex flex-row justify-between border-b border-white">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label icon={<HumidityIcon />}>Humidity</Label>
          <Value>80%</Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label icon={<RainIcon />}>Rain</Label>
          <Value>89%</Value>
        </View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label icon={<BarometerIcon />}>Pressure</Label>
          <Value suffix={"inHg"}>30</Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label icon={<WindIcon />}>Wind</Label>
          <Value suffix={"mi/hr"}>12</Value>
        </View>
      </View>
    </View>
  );
};

export default InfoTable;
