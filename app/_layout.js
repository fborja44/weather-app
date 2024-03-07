import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Footer from '../components/footer/Footer';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync()
	.then((result) =>
		console.log(`SplashScreen.preventAsync() succeeded: ${result}`)
	)
	.catch(console.warn); // Show splash screen while app is loading

const Layout = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		const prepare = async () => {
			try {
				setAppIsReady(false);
				await Font.loadAsync({
					Inter: require('../assets/fonts/Inter.ttf'),
					Questrial: require('../assets/fonts/Questrial.ttf'),
				});
			} catch (err) {
				console.warn(err);
			} finally {
				setAppIsReady(true);
        await SplashScreen.hideAsync(); // Hide splash screen when finished loading
			}
		};
		prepare();
	}, []);

	if (!appIsReady) {
		return null;
	}

	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<StatusBar barStyle='light-content' />
				<Stack />
				<Footer />
			</PersistGate>
		</ReduxProvider>
	);
};

export default Layout;
