import React, { useEffect, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import { WeatherIcon } from "../../utils/weather";

const HomeWeatherIcon = ({ data }) => {
  // Hovering animation
  const positionY = useRef(new Animated.Value(0)).current;
  const hoverDuration = 3000;
  useEffect(() => {
    const hoverAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionY, {
          toValue: -8,
          duration: hoverDuration,
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: 0,
          duration: hoverDuration,
          useNativeDriver: true,
        }),
      ])
    );

    hoverAnimation.start();

    return () => {
      hoverAnimation.stop();
    };
  }, [positionY]);

  // Shaking animation
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const shakeDuration = 110;
  const shakeDisplacement = 8;
  const doShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: shakeDisplacement,
        duration: shakeDuration,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -shakeDisplacement,
        duration: shakeDuration,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: shakeDisplacement,
        duration: shakeDuration,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: shakeDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback
      className="h-60 relative top-[6]"
      onPress={doShake}
    >
      <Animated.View
        style={{
          transform: [
            { translateY: positionY },
            { translateX: shakeAnimation },
          ],
        }}
      >
        <WeatherIcon
          weatherCode={data.current_weather.weathercode}
          iconClass="w-72 h-56"
          timezone={data.timezone}
          time={Math.floor(Date.now() / 1000)}
          sunrise={data.daily.sunrise[0]}
          sunset={data.daily.sunset[0]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default HomeWeatherIcon;
