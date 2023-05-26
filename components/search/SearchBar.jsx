import { View, TextInput, TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import XCircleIcon from "../../assets/icons/XCircleIcon";
import { useRouter } from "expo-router";

const SearchBar = ({ searchTerm, setSearchTerm, setIsLoading }) => {
  const router = useRouter();

  return (
    <View className="flex flex-row px-4 h-[60] border-b border-slate-200 items-center">
      <TouchableOpacity onPress={() => router.back()}>
        <ArrowLeftIcon iconClass="w-6 h-6" />
      </TouchableOpacity>
      <TextInput
        className="flex-1 font-secondary text-lg px-6 placeholder:text-slate-500"
        placeholder="Search for a city"
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          setIsLoading(true);
        }}
      />
      {searchTerm.length > 0 && (
        <TouchableOpacity onPress={() => setSearchTerm("")}>
          <XCircleIcon iconClass="w-6 h-6" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
