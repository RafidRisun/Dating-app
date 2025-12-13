import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
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
			<FlatList
				data={interestsData}
				keyExtractor={(item, idx) => `${item}-${idx}`}
				numColumns={2}
				contentContainerStyle={{ paddingTop: 12, paddingHorizontal: 8 }}
				columnWrapperStyle={{ justifyContent: 'space-between' }}
				renderItem={({ item: interest, index }) => {
					const isSelected = interests.includes(interest);
					const isDisabled = !isSelected && interests.length >= 8;
					const bgClass = isSelected
						? 'bg-blue'
						: theme === 'dark'
						? 'bg-lighterDark'
						: 'bg-gray-100';
					const textClass = isSelected
						? 'text-white'
						: theme === 'dark'
						? 'text-white'
						: 'text-gray-600';
					return (
						<View style={{ flex: 1, paddingHorizontal: 8, marginBottom: 12 }}>
							<TouchableOpacity
								disabled={isDisabled}
								onPress={() => {
									if (isSelected)
										setInterests(interests.filter(i => i !== interest));
									else if (!isDisabled) setInterests([...interests, interest]);
								}}
								style={tw`${bgClass} p-4 border border-gray-300 rounded-lg h-20 items-center justify-center ${
									isDisabled ? 'opacity-50' : ''
								}`}
							>
								<Text
									style={tw`font-poppinsSemiBold text-base text-center ${textClass}`}
								>
									{interest}
								</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
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
