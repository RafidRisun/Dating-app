import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Gender({
	selectedGender,
	setSelectedGender,
}: {
	selectedGender: string | null;
	setSelectedGender: (gender: string | null) => void;
}) {
	const { theme } = useTheme();

	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle title="Your Gender?" subtitle="Select your gender" />
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				{genders.map(gender => (
					<TouchableOpacity
						key={gender.id}
						style={tw`w-full p-4 border border-gray-300 rounded-lg ${
							selectedGender === gender.name
								? 'bg-blue'
								: theme === 'dark'
								? 'bg-lighterDark'
								: 'bg-gray-100'
						}`}
						onPress={() => {
							if (selectedGender === gender.name) {
								setSelectedGender(null);
							} else {
								setSelectedGender(gender.name);
							}
						}}
					>
						<Text
							style={tw`font-poppinsSemiBold text-lg ${
								selectedGender === gender.name
									? 'text-white'
									: theme === 'dark'
									? 'text-white'
									: 'text-gray-600'
							}`}
						>
							{gender.name}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const genders = [
	{
		id: 1,
		name: 'Male',
	},
	{
		id: 2,
		name: 'Female',
	},
	{
		id: 3,
		name: 'Non-Binary',
	},
];
