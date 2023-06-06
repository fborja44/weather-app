import React, { useEffect, useRef } from "react";
import { Svg, Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import { StyleSheet, Dimensions, Animated } from "react-native";

const screenDimensions = Dimensions.get("screen");

const RadialBackground = () => {
  const positionY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(positionY, {
          toValue: -50,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(positionY, {
          toValue: 0,
          duration: 3000,
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
    <Animated.View style={{ transform: [{ translateY: positionY }] }}>
      <Svg style={styles.background}>
        <Defs>
          <RadialGradient
            id="gradient"
            cx="70%"
            cy="0%"
            rx="130%"
            ry="70%"
            fx="70%"
            fy="0%"
          >
            <Stop offset="30%" stopColor="rgba(255, 118, 62, 0.9)" />
            <Stop offset="40%" stopColor="rgba(255, 144, 99, 0.75)" />
            <Stop offset="55%" stopColor="rgba(255, 168, 133, 0.60)" />
            <Stop offset="85%" stopColor="rgba(255, 255, 255, 0)" />
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
