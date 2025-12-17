import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function LookingFor({
	selectedIds,
	setSelectedIds,
}: {
	selectedIds: string[];
	setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}) {
	const { theme } = useTheme();

	const toggleSelect = (id: string) => {
		setSelectedIds((prev: string[]) => {
			if (prev.includes(id)) return prev.filter((p: string) => p !== id);
			if (prev.length >= 2) return prev; // ignore if already 2 selected
			return [...prev, id];
		});
	};

	const isSelected = (id: string) => selectedIds.includes(id);

	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="What are you looking for?"
				subtitle="Select an option that best describes your intentions."
			/>
			<ScrollView style={tw`mt-5`}>
				{lookingForData.map(item => {
					const selected = isSelected(item.id);
					const disabled = !selected && selectedIds.length >= 2;
					return (
						<TouchableOpacity
							key={item.id}
							disabled={disabled}
							style={tw`w-full p-4 border border-gray-300 rounded-lg mb-4 ${
								selected
									? 'bg-blue'
									: theme === 'dark'
									? 'bg-lighterDark'
									: 'bg-gray-100'
							} ${disabled ? 'opacity-50' : ''}`}
							onPress={() => {
								if (selected) toggleSelect(item.id);
								else if (!disabled) toggleSelect(item.id);
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
								{item.label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

const lookingForData = [
	{ id: '1', label: 'A long-term relationship' },
	{ id: '2', label: 'Fun, casual dates' },
	{ id: '3', label: 'Marriage' },
	{ id: '4', label: 'Friends' },
	{ id: '5', label: 'Event Buddy' },
];
