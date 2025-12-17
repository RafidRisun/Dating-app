import { Stack } from 'expo-router';
import React from 'react';

export default function SwipeLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_bottom',
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="reportModal"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
		</Stack>
	);
}
