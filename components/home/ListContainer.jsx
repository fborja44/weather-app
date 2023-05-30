import { View, ScrollView } from "react-native";

const ListContainer = ({ children }) => {
  return (
    <ScrollView
      className="flex-1"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View className="mx-4 pb-4">
        <View className="flex flex-row bg-white h-[78] rounded-full min-w-full px-4 box-border self-start shadow-xl items-center">
          {children}
        </View>
      </View>
    </ScrollView>
  );
};

export default ListContainer;
