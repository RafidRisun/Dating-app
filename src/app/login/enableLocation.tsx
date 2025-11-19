import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function EnableLocation() {
	const router = useRouter();
	const [location, setLocation] = useState<Location.LocationObject | null>(
		null
	);

	// useEffect(() => {
	// 	const checkLocationPermission = async () => {
	// 		const { status } = await Location.getForegroundPermissionsAsync();
	// 		if (status === 'granted') {
	// 			const userLocation = await Location.getCurrentPositionAsync({});
	// 			setLocation(userLocation);
	// 			router.replace('/login/onboarding');
	// 		}
	// 	};
	// 	checkLocationPermission();
	// }, [router]);

	// const requestLocationPermission = async () => {
	// 	router.replace('/login/onboarding');
	// 	const { status } = await Location.requestForegroundPermissionsAsync();
	// 	if (status === 'granted') {
	// 		const userLocation = await Location.getCurrentPositionAsync({});
	// 		setLocation(userLocation);
	// 	}
	// };

	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View style={tw`flex flex-col w-full items-center gap-5 p-5`}>
				<Image
					source={require('../../../assets/images/location.png')}
					style={tw`w-25 h-25`}
					contentFit="contain"
				/>
				<Text style={tw`text-2xl font-poppinsBold`}>Enable Location</Text>
				<Text style={tw`text-sm font-poppins text-center`}>
					We need your location to show you potential matches and events
					happening near you.
				</Text>
				<TouchableOpacity
					style={tw`mt-15 flex w-full items-center rounded-full py-3 bg-blue`}
					// onPress={requestLocationPermission}
					onPress={() => router.replace('/login/onboarding')}
				>
					<Text style={tw`text-white font-poppinsSemiBold`}>
						Allow Location
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex w-full items-center rounded-full py-3 bg-gray-200`}
					onPress={() => router.replace('/login/onboarding')}
				>
					<Text style={tw`text-gray-500 font-poppinsSemiBold`}>
						Don&apos;t Allow
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
