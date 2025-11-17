import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from '../lib/tailwind';

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<View style={tw`flex-1 items-center justify-start bg-white p-5`}>
			<StatusBar barStyle="dark-content" />
			{children}
		</View>
	);
}
