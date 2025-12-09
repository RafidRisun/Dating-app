import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Contact() {
	const { theme } = useTheme();
	const router = useRouter();
	return (
		<WrapperWithHeader name="Contact">
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-2 mt-6`}
			>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Subscriptions and Payment Method
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Matches and My Preferences
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						About Privacy and Security
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						A Feature isn&apos;t working
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex p-2 w-full`}
					onPress={() => {
						router.push('/(tabs)/profile/settings/others');
					}}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Others
					</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
