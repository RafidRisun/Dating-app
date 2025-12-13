import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Bio() {
	const { theme } = useTheme();
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="What's your bio?"
				subtitle="Tell us a bit about yourself."
			/>
			<View style={tw`mt-5 items-center justify-center`}>
				<TextInput
					style={tw`${
						theme === 'dark'
							? 'bg-gray-800 text-white'
							: 'bg-gray-100 text-black'
					} rounded-lg p-4 w-full h-40 text-sm font-poppins`}
					placeholder="Who's up here to get clapped!"
					multiline
					textAlignVertical="top"
					placeholderTextColor="#6B7280"
				/>
			</View>
		</View>
	);
}
