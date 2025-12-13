import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function OTP() {
	const [code, setCode] = useState('');
	return (
		<View style={tw`flex-1 w-full flex-col gap-4`}>
			<TitleAndSubtitle
				title="Enter the verification code"
				subtitle="We have sent a 6-digit verification code to your phone number."
			/>
			{/* <TextInput
				style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="6-digit code"
				keyboardType="number-pad"
				value={code}
				onChangeText={text => setCode(text)}
				placeholderTextColor="#6B7280"
			/> */}
			<OtpInput
				numberOfDigits={6}
				focusColor="#05C3DD"
				type="numeric"
				theme={{
					pinCodeTextStyle: { color: 'white' },
				}}
				onTextChange={text => console.log(text)}
				onFilled={text => console.log(`OTP is ${text}`)}
			/>
		</View>
	);
}
