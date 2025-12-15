import { Stack } from 'expo-router';
import React from 'react';

export default function ChatLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="chat" />
			<Stack.Screen
				name="synastryChart"
				options={{ animation: 'slide_from_bottom' }}
			/>
			<Stack.Screen
				name="sendEvent"
				options={{
					presentation: 'transparentModal',
					animation: 'none',
				}}
			/>
			<Stack.Screen
				name="threeDots"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
			<Stack.Screen
				name="reportModal"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
			<Stack.Screen name="reportReason" options={{ presentation: 'modal' }} />
			<Stack.Screen name="profile" />
		</Stack>
	);
}
