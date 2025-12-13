import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from '../lib/tailwind';
import { useTheme } from '../lib/ThemeContext';

export default function PageWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const { theme } = useTheme();
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView
				edges={['top', 'left', 'right']}
				style={tw`flex-1 items-center justify-start ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} p-5`}
			>
				<StatusBar barStyle="dark-content" />
				{children}
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}
