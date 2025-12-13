import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Interests({
	interests,
	setInterests,
}: {
	interests: string[];
	setInterests: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const { theme } = useTheme();

	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="Your Interests?"
				subtitle="Pick a few things that you like."
			/>
			<ScrollView style={tw`mt-5`}>
				{interestsData.map((interest, index) => {
					const isSelected = interests.includes(interest);
					const isDisabled = !isSelected && interests.length >= 8;
					return (
						<TouchableOpacity
							key={index}
							disabled={isDisabled}
							style={tw`w-full p-4 border border-gray-300 ${
								isSelected
									? 'bg-blue'
									: theme === 'dark'
									? 'bg-lighterDark'
									: 'bg-gray-100'
							} rounded-lg mb-4 ${isDisabled ? 'opacity-50' : ''}`}
							onPress={() => {
								if (isSelected) {
									setInterests(interests.filter(i => i !== interest));
								} else if (!isDisabled) {
									setInterests([...interests, interest]);
								}
							}}
						>
							<Text
								style={tw`font-poppinsSemiBold text-lg ${
									isSelected
										? 'text-white'
										: theme === 'dark'
										? 'text-white'
										: 'text-gray-600'
								}`}
							>
								{interest}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}
const interestsData = [
	'Concert',
	'Theater',
	'Stand-up Comedy',
	'Sports Events',
	'Art Exhibitions',
	'Travel',
	'Food & Dining',
	'Outdoor Activities',
	'Gaming',
	'Fitness & Wellness',
	'Music Festivals',
	'Workshops & Classes',
	'Networking Events',
	'Volunteering',
	'Book Clubs',
	'Tech Meetups',
	'Movie Nights',
	'Dancing',
	'Photography',
	'Crafting',
];
