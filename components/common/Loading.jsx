import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className={"flex-1 w-full h-full flex justify-center"}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
};

export default Loading;
