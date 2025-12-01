import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Gender() {
	return (
		<View>
			<TitleAndSubtitle title="Your Gender?" subtitle="Select your gender" />
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Male
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Female
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Non-Binary
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Mechanic
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Other
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
