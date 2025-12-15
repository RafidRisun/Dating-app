import { Stack } from 'expo-router';
import React from 'react';

export default function EventsLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="detailPage" />
			<Stack.Screen name="swipeScreen" />
			<Stack.Screen
				name="plansModal"
				options={{ presentation: 'modal', animation: 'slide_from_bottom' }}
			/>
		</Stack>
	);
}
