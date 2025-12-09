import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Switch, Text, View } from 'react-native';

export default function Notifications() {
	const { theme } = useTheme();
	const [notifications, setNotifications] = React.useState(false);
	const toggleNotificationSwitch = () =>
		setNotifications(previousState => !previousState);
	return (
		<WrapperWithHeader name="Notifications">
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-2 mt-6`}
			>
				<View style={tw`flex flex-col gap-2`}>
					<Text
						style={tw`text-base font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Allow Notifications
					</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
							} flex-1 pr-1`}
						>
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
