import { Stack } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Footer from '../components/footer/Footer';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync(); // Show splash screen while app is loading

const Layout = () => {
	const [fontsLoaded, fontError] = useFonts({
		Inter: require('../assets/fonts/Inter.ttf'),
		Questrial: require('../assets/fonts/Questrial.ttf'),
	});

	useEffect(() => {
		if (fontError) throw fontError;
	}, [fontError]);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync(); // Hide splash screen when finished loading
		}
	}, [fontsLoaded]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<ReduxProvider store={store}>
			<SafeAreaProvider>
				<PersistGate loading={null} persistor={persistor}>
					<StatusBar barStyle='light-content' />
					<Stack onLayout={onLayoutRootView} />
					<Footer />
				</PersistGate>
			</SafeAreaProvider>
		</ReduxProvider>
	);
};

export default Layout;
