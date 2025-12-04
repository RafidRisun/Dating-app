import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Name() {
	const [name, setName] = useState('');
	return (
		<View>
			<TitleAndSubtitle
				title="Your Name?"
				subtitle="This is how you will appear in Soulflag."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="Your name"
				keyboardType="default"
				value={name}
				onChangeText={text => setName(text)}
				placeholderTextColor="#6B7280"
			/>
		</View>
	);
}
