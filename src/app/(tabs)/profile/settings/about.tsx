import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function About() {
	const router = useRouter();
	return (
		<WrapperWithHeader name="About">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-2 mt-6`}>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>About Soulflag</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Privacy Policy</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Terms of Service</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Safety tips for meeting</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
