import ConfirmationModal from '@/src/components/ConfirmationModal';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import {
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function AnotherReason() {
	const { theme } = useTheme();
	const [reason, setReason] = React.useState('');
	const [areYouSureModal, setAreYouSureModal] = React.useState(false);
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={tw`flex-1`}>
				<WrapperWithHeader name="Delete Account">
					<View style={tw`flex pt-4 w-full gap-4`}>
						<Text
							style={tw`text-2xl font-poppinsBold w-full ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							Would you like to share the problem?
						</Text>
						<Text
							style={tw`text-base font-poppins w-full ${
								theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
							}`}
						>
							Please let us know what went wrong. Your feedback helps us improve
							SoulFlag.
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
								No, delete my account
							</Text>
						)}
					</TouchableOpacity>
				</WrapperWithHeader>
				{areYouSureModal && (
					<ConfirmationModal
						icon="bell"
						confirmationText="Are you sure you want to delete your account?"
						confirmationSubText="This action is irreversible and will permanently delete all your data."
						onConfirm={() => {}}
						onCancel={() => setAreYouSureModal(false)}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}
