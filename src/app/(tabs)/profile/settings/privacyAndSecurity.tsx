import { iconRightArrowGradient } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PrivacyAndSecurity() {
	const router = useRouter();

	return (
		<WrapperWithHeader name="Privacy & Security">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-3 mt-6`}>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Instant Match</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Match Request</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between p-2 border-b border-gray-300 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/activity')}
				>
					<Text style={tw`text-sm font-poppins`}>Activity</Text>
					<SvgXml xml={iconRightArrowGradient} />
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Recently Listened</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
