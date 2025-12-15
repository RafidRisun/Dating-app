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
				name="dm"
				options={{
					presentation: 'card', // use card/push style (not a modal sheet)
					animation: 'default', // or 'slide_from_right' for normal push
				}}
			/>
			<Stack.Screen
				name="profile"
				options={{
					presentation: 'formSheet',
					//sheetAllowedDetents: 'fitToContents',
				}}
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
			<Stack.Screen name="plansModal" options={{ presentation: 'modal' }} />
		</Stack>
	);
}
