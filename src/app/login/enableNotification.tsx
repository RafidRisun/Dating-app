import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function EnableNotification() {
	const router = useRouter();

	// useEffect(() => {
	// 	const checkNotificationPermission = async () => {
	// 		const { status } = await Notifications.getPermissionsAsync();
	// 		if (status === 'granted') {
	// 			router.replace('/login/enableLocation');
	// 		}
	// 	};
	// 	checkNotificationPermission();
	// }, [router]);

	// const requestNotificationPermission = async () => {
	// 	const { status } = await Notifications.requestPermissionsAsync();
	// 	router.replace('/login/enableLocation');
	// };

	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View style={tw`flex flex-col w-full items-center gap-5 p-5`}>
				<Image
					source={require('../../../assets/images/notificaion.png')}
					style={tw`w-25 h-25`}
					contentFit="contain"
				/>
				<Text style={tw`text-2xl font-poppinsBold`}>Enable Notifications</Text>
				<Text style={tw`text-sm font-poppins text-center`}>
					Get notified about new messages, matches and event alerts so you
					don&#39;t miss a thing
				</Text>
				<TouchableOpacity
					style={tw`mt-15 flex w-full items-center rounded-full py-3 bg-blue`}
					// onPress={() => {
					// 	requestNotificationPermission();
					// }}
					onPress={() => router.replace('/login/enableLocation')}
				>
					<Text style={tw`text-white font-poppinsSemiBold`}>
						Allow Notification
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex w-full items-center rounded-full py-3 bg-gray-200`}
				>
					<Text style={tw`text-gray-500 font-poppinsSemiBold`}>
						Don&apos;t Allow
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
