import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../lib/tailwind';

import { iconBack, iconBackDark } from '@/assets/icon';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';
import { useTheme } from '../lib/ThemeContext';

export default function WrapperWithHeader({
	children,
	name,
}: {
	children: React.ReactNode;
	name: string;
}) {
	const router = useRouter();
	const { theme } = useTheme();
	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 items-center justify-start ${
				theme === 'dark' ? 'bg-lightDark' : 'bg-[#FDFDFD]'
			} p-5`}
		>
			<StatusBar barStyle="dark-content" />
			{/* header */}
			<View
				style={tw`flex flex-row ${
					theme === 'dark' ? 'bg-lightDark' : 'bg-[#FDFDFD]'
				} w-full items-center gap-4 pb-2`}
			>
				<TouchableOpacity style={tw`px-2`} onPress={() => router.back()}>
					{theme === 'dark' ? (
						<SvgXml xml={iconBackDark} />
					) : (
						<SvgXml xml={iconBack} />
					)}
				</TouchableOpacity>
				<Text
					style={tw`self-center text-lg font-poppinsSemiBold ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					{name}
				</Text>
			</View>
			{children}
		</SafeAreaView>
	);
}
