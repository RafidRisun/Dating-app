import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Education() {
	const { theme } = useTheme();
	const [education, setEducation] = React.useState('');
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="Your Education?"
				subtitle="Add your education details."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg ${
					theme === 'dark'
						? 'bg-lighterDark text-white'
						: 'bg-gray-100 text-black'
				} px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="e.g., Bachelor's in Computer Science"
				value={education}
				onChangeText={text => setEducation(text)}
				placeholderTextColor="#6B7280"
			/>
		</View>
	);
}
