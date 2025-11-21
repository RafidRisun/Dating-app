import {
	iconEventsTabActive,
	iconEventsTabInactive,
	iconLikesTabActive,
	iconLikesTabInactive,
	iconMessagesTabActive,
	iconMessagesTabInactive,
	iconProfileTabActive,
	iconProfileTabInactive,
	iconSwipesTabActive,
	iconSwipesTabInactive,
} from '@/assets/icon';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					paddingTop: 15,
					height: 100,
				},
				// animation: 'shift',
			}}
		>
			<Tabs.Screen
				name="swipe"
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={focused ? iconSwipesTabActive : iconSwipesTabInactive}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="events"
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={focused ? iconEventsTabActive : iconEventsTabInactive}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="chats"
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={focused ? iconMessagesTabActive : iconMessagesTabInactive}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="likes"
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={focused ? iconLikesTabActive : iconLikesTabInactive}
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<SvgXml
								xml={focused ? iconProfileTabActive : iconProfileTabInactive}
							/>
						</View>
					),
				}}
			/>
		</Tabs>
	);
}
