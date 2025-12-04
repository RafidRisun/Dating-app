import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Interests() {
	const [interests, setInterests] = useState<string[]>([]);
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="Your Interests?"
				subtitle="Pick a few things that you like."
			/>
			<ScrollView style={tw`mt-5`}>
				{interestsData.map((interest, index) => (
					<TouchableOpacity
						key={index}
						style={tw`w-full p-4 border border-gray-300 ${
							interests.includes(interest) ? 'bg-blue' : 'bg-gray-100'
						} rounded-lg mb-4`}
						onPress={() => {
							if (interests.includes(interest)) {
								// Remove the interest if it already exists
								setInterests(interests.filter(i => i !== interest));
							} else {
								// Add the interest if it doesn't exist
								setInterests([...interests, interest]);
							}
						}}
					>
						<Text
							style={tw`font-poppinsSemiBold text-lg ${
								interests.includes(interest) ? 'text-white' : 'text-gray-600'
							}`}
						>
							{interest}
						</Text>
					</TouchableOpacity>
				))}
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
