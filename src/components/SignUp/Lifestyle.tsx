import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Lifestyle() {
	const [drinkingFrequency, setDrinkingFrequency] = React.useState<
		string | null
	>(null);
	const [smokingFrequency, setSmokingFrequency] = React.useState<string | null>(
		null
	);

	return (
		<ScrollView>
			<TitleAndSubtitle
				title="Your lifestyle?"
				subtitle="How often do you drink?"
			/>
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						drinkingFrequency === 'Not for me' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (drinkingFrequency === 'Not for me') {
							setDrinkingFrequency(null);
						} else {
							setDrinkingFrequency('Not for me');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							drinkingFrequency === 'Not for me'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						Not for me
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						drinkingFrequency === 'On special occasions' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (drinkingFrequency === 'On special occasions') {
							setDrinkingFrequency(null);
						} else {
							setDrinkingFrequency('On special occasions');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							drinkingFrequency === 'On special occasions'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						On special occasions
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						drinkingFrequency === 'Social Drinker' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (drinkingFrequency === 'Social Drinker') {
							setDrinkingFrequency(null);
						} else {
							setDrinkingFrequency('Social Drinker');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							drinkingFrequency === 'Social Drinker'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						Social Drinker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						drinkingFrequency === 'Regular Drinker' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (drinkingFrequency === 'Regular Drinker') {
							setDrinkingFrequency(null);
						} else {
							setDrinkingFrequency('Regular Drinker');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							drinkingFrequency === 'Regular Drinker'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						Regular Drinker
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ height: 20 }} />
			<Text style={tw`font-poppins text-base`}>How often do you smoke?</Text>
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						smokingFrequency === 'Non-smoker' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (smokingFrequency === 'Non-smoker') {
							setSmokingFrequency(null);
						} else {
							setSmokingFrequency('Non-smoker');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							smokingFrequency === 'Non-smoker' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Non-smoker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						smokingFrequency === 'Occasional Smoker' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (smokingFrequency === 'Occasional Smoker') {
							setSmokingFrequency(null);
						} else {
							setSmokingFrequency('Occasional Smoker');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							smokingFrequency === 'Occasional Smoker'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						Occasional Smoker
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						smokingFrequency === 'Regular Smoker' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (smokingFrequency === 'Regular Smoker') {
							setSmokingFrequency(null);
						} else {
							setSmokingFrequency('Regular Smoker');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							smokingFrequency === 'Regular Smoker'
								? 'text-white'
								: 'text-gray-600'
						}`}
					>
						Regular Smoker
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
