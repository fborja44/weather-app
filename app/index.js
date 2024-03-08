import React from 'react';

import { useRouter } from 'expo-router';

import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { getCurrentDate } from '../utils/date';
import LocationButton from '../components/common/LocationButton';
import CalendarIcon from '../assets/icons/CalendarIcon';
import BackgroundGradient from '../components/home/BackgroundGradient';

import HomeWeather from '../components/home/HomeWeather';

import useFetch from '../hook/useFetch';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { buildEndpoint } from '../utils/endpoint';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: 'Inter' };

const Home = () => {
	const router = useRouter();
	const location = useSelector((state) => state.locationState);
	const preferences = useSelector((state) => state.preferencesState);
	const { data, isLoading, error, refetch } = useFetch(
		buildEndpoint(
			`forecast?&hourly=temperature_2m,relativehumidity_2m,precipitation,is_day,apparent_temperature,precipitation_probability,weathercode,surface_pressure,visibility,windspeed_10m&daily=uv_index_max,sunrise,sunset&current_weather=true&timeformat=unixtime&forecast_days=3`,
			preferences,
			location.timezone
		),
		location
	);

	useEffect(() => {
		refetch();
	}, [location, preferences]);

	return (
		<SafeAreaView className='flex flex-1'>
			<BackgroundGradient data={data} />
			<Stack.Screen
				options={{
					title: '',
					headerShadowVisible: false,
					headerTransparent: true,
					headerLeft: () => (
						<View className='mt-2 flex h-14 justify-between'>
							<Text className='text-white font-secondary text-xl'>
								{getCurrentDate()}
							</Text>
							<TouchableOpacity
								className='flex flex-row'
								onPress={() => router.push('/forecast')}
							>
								<CalendarIcon />
								<Text className='text-white'>14 Day Forecast</Text>
							</TouchableOpacity>
						</View>
					),
					headerRight: () => <LocationButton />,
				}}
			/>
			{!isLoading && !error && (
				<View
					showsVerticalScrollIndicator={false}
					className='flex mt-[130] w-full h-full mb-[65]'
				>
					<HomeWeather data={data} />
				</View>
			)}
			{isLoading && <Loading />}
			{error && !isLoading && <Error refetch={refetch} />}
		</SafeAreaView>
	);
};

export default Home;
