import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Footer from "../components/footer/Footer";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

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
  return (
    <ReduxProvider store={store}>
      <Stack onLayout={onLayoutRootView} />
      <Footer />
    </ReduxProvider>
  );
};

export default Layout;
