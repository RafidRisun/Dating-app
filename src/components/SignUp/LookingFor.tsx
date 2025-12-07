import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function LookingFor() {
	// allow up to 2 selections
	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const toggleSelect = (id: string) => {
		setSelectedIds(prev => {
			if (prev.includes(id)) return prev.filter(p => p !== id);
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
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						isSelected('1') ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => toggleSelect('1')}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							isSelected('1') ? 'text-white' : 'text-gray-600'
						}`}
					>
						A long-term relationship
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						isSelected('2') ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => toggleSelect('2')}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							isSelected('2') ? 'text-white' : 'text-gray-600'
						}`}
					>
						Fun, casual dates
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						isSelected('3') ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => toggleSelect('3')}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							isSelected('3') ? 'text-white' : 'text-gray-600'
						}`}
					>
						Marriage
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						isSelected('4') ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => toggleSelect('4')}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							isSelected('4') ? 'text-white' : 'text-gray-600'
						}`}
					>
						Friends
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border ${
						isSelected('5') ? 'bg-blue' : 'bg-gray-100'
					} border-gray-300 rounded-lg mb-4`}
					onPress={() => toggleSelect('5')}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							isSelected('5') ? 'text-white' : 'text-gray-600'
						}`}
					>
						Event Buddy
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
