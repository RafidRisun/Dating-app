import PhoneNumber from '@/src/components/SignUp/PhoneNumber';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function PhoneNumberSettings() {
	const [phoneNumber, setPhoneNumber] = React.useState<string>('');
	const router = useRouter();
	return (
		<WrapperWithHeader name="Phone Number">
			<PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() =>
					router.replace('/profile/personalInformation/verifyPhone')
				}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Send Code</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
