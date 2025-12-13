import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Name() {
	const { theme } = useTheme();
	const [name, setName] = useState('');
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="Your Name?"
				subtitle="This is how you will appear in Soulflag."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg ${
					theme === 'dark'
						? 'bg-lighterDark text-white'
						: 'bg-gray-100 text-black'
				} px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="Your name"
				keyboardType="default"
				value={name}
				onChangeText={text => setName(text)}
				placeholderTextColor="#6B7280"
			/>
		</View>
	);
}
