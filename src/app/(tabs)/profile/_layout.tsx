import { Stack } from 'expo-router';
import React from 'react';

export default function ProfileLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="settings" />
			<Stack.Screen name="editProfile" />
			<Stack.Screen name="settings/account" />
			<Stack.Screen name="settings/privacyAndSecurity" />
			<Stack.Screen name="settings/activity" />
			<Stack.Screen name="settings/deleteAccount" />
			<Stack.Screen name="settings/anotherReason" />
			<Stack.Screen name="settings/notifications" />
			<Stack.Screen name="settings/language" />
			<Stack.Screen name="settings/about" />
			<Stack.Screen name="settings/help" />
			<Stack.Screen
				name="rateModal"
				options={{
					presentation: 'formSheet',
					sheetAllowedDetents: 'fitToContents',
					contentStyle: { backgroundColor: 'transparent' },
				}}
			/>
			<Stack.Screen name="settings/contact" />
			<Stack.Screen name="settings/others" />
			<Stack.Screen name="settings/blocked" />
			<Stack.Screen name="personalInformation/bio" />
			<Stack.Screen name="personalInformation/name" />
			<Stack.Screen name="personalInformation/emailSettings" />
			<Stack.Screen name="personalInformation/phoneNumberSettings" />
			<Stack.Screen name="personalInformation/educationSettings" />
			<Stack.Screen name="personalInformation/heightSettings" />
			<Stack.Screen name="personalInformation/interestsSettings" />
			<Stack.Screen name="personalInformation/lookingForSettings" />
		</Stack>
	);
}
