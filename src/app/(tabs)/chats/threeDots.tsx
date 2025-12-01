import ConfirmationModal from '@/src/components/ConfirmationModal';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

export default function ThreeDots() {
	const [unMatchModalVisible, setUnMatchModalVisible] = React.useState(false);
	const [reportModalVisible, setReportModalVisible] = React.useState(false);
	return (
		<>
			<View style={tw`p-4 bg-white rounded-t-2xl`}>
				<TouchableOpacity
					style={tw`w-full py-2 border-b border-gray-200 items-center justify-center`}
					onPress={() => {
						setUnMatchModalVisible(true);
					}}
				>
					<Text style={tw`text-base font-poppins`}>Unmatch</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full py-3 items-center justify-center`}
					onPress={() => {
						setReportModalVisible(true);
					}}
				>
					<Text style={tw`text-base font-poppinsSemiBold text-red-500`}>
						Report
					</Text>
				</TouchableOpacity>
			</View>
			<Modal
				visible={unMatchModalVisible}
				transparent
				animationType="none"
				onRequestClose={() => setUnMatchModalVisible(false)}
			>
				<View
					style={tw`flex-1 items-center justify-center bg-black bg-opacity-50`}
				>
					<ConfirmationModal
						icon="unMatch"
						confirmationText="Unmatch Emma?"
						confirmationSubText="You will no longer be able to message each other."
						onConfirm={() => {
							// Handle unmatch logic here
						}}
						onCancel={() => setUnMatchModalVisible(false)}
					/>
				</View>
			</Modal>
			<Modal
				visible={reportModalVisible}
				transparent
				animationType="none"
				onRequestClose={() => setReportModalVisible(false)}
			>
				<View
					style={tw`flex-1 items-center justify-center bg-black bg-opacity-50`}
				>
					<ConfirmationModal
						icon={null}
						confirmationText="Report Emma?"
						confirmationSubText="Your report will be reviewed by our team."
						onConfirm={() => {
							// Handle report logic here
						}}
						onCancel={() => setReportModalVisible(false)}
					/>
				</View>
			</Modal>
		</>
	);
}
