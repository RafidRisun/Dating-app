import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../lib/tailwind';

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView
				edges={['top', 'left', 'right']}
				style={tw`flex-1 items-center justify-start bg-white p-5`}
			>
				<StatusBar barStyle="dark-content" />
				{children}
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}
