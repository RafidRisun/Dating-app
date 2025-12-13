import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Text, View } from 'react-native';

export default function TitleAndSubtitle({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	const { theme } = useTheme();
	return (
		<View style={tw`flex flex-col w-full gap-3`}>
			<Text
				style={tw`font-poppinsBold text-xl ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				{title}
			</Text>
			<Text
				style={tw`font-poppins text-base ${
					theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
				}`}
			>
				{subtitle}
			</Text>
		</View>
	);
}
