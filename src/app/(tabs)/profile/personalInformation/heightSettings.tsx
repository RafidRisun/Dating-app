import Height from '@/src/components/SignUp/Height';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function HeightSettings() {
	const [height, setHeight] = useState('');
	const router = useRouter();
	return (
		<WrapperWithHeader name="Height">
			<Height height={height} setHeight={setHeight} />
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() => router.back()}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Save</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
