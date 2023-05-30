import { View } from "react-native";

const ListItemContainer = ({ children, last }) => {
  return (
    <>
      <View className="border-box flex flex-row first-letter:items-center h-full w-[100]">
        <View className="flex flex-row h-full w-full items-center justify-between px-3">
          {children}
        </View>
      </View>
      {!last && <View className="w-[1] bg-slate-300 h-2/3" />}
    </>
  );
};

export default ListItemContainer;
