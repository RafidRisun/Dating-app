import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Lifestyle({
	drinkingFrequency,
	setDrinkingFrequency,
	smokingFrequency,
	setSmokingFrequency,
}: {
	drinkingFrequency: string | null;
	setDrinkingFrequency: (text: string | null) => void;
	smokingFrequency: string | null;
	setSmokingFrequency: (text: string | null) => void;
}) {
	const { theme } = useTheme();

	return (
		<ScrollView>
			<TitleAndSubtitle
				title="Your lifestyle?"
				subtitle="How often do you drink?"
			/>
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				{drinkingOptions.map(option => {
					const selected = drinkingFrequency === option.label;
					const disabled = false; // no max limit for single-choice
					return (
						<TouchableOpacity
							key={option.id}
							disabled={disabled}
							style={tw`w-full p-4 border border-gray-300 ${
								selected
									? 'bg-blue'
									: theme === 'dark'
									? 'bg-lighterDark'
									: 'bg-gray-100'
							} rounded-lg ${disabled ? 'opacity-50' : ''}`}
							onPress={() => {
								if (selected) setDrinkingFrequency(null);
								else if (!disabled) setDrinkingFrequency(option.label);
							}}
						>
							<Text
								style={tw`font-poppinsSemiBold text-lg ${
									selected
										? 'text-white'
										: theme === 'dark'
										? 'text-white'
										: 'text-gray-600'
								}`}
							>
								{option.label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
			<View style={{ height: 20 }} />
			<Text
				style={tw`font-poppins text-base ${
					theme === 'dark' ? 'text-white' : 'text-gray-600'
				}`}
			>
				How often do you smoke?
			</Text>
			<View
				style={tw`mt-5 flex flex-col gap-4 items-center justify-center pb-10`}
			>
				{smokingOptions.map(option => {
					const selected = smokingFrequency === option.label;
					const disabled = false;
					return (
						<TouchableOpacity
							key={option.id}
							disabled={disabled}
							style={tw`w-full p-4 border border-gray-300 ${
								selected
									? 'bg-blue'
									: theme === 'dark'
									? 'bg-lighterDark'
									: 'bg-gray-100'
							} rounded-lg ${disabled ? 'opacity-50' : ''}`}
							onPress={() => {
								if (selected) setSmokingFrequency(null);
								else if (!disabled) setSmokingFrequency(option.label);
							}}
						>
							<Text
								style={tw`font-poppinsSemiBold text-lg ${
									selected
										? 'text-white'
										: theme === 'dark'
										? 'text-white'
										: 'text-gray-600'
								}`}
							>
								{option.label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</ScrollView>
	);
}

const smokingOptions = [
	{
		id: 1,
		label: 'Non-smoker',
	},
	{
		id: 2,
		label: 'Occasional Smoker',
	},
	{
		id: 3,
		label: 'Regular Smoker',
	},
];

const drinkingOptions = [
	{
		id: 1,
		label: 'Not for me',
	},
	{
		id: 2,
		label: 'On special occasions',
	},
	{
		id: 3,
		label: 'Social Drinker',
	},
	{
		id: 4,
		label: 'Regular Drinker',
	},
];
