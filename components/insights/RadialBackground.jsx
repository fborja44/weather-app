import React, { useEffect, useRef } from "react";
import { Svg, Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import { StyleSheet, Dimensions, Animated } from "react-native";

const screenDimensions = Dimensions.get("screen");

const RadialBackground = () => {
  // Shift background "sun" animation
  const positionY = useRef(new Animated.Value(0)).current;
  const shiftDuration = 3000;
  useEffect(() => {
    const shiftAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionY, {
          toValue: -100,
          duration: shiftDuration,
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: 0,
          duration: shiftDuration,
          useNativeDriver: true,
        }),
      ])
    );

    shiftAnimation.start();

    return () => {
      shiftAnimation.stop();
    };
  }, [positionY]);

  return (
    <Animated.View style={{ transform: [{ translateY: positionY }] }}>
      <Svg style={styles.background}>
        <Defs>
          <RadialGradient
            id="gradient"
            cx="70%"
            cy="0%"
            rx="130%"
            ry="70%"
            fx="90%"
            fy="0%"
          >
            <Stop offset="30%" stopColor="rgba(255, 118, 62, 0.9)" />
            <Stop offset="40%" stopColor="rgba(255, 144, 99, 0.75)" />
            <Stop offset="55%" stopColor="rgba(255, 168, 133, 0.60)" />
            <Stop offset="85%" stopColor="rgba(255, 255, 255, 0)" />
            <Stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#gradient)" />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenDimensions.height,
  },
});

export default RadialBackground;
