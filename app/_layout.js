import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Footer from '../components/footer/Footer';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync(); // Show splash screen while app is loading

const Layout = () => {
	const [fontsLoaded, fontError] = useFonts({
		Inter: require('../assets/fonts/Inter.ttf'),
		Questrial: require('../assets/fonts/Questrial.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync(); // Hide splash screen when finished loading
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}
  console.log("App Loaded");
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<StatusBar barStyle='light-content' />
				<Stack onLayout={onLayoutRootView} />
				<Footer />
			</PersistGate>
		</ReduxProvider>
	);
};

export default Layout;
