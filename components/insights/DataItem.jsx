import { View, Text } from "react-native";

const DataItem = ({ col, left, right, label, value }) => {
  return (
    <View
      className={`flex flex-1 ${
        col ? "flex-col" : "flex-row"
      } justify-between items-center ${left ? "pr-4" : "pl-4"} ${
        right && "pl-4"
      }`}
    >
      <View className="flex flex-row items-center">
        <Text className="font-primary text-slate-400">{label}</Text>
      </View>
      <Text className="font-black text-slate-600 text-base">{value}</Text>
    </View>
  );
};

export default DataItem;
