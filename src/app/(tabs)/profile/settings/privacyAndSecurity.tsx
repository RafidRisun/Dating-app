import { iconRightArrowGradient } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PrivacyAndSecurity() {
	const { theme } = useTheme();
	const router = useRouter();

	return (
		<WrapperWithHeader name="Privacy & Security">
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-3 mt-6`}
			>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Instant Match
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Match Request
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between p-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/activity')}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Activity
					</Text>
					<SvgXml xml={iconRightArrowGradient} />
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
