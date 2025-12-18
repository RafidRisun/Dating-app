import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	Modal,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function Help() {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<KeyboardAvoidingView behavior="padding" style={tw`flex-1 bg-white`}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<ScrollView style={tw`flex-1`} contentContainerStyle={tw`pb-9`}>
					<View style={tw`flex-1 h-full justify-start items-center pb-5`}>
						<View style={tw`flex flex-col w-full p-5 gap-5`}>
							<Text style={tw`font-poppins`}>
								Can&apos;t log in? Try these steps
							</Text>
							<View style={tw`h-0.2 w-full bg-gray-400`} />
							<View style={tw`flex flex-col gap-4`}>
								<Text style={tw`font-poppinsSemiBold text-base`}>
									Try connecting with your network
								</Text>
								<Text style={tw`font-poppins text-sm`}>
									Ensure you have a stable internet connection. Try switching
									between Wi-Fi and mobile data to see if that resolves the
									issue.
								</Text>
							</View>
							<View style={tw`h-0.2 w-full bg-gray-400`} />
							<View style={tw`flex flex-col gap-4`}>
								<Text style={tw`font-poppinsSemiBold text-base`}>
									Is your app up-to-date?
								</Text>
								<Text style={tw`font-poppins text-sm`}>
									Using an outdated version of the app can lead to login
									problems. Ensure you have the latest version installed from
									your device&apos;s app store.
								</Text>
							</View>
							<View style={tw`h-0.2 w-full bg-gray-400`} />
							<View style={tw`flex flex-col gap-4`}>
								<Text style={tw`font-poppinsSemiBold text-base`}>
									Any other issues?
								</Text>
								<Text style={tw`font-poppins text-sm`}>
									If you&apos;re still experiencing issues, please let us know
									by submitting your problem here.
								</Text>
								<TextInput
									style={tw`bg-gray-100 rounded-lg p-4 h-40 text-sm font-poppins`}
									placeholder="Describe the problem you're facing..."
									multiline
									textAlignVertical="top"
									placeholderTextColor="#6B7280"
								/>
							</View>
							<TouchableOpacity
								style={tw`bg-blue rounded-full p-2 w-full items-center justify-center`}
								onPress={() => setModalVisible(true)}
							>
								<Text style={tw`text-white font-poppinsSemiBold`}>
									Submit Feedback
								</Text>
							</TouchableOpacity>
						</View>
						<Modal
							transparent={true}
							animationType="none"
							visible={modalVisible}
						>
							<View
								style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
							>
								<View style={tw`bg-white rounded-lg p-5 w-80`}>
									<Text style={tw`font-poppinsSemiBold text-lg mb-4`}>
										Feedback Submitted
									</Text>
									<Text style={tw`font-poppins text-sm mb-6`}>
										Thank you for your feedback! We appreciate you taking the
										time to help us improve.
									</Text>
									<TouchableOpacity
										style={tw`bg-blue rounded-full p-2 w-full items-center justify-center`}
										onPress={() => setModalVisible(false)}
									>
										<Text style={tw`text-white font-poppinsSemiBold`}>
											Close
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</Modal>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
