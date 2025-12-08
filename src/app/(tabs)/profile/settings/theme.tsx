import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Appearance, Text, TouchableOpacity, View } from 'react-native';

export default function Theme() {
	const { theme, setTheme, resetThemeToSystem, isHydrated } = useTheme();

	if (!isHydrated) return null;

	return (
		<WrapperWithHeader name="Theme">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-3 mt-6`}>
				<TouchableOpacity
					style={tw`flex p-2 border-b border-gray-300 w-full`}
					onPress={() => setTheme('light')}
				>
					<View style={tw`flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins`}>Light</Text>
						{theme === 'light' && (
							<Text style={tw`text-sm font-poppins`}>✓</Text>
						)}
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex p-2 border-b border-gray-300 w-full`}
					onPress={() => setTheme('dark')}
				>
					<View style={tw`flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins`}>Dark</Text>
						{theme === 'dark' && (
							<Text style={tw`text-sm font-poppins`}>✓</Text>
						)}
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex p-2 w-full`}
					onPress={() => resetThemeToSystem()}
				>
					<View style={tw`flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins`}>System Default</Text>
						{/* Show check if current theme matches system */}
						{theme ===
							(Appearance.getColorScheme() === 'dark' ? 'dark' : 'light') && (
							<Text style={tw`text-sm font-poppins`}>✓</Text>
						)}
					</View>
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
