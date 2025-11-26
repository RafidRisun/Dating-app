import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Switch, Text, View } from 'react-native';

export default function Notifications() {
	const [notifications, setNotifications] = React.useState(false);
	const toggleNotificationSwitch = () =>
		setNotifications(previousState => !previousState);
	return (
		<WrapperWithHeader name="Notifications">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-2 mt-6`}>
				<View style={tw`flex flex-col gap-2`}>
					<Text style={tw`text-base font-poppins`}>Allow Notifications</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins text-gray-600 flex-1 pr-1`}>
							Receive notifications about new matches and messages.
						</Text>
						<Switch
							trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
							thumbColor={notifications ? '#FFFFFF' : '#A0A0A0'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleNotificationSwitch}
							value={notifications}
						/>
					</View>
				</View>
			</View>
		</WrapperWithHeader>
	);
}
