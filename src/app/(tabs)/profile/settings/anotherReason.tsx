import { iconBell } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import React from 'react';
import {
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function AnotherReason() {
	const [reason, setReason] = React.useState('');
	const [areYouSureModal, setAreYouSureModal] = React.useState(false);
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={tw`flex-1`}>
				<WrapperWithHeader name="Delete Account">
					<View style={tw`flex pt-4 w-full gap-4`}>
						<Text style={tw`text-2xl font-poppinsBold w-full`}>
							Would you like to share the problem?
						</Text>
						<Text style={tw`text-base font-poppins w-full`}>
							Please let us know what went wrong. Your feedback helps us improve
							SoulFlag.
						</Text>
					</View>
					<View style={tw`flex-1 w-full`}>
						<TextInput
							style={tw`w-full h-40 p-3 bg-gray-100 border border-gray-300 rounded-lg mt-6 text-base font-poppins text-gray-800`}
							placeholder="Type your reason here..."
							multiline
							numberOfLines={6}
							textAlignVertical="top"
							value={reason}
							onChangeText={setReason}
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
					<View
						style={tw`flex items-center justify-center w-full absolute inset-0`}
					>
						<View
							style={tw`flex-1 w-full bg-black opacity-10 absolute inset-0`}
						/>
						<View
							style={tw`flex items-center justify-center w-9/10 p-4 gap-2 bg-white rounded-lg`}
						>
							<SvgXml xml={iconBell} />
							<Text style={tw`text-lg font-poppinsSemiBold text-center`}>
								Are you sure you want to delete your account?
							</Text>
							<Text style={tw`text-sm font-poppins text-gray-400 text-center`}>
								This cannot be undone.
							</Text>
							<TouchableOpacity
								style={tw`w-full bg-red-500 rounded-lg py-3 mt-4`}
								onPress={() => {}}
							>
								<Text
									style={tw`text-white text-center text-base font-poppinsSemiBold`}
								>
									Continue
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full border border-gray-300 rounded-lg py-3`}
								onPress={() => setAreYouSureModal(false)}
							>
								<Text
									style={tw`text-gray-600 text-center text-base font-poppins`}
								>
									Cancel
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}
