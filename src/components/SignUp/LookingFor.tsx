import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function LookingFor() {
	const [lookingFor, setLookingFor] = useState<
		| 'A long-term relationship'
		| 'Fun, casual dates'
		| 'Marriage'
		| 'Friends'
		| 'Event Buddy'
		| ''
	>('');
	const [lookingForId, setLookingForId] = useState<string>('');
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="What are you looking for?"
				subtitle="Select an option that best describes your intentions."
			/>
			<ScrollView style={tw`mt-5`}>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						lookingForId === '1' ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => {
						setLookingFor('A long-term relationship');
						setLookingForId('1');
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							lookingForId === '1' ? 'text-white' : 'text-gray-600'
						}`}
					>
						A long-term relationship
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						lookingForId === '2' ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => {
						setLookingFor('Fun, casual dates');
						setLookingForId('2');
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							lookingForId === '2' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Fun, casual dates
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						lookingForId === '3' ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => {
						setLookingFor('Marriage');
						setLookingForId('3');
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							lookingForId === '3' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Marriage
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						lookingForId === '4' ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => {
						setLookingFor('Friends');
						setLookingForId('4');
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							lookingForId === '4' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Friends
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						lookingForId === '5' ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => {
						setLookingFor('Event Buddy');
						setLookingForId('5');
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							lookingForId === '5' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Event Buddy
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
