import { View, Text, TouchableOpacity } from "react-native";
import RefreshIcon from "../../assets/icons/RefreshIcon";

const Error = ({ refetch }) => {
  return (
    <View className="flex flex-1 h-full items-center justify-center">
      <Text className="text-white text-center text-base font-semibold">
        Oh no!
      </Text>
      <Text className="text-white w-3/4 text-center text-base font-semibold mb-6">
        Something went wrong.
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "#F17720" }}
        className="flex flex-row items-center rounded-full py-2.5 px-6"
        onPress={refetch}
      >
        <Text className="text-white font-semibold mr-1.5 uppercase shadow-xl">
          Retry
        </Text>
        <RefreshIcon iconClass="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
};

export default Error;
