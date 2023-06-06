import { View, Text } from "react-native";
import SparkleIcon from "../../assets/icons/SparkleIcon";
import { getMessage } from "../../utils/weather";
import { useSelector } from "react-redux";

const messages = {
  sunny: {},
  rainy: {},
  snow: {},
  storm: {},
  cloudy: {},
  drizzle: {},
};

const Message = ({ data }) => {
  const preferences = useSelector((state) => state.preferencesState);

  const message = getMessage(
    data.current_weather.weathercode,
    data,
    preferences
  );
  if (!message) {
    return null;
  }
  return (
    <View className="box-border px-4 py-5">
      <View className="bg-white h-[75] rounded-2xl box-border px-3.5 py-[18] flex flex-row justify-between items-center shadow-xl">
        {message.icon}
        <View className="flex justify-between h-[75] ml-2 py-3.5">
          <Text className="text-slate-600 font-bold">{message.title}</Text>
          <Text className="text-slate-500 w-64">{message.message}</Text>
        </View>
        <SparkleIcon
          color="#F17720"
          iconClass="w-10 h-10 rotate-12 transform -scale-x-100"
        />
      </View>
    </View>
  );
};

export default Message;
