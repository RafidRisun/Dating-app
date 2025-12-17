import Interests from '@/src/components/SignUp/Interests';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function InterestsSettings() {
	const [interests, setInterests] = React.useState<string[]>([]);
	const router = useRouter();
	return (
		<WrapperWithHeader name="Interests">
			<Interests interests={interests} setInterests={setInterests} />
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() => router.back()}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Save</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
