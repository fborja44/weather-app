import { Text, Pressable, StyleSheet } from "react-native";
import LocationIcon from "../../assets/icons/LocationIcon";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { setLocationAction } from "../../redux/actions";

const SearchItem = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Pressable
      className="h-[60] border-b px-4 border-slate-200 flex flex-row items-center"
      onPress={() => {
        setLocationAction(dispatch, data.name);
        router.back();
      }}
    >
      <LocationIcon color="rgb(71 85 105)" iconClass="w-6 h-6 text-slate-600" />
      <Text className="ml-6 text-base text-slate-600">
        {data.name}
        {data.country_code === "US" && `, ${data.admin1}`}, {data.country}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  flag_icon: {
    width: 50,
    height: 50,
  },
});

export default SearchItem;
