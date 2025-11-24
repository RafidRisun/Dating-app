import {
	iconAboutUs,
	iconAccountSettings,
	iconBack,
	iconHelp,
	iconLanguageSettings,
	iconNotificationSettings,
	iconPrivacySettings,
	iconRateUs,
	iconRightArrowGradient,
	iconShare,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	ScrollView,
	StatusBar,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Settings() {
	const router = useRouter();
	const [dateMode, setDateMode] = React.useState(false);
	const toggleDateModeSwitch = () =>
		setDateMode(previousState => !previousState);

	return (
		<ScrollView style={tw`w-full flex-1`}>
			<SafeAreaView
				edges={['top', 'left', 'right']}
				style={tw`flex-1 items-center justify-start bg-[#FDFDFD] p-5 gap-4`}
			>
				<StatusBar barStyle="dark-content" />
				{/* header */}
				<View style={tw`flex flex-row bg-white w-full items-center gap-4`}>
					<TouchableOpacity onPress={() => router.back()}>
						<SvgXml xml={iconBack} />
					</TouchableOpacity>
					<Text style={tw`self-center text-lg font-poppinsSemiBold`}>
						Settings
					</Text>
				</View>
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
						<View style={tw`flex flex-col gap-1 flex-1`}>
							<Text style={tw`text-sm font-poppins`}>Dem Clapperz</Text>
							<Text style={tw`text-xs font-poppins text-gray-600`}>
								Edit Profile
							</Text>
						</View>
						<SvgXml xml={iconRightArrowGradient} />
					</TouchableOpacity>
					<View
						style={tw`flex flex-col gap-2 border-b-[0.2px] border-gray-400 pb-4`}
					>
						<Text style={tw`text-base font-poppins`}>Date Mode</Text>
						<View style={tw`flex flex-row justify-between items-center`}>
							<Text style={tw`text-sm font-poppins text-gray-600 flex-1 pr-1`}>
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
					>
						<SvgXml xml={iconPrivacySettings} />
						<View style={tw`flex flex-col gap-1 flex-1`}>
							<Text style={tw`text-sm font-poppins`}>Privacy and Security</Text>
							<Text style={tw`text-xs font-poppins text-gray-600`}>
								Manage your privacy and security settings
							</Text>
						</View>
						<SvgXml xml={iconRightArrowGradient} />
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
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
					>
						<SvgXml xml={iconRateUs} />
						<Text style={tw`text-sm font-poppins`}>Rate Us</Text>
						<SvgXml xml={iconRightArrowGradient} />
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row gap-4 justify-between items-center border-b-[0.2px] border-gray-400 pb-4`}
					>
						<SvgXml xml={iconAboutUs} />
						<Text style={tw`text-sm font-poppins`}>About</Text>
						<SvgXml xml={iconRightArrowGradient} />
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row gap-4 justify-between items-center`}
					>
						<SvgXml xml={iconHelp} />
						<Text style={tw`text-sm font-poppins`}>Help</Text>
						<SvgXml xml={iconRightArrowGradient} />
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}
