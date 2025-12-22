import { iconRightArrowGradient } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PrivacyAndSecurity() {
	const { theme } = useTheme();
	const router = useRouter();
	const [instantMatch, setInstantMatch] = useState(false);
	const toggleInstantMatchSwitch = () =>
		setInstantMatch(previousState => !previousState);

	const [matchRequest, setMatchRequest] = useState(false);
	const toggleMatchRequestSwitch = () =>
		setMatchRequest(previousState => !previousState);

	return (
		<WrapperWithHeader name="Privacy & Security">
			<View
				style={tw`w-full p-4 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-lg shadow-sm gap-3 mt-6`}
			>
				<View
					style={tw`flex flex-col gap-2 border-b-[0.2px] border-gray-400 pb-4`}
				>
					<Text
						style={tw`text-base font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Instant Match
					</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
							} flex-1 pr-1`}
						>
							Allow others to match with you instantly.
						</Text>
						<Switch
							trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
							thumbColor={instantMatch ? '#FFFFFF' : '#A0A0A0'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleInstantMatchSwitch}
							value={instantMatch}
						/>
					</View>
				</View>
				<View
					style={tw`flex flex-col gap-2 border-b-[0.2px] border-gray-400 pb-4`}
				>
					<Text
						style={tw`text-base font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Match Requests
					</Text>
					<View style={tw`flex flex-row justify-between items-center`}>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
							} flex-1 pr-1`}
						>
							Allow others to send you match requests.
						</Text>
						<Switch
							trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
							thumbColor={matchRequest ? '#FFFFFF' : '#A0A0A0'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleMatchRequestSwitch}
							value={matchRequest}
						/>
					</View>
				</View>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between p-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/settings/activity')}
				>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Activity
					</Text>
					<SvgXml xml={iconRightArrowGradient} />
				</TouchableOpacity>
			</View>
		</WrapperWithHeader>
	);
}
