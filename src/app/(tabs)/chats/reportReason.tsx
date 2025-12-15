import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ReportReason() {
	const { theme } = useTheme();
	const [reason, setReason] = React.useState('');
	const [areYouSureModal, setAreYouSureModal] = React.useState(false);
	return (
		<WrapperWithHeader name="Reason">
			<View style={tw`flex pt-4 w-full gap-4`}>
				<Text
					style={tw`text-2xl font-poppinsBold w-full ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					Would you like to share the reason for reporting this user?
				</Text>
				<Text
					style={tw`text-base font-poppins w-full ${
						theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
					}`}
				>
					Providing a reason helps us take appropriate action and improves our
					community.
				</Text>
			</View>
			<View style={tw`flex-1 w-full`}>
				<TextInput
					style={tw`w-full h-40 p-3 ${
						theme === 'dark'
							? 'bg-dark text-white'
							: 'bg-gray-100 text-gray-800'
					} border border-gray-300 rounded-lg mt-6 text-base font-poppins`}
					placeholder="Type your reason here..."
					multiline
					numberOfLines={6}
					textAlignVertical="top"
					value={reason}
					onChangeText={setReason}
					placeholderTextColor="#6B7280"
				/>
			</View>
			<TouchableOpacity
				style={tw`w-full border border-blue rounded-lg py-3 mt-6 mb-4`}
				onPress={() => setAreYouSureModal(true)}
			>
				{reason ? (
					<Text style={tw`text-blue text-center text-base font-poppins`}>
						Submit
					</Text>
				) : (
					<Text style={tw`text-blue text-center text-base font-poppins`}>
						No, just report
					</Text>
				)}
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
