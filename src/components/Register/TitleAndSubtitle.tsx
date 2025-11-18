import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';

export default function TitleAndSubtitle({
	title,
	subtitle,
}: {
	title: string;
	subtitle: string;
}) {
	return (
		<View style={tw`flex flex-col w-full gap-3`}>
			<Text style={tw`font-poppinsBold text-xl`}>{title}</Text>
			<Text style={tw`font-poppins text-base`}>{subtitle}</Text>
		</View>
	);
}
