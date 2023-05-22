import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import HomeIcon from "../../assets/icons/HomeIcon";
import SunIcon from "../../assets/icons/SunIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

const Footer = () => {
  return (
    <View className="flex flex-row justify-between items-center bg-white h-[65] absolute bottom-0 left-0 right-0 px-12 border-t border-solid border-slate-200">
      <TouchableOpacity>
        <SunIcon filled color="#CCCFE0" />
      </TouchableOpacity>
      <TouchableOpacity>
        <HomeIcon filled color="#F17720" />
      </TouchableOpacity>
      <TouchableOpacity>
        <SettingsIcon filled color="#CCCFE0" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
