import { View, Text } from "react-native";
import HumidityIcon from "../../assets/icons/stats/HumidityIcon";
import RainIcon from "../../assets/icons/weather/RainIcon";
import BarometerIcon from "../../assets/icons/stats/BarometerIcon";
import WindIcon from "../../assets/icons/stats/WindIcon";
import { convertHPAToInHg } from "../../utils/pressure";
import { getCurrentHour } from "../../utils/date";
import { useSelector } from "react-redux";

const Label = ({ icon, children }) => {
  return (
    <View className="flex flex-row items-center">
      {icon && <View className="relative bottom-[1] mr-2">{icon}</View>}
      <Text className="text-white font-secondary text-lg">{children}</Text>
    </View>
  );
};

const Value = ({ suffix, children }) => {
  return (
    <View className="flex flex-row ">
      <Text className="text-white font-bold text-lg relative bottom-[2]">
        {children}
      </Text>
      {suffix && (
        <Text className="text-white font-semibold ml-1 self-center">
          {suffix}
        </Text>
      )}
    </View>
  );
};

const InfoTable = ({ data }) => {
  const hour = getCurrentHour(data.timezone);
  const preferences = useSelector((state) => state.preferencesState);

  return (
    <View className="box-border mt-6 px-4 w-full">
      <View className="flex flex-row justify-between border-b border-white">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label icon={<HumidityIcon />}>Humidity</Label>
          <Value>{data.hourly.relativehumidity_2m[hour]}%</Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label icon={<RainIcon />}>Rain</Label>
          <Value>{data.hourly.precipitation_probability[hour]}%</Value>
        </View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="box-border flex-1 border-r border-white pl-1 pr-3 py-1 flex-row justify-between">
          <Label icon={<BarometerIcon />}>Pressure</Label>
          <Value suffix={"inHg"}>
            {convertHPAToInHg(data.hourly.surface_pressure[hour])}
          </Value>
        </View>
        <View className="box-border flex-1 pl-3 pr-1 py-1 flex-row justify-between">
          <Label icon={<WindIcon />}>Wind</Label>
          <Value suffix={preferences.windspeed_unit}>
            {data.current_weather.windspeed}
          </Value>
        </View>
      </View>
    </View>
  );
};

export default InfoTable;
