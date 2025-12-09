import { iconCloseSmall } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ReportModal() {
	const { theme } = useTheme();
	const [selectedReason, setSelectedReason] = React.useState<string | null>(
		null
	);
	const router = useRouter();
	return (
		<View
			style={tw`px-6 py-12 bg-${
				theme === 'dark' ? 'lightDark' : 'white'
			} rounded-t-2xl`}
		>
			<TouchableOpacity
				style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full absolute top-4 right-4`}
				onPress={() => router.back()}
			>
				<SvgXml xml={iconCloseSmall} />
			</TouchableOpacity>
			<Text
				style={tw`text-lg font-poppinsSemiBold w-full text-center ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				Why are you reporting this user?
			</Text>
			<Text
				style={tw`text-sm font-poppins w-full text-center mt-2 ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				We will review your report and take appropriate action.
			</Text>
			<View style={tw`flex flex-col w-full gap-4 mt-6`}>
				{[
					'Inappropriate behavior',
					'Spam or scam',
					'Harassment',
					'Fake profile',
					'Other',
				].map((reason, index) => (
					<TouchableOpacity
						key={index}
						style={tw`w-full border border-gray-300 rounded-lg p-4 ${
							selectedReason === reason
								? 'bg-gray-400'
								: theme === 'dark'
								? 'bg-dark'
								: 'bg-gray-100'
						}`}
						onPress={() => {
							// Handle report reason selection
							setSelectedReason(reason);
						}}
					>
						<Text
							style={tw`text-sm font-poppins ${
								selectedReason === reason
									? 'text-white'
									: theme === 'dark'
									? 'text-white'
									: 'text-black'
							}`}
						>
							{reason}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<View style={tw`flex flex-col w-full gap-3 mt-6`}>
				<TouchableOpacity style={tw`w-full bg-blue rounded-lg py-3 mt-4`}>
					<Text
						style={tw`text-white text-center text-base font-poppinsSemiBold`}
					>
						Submit Report
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full border border-gray-300 rounded-lg py-3`}
					onPress={() => {
						router.back();
					}}
				>
					<Text
						style={tw`${
							theme === 'dark' ? 'text-white' : 'text-black'
						} text-center text-base font-poppins`}
					>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
