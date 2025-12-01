import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Lifestyle() {
	return (
		<ScrollView>
			<TitleAndSubtitle
				title="Your lifestyle?"
				subtitle="How often do you drink?"
			/>
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Not for me
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						On special occasions
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Social Drinker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Regular Drinker
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ height: 20 }} />
			<Text style={tw`font-poppins text-base`}>How often do you smoke?</Text>
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Non-smoker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Occasional Smoker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
				>
					<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
						Regular Smoker
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
