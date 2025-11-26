import {
	iconDM,
	iconEdit,
	iconNotification,
	iconSettings,
	iconStandout,
	iconSuperLike,
} from '@/assets/icon';
import SubscriptionPackages from '@/src/components/SubscriptionPackages';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Profile() {
	const router = useRouter();
	return (
		<SafeAreaView
			edges={['top', 'left', 'right']}
			style={tw`flex-1 items-center justify-start bg-white p-2`}
		>
			<ScrollView
				nestedScrollEnabled={true}
				style={tw`w-full flex-1 p-2`}
				showsVerticalScrollIndicator={false}
			>
				<View
					style={tw`flex flex-row items-center w-full justify-end gap-6 mb-4`}
				>
					<TouchableOpacity>
						<SvgXml xml={iconNotification} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => router.push('/(tabs)/profile/settings')}
					>
						<SvgXml xml={iconSettings} />
					</TouchableOpacity>
				</View>
				<View style={tw`flex flex-row items-center gap-4 w-full`}>
					<View style={tw`w-18 h-18 flex items-center justify-center`}>
						<LinearGradient
							style={tw`w-18 h-18 rounded-full absolute inset-0`}
							colors={['#05C3DD', '#B14EFF']}
						/>
						<Image
							style={tw`w-16 h-16 rounded-full`}
							source={require('@/assets/images/hotGuy.png')}
						/>
					</View>
					<View style={tw`flex flex-col gap-3`}>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-xl font-poppins`}>Dem Clapperz, 23</Text>
							<SvgXml xml={iconSuperLike} height={20} width={20} />
						</View>
						<TouchableOpacity
							style={tw`flex flex-row items-center justify-center gap-2 w-44 py-1.5`}
							onPress={() => router.push('/(tabs)/profile/editProfile')}
						>
							<LinearGradient
								style={tw`absolute inset-0 rounded-full`}
								colors={['#05C3DD', '#B14EFF']}
								start={{ x: -1, y: -1 }}
								end={{ x: 1, y: 1 }}
							/>
							<SvgXml xml={iconEdit} />
							<Text style={tw`text-sm text-white font-poppinsSemiBold`}>
								Complete Profile
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={tw`flex flex-col items-center justify-center gap-4 w-full p-4 mt-6 bg-white shadow-md rounded-lg`}
				>
					<View style={tw`flex flex-col items-center gap-2`}>
						<Text style={tw`text-base font-poppinsSemiBold`}>
							Daily Reward Streak
						</Text>
						<Text style={tw`text-sm font-poppins text-gray-500`}>
							Visit 7 days in a row for a free Profile Boost!
						</Text>
					</View>
					<View
						style={tw`flex flex-row items-center justify-between w-full pb-2`}
					>
						{[...Array(7)].map((_, index) => (
							<View key={index}>
								{streak[`day${index + 1}` as keyof typeof streak] ? (
									<LinearGradient
										style={tw`w-10 h-10 rounded-full flex items-center justify-center`}
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: -0.5, y: -0.5 }}
										end={{ x: 1, y: 0.5 }}
									>
										<View style={tw`flex items-center justify-center`}>
											<Text
												style={tw`text-[10px] font-poppinsMedium text-white`}
											>
												Day {index + 1}
											</Text>
										</View>
									</LinearGradient>
								) : (
									<View
										style={tw`w-10 h-10 bg-white shadow rounded-full flex items-center justify-center`}
									>
										<Text style={tw`text-[10px] font-poppinsMedium`}>
											Day {index + 1}
										</Text>
									</View>
								)}
							</View>
						))}
					</View>
					<Text style={tw`text-center text-xs font-poppins text-gray-500`}>
						Keep it up! 3 more days to go. We will remind you before your streak
						resets.
					</Text>
				</View>
				<View style={tw`flex flex-row gap-4 mt-4`}>
					<TouchableOpacity
						style={tw`flex-1 py-4 bg-white shadow-md rounded-lg items-center justify-between h-30`}
					>
						<SvgXml xml={iconSuperLike} width={32} height={32} />
						<Text style={tw`text-sm font-poppinsSemiBold`}>0 Favorite</Text>
						<Text style={tw`text-xs font-poppinsSemiBold text-blue`}>
							GET MORE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex-1 py-4 bg-white shadow-md rounded-lg items-center justify-between h-30`}
					>
						<SvgXml xml={iconStandout} width={32} height={32} />
						<Text style={tw`text-sm font-poppinsSemiBold`}>0 Stand out</Text>
						<Text style={tw`text-xs font-poppinsSemiBold text-[#612B8C]`}>
							GET MORE
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex-1 py-4 bg-white shadow-md rounded-lg items-center justify-between h-30`}
					>
						<SvgXml xml={iconDM} width={32} height={32} />
						<Text style={tw`text-sm font-poppinsSemiBold`}>0 DM</Text>
						<Text style={tw`text-xs font-poppinsSemiBold text-blue`}>
							GET MORE
						</Text>
					</TouchableOpacity>
				</View>
				<SubscriptionPackages />
			</ScrollView>
		</SafeAreaView>
	);
}

const streak = {
	day1: true,
	day2: true,
	day3: true,
	day4: true,
	day5: false,
	day6: false,
	day7: false,
};
