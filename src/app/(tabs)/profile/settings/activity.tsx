import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Switch, Text, View } from 'react-native';

export default function Activity() {
	const [account, setAccount] = React.useState(false);
	const toggleAccountSwitch = () => setAccount(previousState => !previousState);

	const [sendNotification, setSendNotification] = React.useState(false);
	const toggleSendNotificationSwitch = () =>
		setSendNotification(previousState => !previousState);
	return (
		<WrapperWithHeader name="Activity">
			<View style={tw`w-full p-4 bg-white rounded-lg shadow-sm gap-2 mt-6`}>
				<View
					style={tw`flex flex-col gap-2 border-b-[0.2px] border-gray-400 pb-4`}
				>
					<Text style={tw`text-base font-poppins`}>Account</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins text-gray-600 flex-1 pr-1`}>
							View your account details.
						</Text>
						<Switch
							trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
							thumbColor={account ? '#FFFFFF' : '#A0A0A0'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleAccountSwitch}
							value={account}
						/>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2 py-4`}>
					<Text style={tw`text-base font-poppins`}>
						Send notifications to my matches
					</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text style={tw`text-sm font-poppins text-gray-600 flex-1 pr-1`}>
							When you start viewing an event, send notifications to your
							matches.
						</Text>
						<Switch
							trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
							thumbColor={sendNotification ? '#FFFFFF' : '#A0A0A0'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSendNotificationSwitch}
							value={sendNotification}
						/>
					</View>
				</View>
			</View>
		</WrapperWithHeader>
	);
}
