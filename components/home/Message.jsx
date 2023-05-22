import { View, Text } from "react-native";

const Message = () => {
  return (
    <View className="bg-white h-[85] w-full rounded-2xl box-border px-6 py-[18] my-5 flex justify-between">
      <Text className="text-slate-600 font-bold">It's raining!</Text>
      <Text className="text-slate-500">Be sure to bring an umbrella outside!</Text>
    </View>
  );
};

export default Message;
