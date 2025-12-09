import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function DeleteAccount() {
	const { theme } = useTheme();
	const router = useRouter();

	return (
		<WrapperWithHeader name="Delete Account">
			<View style={tw`flex pt-4 w-full gap-4`}>
				<Text
					style={tw`text-2xl font-poppinsBold w-full ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					Why are you leaving?
				</Text>
				<Text
					style={tw`text-base font-poppins w-full ${
						theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
					}`}
				>
					Would you like to share why you are deleting your account?
				</Text>
			</View>
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-2 mt-6`}
			>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
						}`}
					>
						Matches are not satisfactory
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
						}`}
					>
						The app is not working properly
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
						}`}
					>
						I found someone
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
						}`}
					>
						Due to inappropriate behavior
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex p-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/anotherReason')}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
						}`}
					>
						Another reason
					</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
