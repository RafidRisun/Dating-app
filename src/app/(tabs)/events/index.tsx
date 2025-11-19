import { iconFilter } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Events() {
	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex-1 bg-white`}>
				<View style={tw`flex flex-row w-full items-center justify-between p-4`}>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>Events</Text>
					<TouchableOpacity>
						<SvgXml xml={iconFilter} />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
