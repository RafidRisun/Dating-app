import OTP from '@/src/components/SignUp/OTP';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function VerifyPhone() {
	const [otp, setOtp] = React.useState('');
	const router = useRouter();
	return (
		<WrapperWithHeader name="Phone Number">
			<OTP otp={otp} setOtp={setOtp} />
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() => router.replace('/profile/editProfile')}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Verify</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
