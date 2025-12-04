import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function OTP() {
	const [code, setCode] = useState('');
	return (
		<View>
			<TitleAndSubtitle
				title="Enter the verification code"
				subtitle="We have sent a 6-digit verification code to your phone number."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="6-digit code"
				keyboardType="number-pad"
				value={code}
				onChangeText={text => setCode(text)}
				placeholderTextColor="#6B7280"
			/>
		</View>
	);
}
