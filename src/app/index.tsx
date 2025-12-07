import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
//import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import tw from '../lib/tailwind';

// Configure notification behavior
// Notifications.setNotificationHandler({
// 	handleNotification: async () => ({
// 		shouldShowAlert: true,
// 		shouldPlaySound: false,
// 		shouldSetBadge: false,
// 		shouldShowBanner: true,
// 		shouldShowList: true,
// 	}),
// });

export default function Index() {
	const router = useRouter();

	const checkLoginStatus = async () => {
		setTimeout(() => {
			//router.replace('/login');
			router.replace('/(tabs)/swipe');
		}, 1800);
	};

	useEffect(() => {
		checkLoginStatus();
	}, []);

	return (
		<View style={tw`flex-1`}>
			<LinearGradient
				colors={['#05C3DD', '#B14EFF']}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0.2 }}
				style={tw`absolute inset-0`}
			/>
			<Animated.View
				entering={FadeIn.delay(500).duration(1000)}
				style={tw`flex-1 w-full items-center justify-center`}
			>
				<Image
					source={require('../../assets/images/stars.png')}
					style={tw`absolute top-5 left-0 w-full h-40`}
					contentFit="contain"
				/>
				<Image
					source={require('../../assets/images/logo.png')}
					style={tw`w-35 h-35`}
					contentFit="contain"
				/>
			</Animated.View>
		</View>
	);
}
