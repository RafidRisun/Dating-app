import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Help() {
	return (
		<WrapperWithHeader name="Help">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-2 mt-6`}>
				<TouchableOpacity style={tw`flex p-2 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>
						Frequently asked questions
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-2 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Contact</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
