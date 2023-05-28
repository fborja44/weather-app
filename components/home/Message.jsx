import { View, Text } from "react-native";
import UmbrellaIcon from "../../assets/icons/UmbrellaIcon";
import SparkleIcon from "../../assets/icons/SparkleIcon";

const messages = {
  sunny: {},
  rainy: {},
  snow: {},
  storm: {},
  cloudy: {},
  drizzle: {},
};

const Message = () => {
  return (
    <View className="box-border px-4 py-6">
      <View className="bg-white h-[82] w-full rounded-2xl box-border px-3 py-[18] flex flex-row justify-between items-center shadow-xl">
        <UmbrellaIcon
          color="#F17720"
          iconClass="w-12 h-12 -rotate-12 relative left-[6]"
        />
        <View className="flex justify-between h-full px-3">
          <Text className="text-slate-600 font-bold">It's raining!</Text>
          <Text className="text-slate-500">
            Be sure to bring an umbrella outside!
          </Text>
        </View>
        <SparkleIcon color="#F17720" />
      </View>
    </View>
  );
};

export default Message;
