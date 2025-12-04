import { iconPlus, iconRightArrowGradient } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function EditProfileComponent({
	photos,
	handlePhotoUpload,
}: {
	photos: (string | null)[];
	handlePhotoUpload: (index: number) => void;
}) {
	const router = useRouter();
	return (
		<ScrollView style={tw`flex-1 w-full`} showsVerticalScrollIndicator={false}>
			<View style={tw`flex flex-col gap-4`}>
				<View
					style={tw`flex flex-row items-center justify-center flex-wrap mt-5 gap-4`}
				>
					{/* 9 Photo Upload Slots */}
					{photos.map((photo, index) => (
						<TouchableOpacity
							key={index}
							style={tw`w-25 h-25 rounded-lg bg-gray-100 items-center justify-center`}
							onPress={() => handlePhotoUpload(index)}
						>
							{photo ? (
								<Image
									source={{ uri: photo }}
									style={tw`w-full h-full rounded-lg`}
								/>
							) : (
								<SvgXml xml={iconPlus} />
							)}
						</TouchableOpacity>
					))}
				</View>
				<Text style={tw`text-sm font-poppinsSemiBold`}>
					Personal Information
				</Text>
				<View
					style={tw`flex flex-col gap-2 p-4 bg-white border-[0.5px] border-gray-200 rounded-lg`}
				>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push('/(tabs)/profile/personalInformation/nameSettings')
						}
					>
						<Text style={tw`text-base font-poppins`}>Name</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								Dem Clapperz
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push(
								'/(tabs)/profile/personalInformation/phoneNumberSettings'
							)
						}
					>
						<Text style={tw`text-base font-poppins`}>Number</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								+1 234 567 8901
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push('/(tabs)/profile/personalInformation/emailSettings')
						}
					>
						<Text style={tw`text-base font-poppins`}>Email</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								demclapperz@example.com
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<View
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
					>
						<Text style={tw`text-base font-poppins text-gray-500`}>
							Birthday
						</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-300`}>
								January 1, 2000
							</Text>
						</View>
					</View>
					<View
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
					>
						<Text style={tw`text-base font-poppins text-gray-500`}>Gender</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-300`}>Male</Text>
						</View>
					</View>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push('/(tabs)/profile/personalInformation/heightSettings')
						}
					>
						<Text style={tw`text-base font-poppins`}>Height</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								6&apos;0&quot;
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push('/(tabs)/profile/personalInformation/bioSettings')
						}
					>
						<Text style={tw`text-base font-poppins`}>Bio</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								{`Hello! I\'m Dem, a music lover and adventurer.`.length > 30
									? `Hello! I\'m Dem, a music lover and adventurer.`.slice(
											0,
											30
									  ) + '...'
									: `Hello! I\'m Dem, a music lover and adventurer.`}
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push(
								'/(tabs)/profile/personalInformation/lookingForSettings'
							)
						}
					>
						<Text style={tw`text-base font-poppins`}>Looking for</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								Casual Dates
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between border-b border-gray-200 pb-2`}
						onPress={() =>
							router.push(
								'/(tabs)/profile/personalInformation/interestsSettings'
							)
						}
					>
						<Text style={tw`text-base font-poppins`}>Interests</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								Music, Travel, Sports
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between`}
						onPress={() =>
							router.push(
								'/(tabs)/profile/personalInformation/educationSettings'
							)
						}
					>
						<Text style={tw`text-base font-poppins`}>Education</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								University of Clappers
							</Text>
							<SvgXml xml={iconRightArrowGradient} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}
