import {
	iconCalendarGradient,
	iconLocationPinGradient,
	iconShareLarge,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function DetailPage() {
	const router = useRouter();
	const { eventId } = useLocalSearchParams();
	console.log(eventId);

	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<SafeAreaView edges={['top']} style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex flex-row w-full items-center justify-between p-4`}>
				<TouchableOpacity style={tw`self-start `} onPress={() => router.back()}>
					<Image
						source={require('../../../../assets/images/backbutton.png')}
						style={tw`w-4 h-7`}
						contentFit="contain"
					/>
				</TouchableOpacity>
				<Text style={tw`self-center text-lg font-poppinsSemiBold`}>
					Summer Music Festival
				</Text>
				<TouchableOpacity>
					<SvgXml xml={iconShareLarge} />
				</TouchableOpacity>
			</View>
			<ScrollView style={tw`flex-1`}>
				<View style={tw`flex-1 gap-8 px-6 py-4`}>
					<Image
						source={require('@/assets/images/onboard1.png')}
						style={tw`w-full h-64 rounded-lg`}
						contentFit="cover"
					/>
					<Text style={tw`text-2xl font-poppinsSemiBold`}>
						Summer Music Festival
					</Text>
					<View style={tw`flex flex-col gap-3`}>
						<View style={tw`flex flex-row items-center gap-2`}>
							<SvgXml xml={iconCalendarGradient} />
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								Saturday, August 15, 2024 • 3:00 PM - 10:00 PM
							</Text>
						</View>
						<View style={tw`flex flex-row items-center gap-2`}>
							<SvgXml xml={iconLocationPinGradient} />
							<Text style={tw`text-sm font-poppins text-gray-600`}>
								123 Music Ave, Melody City
							</Text>
						</View>
					</View>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-lg font-poppinsSemiBold`}>
							Ticket Sales Points
						</Text>
						<Text style={tw`text-sm font-poppins text-gray-600`}>
							Click, compare and socialize
						</Text>
					</View>
					<View style={tw`flex flex-col gap-2`}>
						<TouchableOpacity
							style={tw`flex flex-row items-center justify-between px-8 py-4 gap-3 rounded-md bg-green-500`}
						>
							<Text
								style={tw`text-sm text-white font-poppinsSemiBold min-w-12`}
							>
								Bubilet
							</Text>
							<Text style={tw`text-sm text-white font-poppins flex-1`}>
								Price starting from 500 TL
							</Text>
							<Text style={tw`text-sm text-white font-poppinsSemiBold`}>
								Go
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row items-center justify-between px-8 py-4 gap-3 rounded-md bg-[#019CDE]`}
						>
							<Text
								style={tw`text-sm text-white font-poppinsSemiBold min-w-12`}
							>
								Biletix
							</Text>
							<Text style={tw`text-sm text-white font-poppins flex-1`}>
								Price starting from 500 TL
							</Text>
							<Text style={tw`text-sm text-white font-poppinsSemiBold`}>
								Go
							</Text>
						</TouchableOpacity>
						<Text style={tw`text-xs text-gray-500 font-poppins`}>
							Prices are subject to change
						</Text>
					</View>
					<Text style={tw`text-sm font-poppins text-gray-700 text-justify`}>
						{isExpanded ? (
							<>
								Join us for the biggest summer music festival of the year!
								Featuring top artists across multiple genres, food trucks, art
								installations, and an amazing atmosphere. Don&apos;t miss out on
								this unforgettable experience!{'        '}
								<TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
									<Text style={tw`text-sm font-poppins text-blue`}>
										Read Less
									</Text>
								</TouchableOpacity>
							</>
						) : (
							<>
								Join us for the biggest summer music festival of the year!
								Featuring top artists across multiple genres, food trucks, art
								installations, and an amazing atmosphere.....{'        '}
								<TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
									<Text style={tw`text-sm font-poppins text-blue`}>
										Read More
									</Text>
								</TouchableOpacity>
							</>
						)}
					</Text>
					<View style={tw`flex flex-col gap-3`}>
						<Text style={tw`text-lg font-poppinsSemiBold`}>
							People that wants to attend
						</Text>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center`}>
								{event.userImages.map((userImage, index) => (
									<Image
										key={index}
										source={userImage}
										style={tw`w-12 h-12 rounded-full border-2 border-white -ml-2 ${
											index === 0 ? 'ml-0' : ''
										}`}
									/>
								))}
								<View
									style={tw`w-12 h-12 rounded-full border-2 border-white -ml-2 bg-cyan-200 items-center justify-center`}
								>
									<Text style={tw`text-sm font-poppinsSemiBold text-cyan-800`}>
										{event.participants}
									</Text>
								</View>
							</View>
							<TouchableOpacity
								style={tw`flex items-center justify-center px-5 py-3 bg-blue rounded-xl`}
							>
								<Text style={tw`text-white font-poppinsSemiBold`}>
									Match with Event
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const event = {
	id: '1',
	title: 'Summer Music Festival',
	day: 'Sat',
	date: 'Jun 15',
	address: 'Central Park, NYC',
	image: require('@/assets/images/onboard1.png'),
	price: '$50',
	userImages: [
		require('@/assets/images/hotGuy.png'),
		require('@/assets/images/hotGuy.png'),
		require('@/assets/images/hotGuy.png'),
	],
	participants: 120,
};
