import tw from '@/src/lib/tailwind';
import React from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Email() {
	const [email, setEmail] = React.useState('');
	return (
		<View>
			<TitleAndSubtitle
				title="Stay in the loop?"
				subtitle="Receive marketing emails about campaigns and offers."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="e.g., your.email@example.com"
				value={email}
				onChangeText={text => setEmail(text)}
			/>
		</View>
	);
}
