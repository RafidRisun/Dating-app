import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function AccountSettings() {
	const { theme } = useTheme();
	const router = useRouter();

	return (
		<WrapperWithHeader name="Account Settings">
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-2 mt-6`}
			>
				<TouchableOpacity
					style={tw`flex p-2 border-b border-gray-300 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/blocked')}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Blocked
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex p-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/deleteAccount')}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Delete Account
					</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
