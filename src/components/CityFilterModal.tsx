import { useRouter } from 'expo-router';
import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import tw from '../lib/tailwind';
import { useTheme } from '../lib/ThemeContext';

export default function CityFilterModal({
	setCityModalOpen,
	turkishCities,
}: {
	setCityModalOpen: (open: boolean) => void;
	turkishCities: { label: string; value: string }[];
}) {
	const router = useRouter();
	const { theme } = useTheme();

	// Search query and filtered ordering: prefix matches first, then contains, then rest
	const [query, setQuery] = React.useState('');

	const filteredCities = React.useMemo(() => {
		const q = (query || '').trim().toLowerCase();
		if (!q) return turkishCities;
		const starts: typeof turkishCities = [];
		const contains: typeof turkishCities = [];
		const others: typeof turkishCities = [];
		for (const c of turkishCities) {
			const label = (c.label || '').toLowerCase();
			if (label.startsWith(q)) starts.push(c);
			else if (label.includes(q)) contains.push(c);
			else others.push(c);
		}
		return [...starts, ...contains, ...others];
	}, [query, turkishCities]);
	return (
		<View
			style={tw`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center px-5`}
		>
			<View
				style={tw`w-full h-1/2 bg-${
					theme === 'dark' ? 'lightDark' : 'white'
				} rounded-lg p-4`}
			>
				<Text
					style={tw`text-base font-poppinsSemiBold mb-3 ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					Select City (Turkey)
				</Text>
				<TextInput
					style={tw`w-full p-3 mb-3 bg-${
						theme === 'dark' ? 'dark' : 'lightGray'
					} rounded-lg font-poppins ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
					placeholder="Search city..."
					placeholderTextColor={theme === 'dark' ? '#AAAAAA' : '#666666'}
					value={query}
					onChangeText={text => setQuery(text)}
				/>
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					{filteredCities.map(c => (
						<TouchableOpacity
							key={c.value}
							style={tw`w-full p-3 border border-gray-200 bg-${
								theme === 'dark' ? 'dark' : 'white'
							} rounded-lg mb-2`}
							onPress={() => {
								router.push('/(common)/plansModal');
								setCityModalOpen(false);
							}}
						>
							<Text
								style={tw`font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-800'
								}`}
							>
								{c.label}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
				<TouchableOpacity
					style={tw`w-full px-4 py-2 bg-gray-200 rounded-xl items-center mt-3`}
					onPress={() => setCityModalOpen(false)}
				>
					<Text style={tw`font-poppinsSemiBold text-gray-700`}>Close</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
