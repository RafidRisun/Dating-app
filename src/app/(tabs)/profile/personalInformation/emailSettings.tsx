import Email from '@/src/components/SignUp/Email';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function EmailSettings() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [isSubscribed, setIsSubscribed] = useState(false);
	return (
		<WrapperWithHeader name="Email">
			<Email
				email={email}
				setEmail={setEmail}
				isSubscribed={isSubscribed}
				setIsSubscribed={setIsSubscribed}
			/>
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() => router.back()}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Save</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
