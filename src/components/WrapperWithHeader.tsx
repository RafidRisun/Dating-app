import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../lib/tailwind';

import { iconBack } from '@/assets/icon';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';

export default function WrapperWithHeader({
	children,
	name,
}: {
	children: React.ReactNode;
	name: string;
}) {
	const router = useRouter();
	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 items-center justify-start bg-[#FDFDFD] p-5`}
		>
			<StatusBar barStyle="dark-content" />
			{/* header */}
			<View style={tw`flex flex-row bg-white w-full items-center gap-4 pb-2`}>
				<TouchableOpacity style={tw`px-2`} onPress={() => router.back()}>
					<SvgXml xml={iconBack} />
				</TouchableOpacity>
				<Text style={tw`self-center text-lg font-poppinsSemiBold`}>{name}</Text>
			</View>
			{children}
		</SafeAreaView>
	);
}
