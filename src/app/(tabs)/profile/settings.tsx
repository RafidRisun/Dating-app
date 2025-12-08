import {
	iconAboutUs,
	iconAccountSettings,
	iconHelp,
	iconLanguageSettings,
	iconLogout,
	iconNotificationSettings,
	iconPrivacySettings,
	iconRateUs,
	iconRightArrowGradient,
	iconShare,
	iconTheme,
} from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Alert,
	ScrollView,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Settings() {
	const router = useRouter();
	const [dateMode, setDateMode] = React.useState(false);
	const toggleDateModeSwitch = () =>
		setDateMode(previousState => !previousState);

	return (
		<WrapperWithHeader name="Settings">
			<ScrollView
				style={tw`w-full flex-1`}
				showsVerticalScrollIndicator={false}
			>
				<View style={tw`gap-4 py-4`}>
					<View
						style={tw`flex flex-col w-full p-4 gap-4 bg-white border-[0.2px] border-gray-400 rounded-lg`}
					>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
						>
							<View style={tw`w-13 h-13 flex items-center justify-center`}>
								<LinearGradient
									style={tw`w-13 h-13 rounded-full absolute inset-0`}
									colors={['#05C3DD', '#B14EFF']}
								/>
								<Image
									style={tw`w-12 h-12 rounded-full`}
									source={require('@/assets/images/hotGuy.png')}
								/>
							</View>
							<TouchableOpacity
								style={tw`flex flex-col gap-1 flex-1`}
								onPress={() => router.push('/(tabs)/profile/editProfile')}
							>
								<Text style={tw`text-sm font-poppins`}>Dem Clapperz</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Edit Profile
								</Text>
							</TouchableOpacity>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<View
							style={tw`flex flex-col gap-2 border-b-[0.2px] border-gray-400 pb-4`}
						>
							<Text style={tw`text-base font-poppins`}>Date Mode</Text>
							<View style={tw`flex flex-row justify-between items-center`}>
								<Text
									style={tw`text-sm font-poppins text-gray-600 flex-1 pr-1`}
								>
									Date Mode offers a dual-use experience focused on dating when
									enabled and event discovery when disabled.
								</Text>
								<Switch
									trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
									thumbColor={dateMode ? '#FFFFFF' : '#A0A0A0'}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleDateModeSwitch}
									value={dateMode}
								/>
							</View>
						</View>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() => router.push('/(tabs)/profile/settings/account')}
						>
							<SvgXml xml={iconAccountSettings} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>Account</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									View your account information
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() =>
								router.push('/(tabs)/profile/settings/privacyAndSecurity')
							}
						>
							<SvgXml xml={iconPrivacySettings} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>
									Privacy and Security
								</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Manage your privacy and security settings
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() => router.push('/(tabs)/profile/settings/theme')}
						>
							<SvgXml xml={iconTheme} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>Theme</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Select your preferred theme
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() =>
								router.push('/(tabs)/profile/settings/notifications')
							}
						>
							<SvgXml xml={iconNotificationSettings} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>Notifications</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Manage your notification preferences
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center`}
							onPress={() => router.push('/(tabs)/profile/settings/language')}
						>
							<SvgXml xml={iconLanguageSettings} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>Language</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Select your preferred language
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
					</View>
					<View
						style={tw`flex flex-col w-full p-4 gap-4 bg-white border-[0.2px] border-gray-400 rounded-lg`}
					>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center`}
						>
							<SvgXml xml={iconShare} />
							<View style={tw`flex flex-col gap-1 flex-1`}>
								<Text style={tw`text-sm font-poppins`}>
									Recommend to a friend
								</Text>
								<Text style={tw`text-xs font-poppins text-gray-600`}>
									Recommend to a friend and get a 1-month Soulflag Plus
									subscription, the first month free for both of you.
								</Text>
							</View>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
					</View>
					<View
						style={tw`flex flex-col w-full p-4 gap-4 bg-white border-[0.2px] border-gray-400 rounded-lg`}
					>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() => router.push('/(tabs)/profile/rateModal')}
						>
							<SvgXml xml={iconRateUs} />
							<Text style={tw`text-sm font-poppins`}>Rate Us</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
							onPress={() => router.push('/(tabs)/profile/settings/about')}
						>
							<SvgXml xml={iconAboutUs} />
							<Text style={tw`text-sm font-poppins`}>About</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center`}
							onPress={() => router.push('/(tabs)/profile/settings/help')}
						>
							<SvgXml xml={iconHelp} />
							<Text style={tw`text-sm font-poppins`}>Help</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
					</View>
					<View
						style={tw`flex flex-col w-full p-4 gap-4 bg-white border-[0.2px] border-gray-400 rounded-lg`}
					>
						<TouchableOpacity
							style={tw`flex flex-row gap-4 justify-between items-center`}
							onPress={() =>
								Alert.alert('Log out?', 'Are you sure you want to log out?', [
									{
										text: 'Cancel',
										style: 'cancel',
									},
									{
										text: 'Log Out',
										onPress: () => {
											// Add your log out logic here
											router.replace('/login');
										},
									},
								])
							}
						>
							<SvgXml xml={iconLogout} />
							<Text style={tw`text-sm font-poppins`}>Log Out</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</WrapperWithHeader>
	);
}
