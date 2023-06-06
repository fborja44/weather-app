import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className={"flex flex-1 w-full h-full items-center justify-center"}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
};

export default Loading;
