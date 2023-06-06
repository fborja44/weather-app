import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { WeatherIcon } from "../../utils/weather";

const HomeWeatherIcon = ({ weathercode }) => {
  const positionY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const moveAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionY, {
          toValue: -8,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    moveAnimation.start();

    return () => {
      moveAnimation.stop();
    };
  }, [positionY]);

  return (
    <View className="h-60 relative top-[6]">
      <Animated.View style={{ transform: [{ translateY: positionY }] }}>
        <WeatherIcon weatherCode={weathercode} iconClass="w-72 h-56" />
      </Animated.View>
    </View>
  );
};

export default HomeWeatherIcon;
