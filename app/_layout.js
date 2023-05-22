import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Show splash screen while app is loading

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter.ttf"),
    Questrial: require("../assets/fonts/Questrial.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide splash screen when finished loading
    }
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
