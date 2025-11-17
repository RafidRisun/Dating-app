import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function LoginLayout() {
	const router = useRouter();
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="help"
				options={{
					//title: 'Help',
					//headerTitleAlign: 'left',
					//headerTitleStyle: { fontFamily: 'poppinsBold' },
					//headerBackImageSource: require('../../../assets/images/backbutton.png'),
					headerTitle: '',
					headerLeft: () => (
						<TouchableOpacity
							style={tw`flex flex-row items-center justify-center gap-5 pl-2`}
							onPress={() => router.back()}
						>
							<Image
								source={require('../../../assets/images/backbutton.png')}
								style={tw`w-4 h-7`}
								contentFit="contain"
							/>
							<Text style={tw`font-poppinsBold text-xl`}>Help</Text>
						</TouchableOpacity>
					),
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen name="signup" options={{ headerShown: false }} />
		</Stack>
	);
}
