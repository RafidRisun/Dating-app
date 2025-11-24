import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function AccountSettings() {
	return (
		<WrapperWithHeader name="Account Settings">
			<View style={tw`w-full py-4`}>
				<TouchableOpacity style={tw`flex p-4 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Blocked</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex p-4 border-b border-gray-300 w-full`}>
					<Text style={tw`text-sm font-poppins`}>Delete Account</Text>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
