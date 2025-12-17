import { Stack } from 'expo-router';
import React from 'react';

export default function CommonLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="dm" />
			<Stack.Screen
				name="plansModal"
				//options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
			/>
			<Stack.Screen
				name="Modals/getFavorite"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
			<Stack.Screen
				name="Modals/sendDM"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
			<Stack.Screen
				name="Modals/goBack"
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
		</Stack>
	);
}
