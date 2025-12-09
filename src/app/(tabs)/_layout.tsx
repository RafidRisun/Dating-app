import {
	iconEventsTabActive,
	iconEventsTabActiveDark,
	iconEventsTabInactive,
	iconEventsTabInactiveDark,
	iconLikesTabActive,
	iconLikesTabActiveDark,
	iconLikesTabInactive,
	iconLikesTabInactiveDark,
	iconMessagesTabActive,
	iconMessagesTabActiveDark,
	iconMessagesTabInactive,
	iconMessagesTabInactiveDark,
	iconProfileTabActive,
	iconProfileTabActiveDark,
	iconProfileTabInactive,
	iconProfileTabInactiveDark,
	iconSwipesTabActive,
	iconSwipesTabInactive,
	iconSwipeTabActiveDark,
	iconSwipeTabInactiveDark,
} from '@/assets/icon';
import { useTheme } from '@/src/lib/ThemeContext';
import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function TabLayout() {
	const { theme } = useTheme();

	return (
		<>
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={theme === 'dark' ? '#000' : '#fff'}
			/>
			<Tabs
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarStyle: {
						paddingTop: 15,
						height: 100,
						backgroundColor: theme === 'dark' ? '#000' : '#fff',
						borderTopColor: theme === 'dark' ? '#111' : '#e5e7eb',
					},
					tabBarActiveTintColor: theme === 'dark' ? '#fff' : '#000',
					tabBarInactiveTintColor: theme === 'dark' ? '#9ca3af' : '#6b7280',
				}}
			>
				<Tabs.Screen
					name="swipe"
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<SvgXml
									xml={
										focused
											? theme === 'dark'
												? iconSwipeTabActiveDark
												: iconSwipesTabActive
											: theme === 'dark'
											? iconSwipeTabInactiveDark
											: iconSwipesTabInactive
									}
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
									xml={
										focused
											? theme === 'dark'
												? iconEventsTabActiveDark
												: iconEventsTabActive
											: theme === 'dark'
											? iconEventsTabInactiveDark
											: iconEventsTabInactive
									}
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
									xml={
										focused
											? theme === 'dark'
												? iconMessagesTabActiveDark
												: iconMessagesTabActive
											: theme === 'dark'
											? iconMessagesTabInactiveDark
											: iconMessagesTabInactive
									}
									width={28}
									height={28}
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
									xml={
										focused
											? theme === 'dark'
												? iconLikesTabActiveDark
												: iconLikesTabActive
											: theme === 'dark'
											? iconLikesTabInactiveDark
											: iconLikesTabInactive
									}
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
									xml={
										focused
											? theme === 'dark'
												? iconProfileTabActiveDark
												: iconProfileTabActive
											: theme === 'dark'
											? iconProfileTabInactiveDark
											: iconProfileTabInactive
									}
								/>
							</View>
						),
					}}
				/>
			</Tabs>
		</>
	);
}
