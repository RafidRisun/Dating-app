import tw from '@/src/lib/tailwind';
import React from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Bio() {
	return (
		<View>
			<TitleAndSubtitle
				title="What's your bio?"
				subtitle="Tell us a bit about yourself."
			/>
			<View style={tw`mt-5 items-center justify-center`}>
				<TextInput
					style={tw`bg-gray-100 rounded-lg p-4 w-full h-40 text-sm font-poppins`}
					placeholder="Who's up here to get clapped!"
					multiline
					textAlignVertical="top"
				/>
			</View>
		</View>
	);
}
