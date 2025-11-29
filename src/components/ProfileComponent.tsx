import { iconLocationLarge } from '@/assets/icon';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function ProfileComponent() {
	const router = useRouter();
	return (
		<ScrollView style={tw`flex-1 p-0.5`} showsVerticalScrollIndicator={false}>
			{/* header */}
			<View
				style={tw`flex flex-col p-4 gap-2 shadow-md bg-white rounded-lg mt-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>ABOUT ME</Text>
				<Text style={tw`text-sm font-poppins text-gray-700`}>
					Just a creative soul looking for my next adventure. I love painting on
					weekends and exploring new hiking trails. Big believer in zodiac
					compatibility!
				</Text>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-4 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>PHOTOS</Text>
				<Image
					source={require('@/assets/images/hotGuy.png')}
					style={tw`w-full h-150`}
					contentFit="contain"
				/>
				<Image
					source={require('@/assets/images/hotGuy.png')}
					style={tw`w-full h-150`}
					contentFit="contain"
				/>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-2 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>HEIGHT</Text>
				<Text style={tw`text-sm font-poppins text-gray-700`}>
					180cm (5&apos;9&quot;)
				</Text>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-3 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>LOOKING FOR</Text>
				<View style={tw`flex flex-row gap-2`}>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>
							Something Casual
						</Text>
					</View>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>
							Some clapping
						</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-3 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>INTERESTS</Text>
				<View style={tw`flex flex-row gap-2`}>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>Hiking</Text>
					</View>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>Clapping</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-3 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>LIFESTYLE</Text>
				<View style={tw`flex flex-row gap-2`}>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>Smoker</Text>
					</View>
					<View
						style={tw`px-3 py-1 bg-gray-200 rounded-full items-center justify-center`}
					>
						<Text style={tw`text-sm font-poppins text-gray-700`}>Drinker</Text>
					</View>
				</View>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-2 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>EDUCATION</Text>
				<Text style={tw`text-sm font-poppins text-gray-700`}>
					Master&apos;s Degree on Bouncing Balls
				</Text>
			</View>
			<View
				style={tw`flex flex-col p-4 gap-2 shadow-md bg-white rounded-lg my-5`}
			>
				<Text style={tw`text-sm font-poppinsSemiBold`}>LOCATION</Text>
				<View style={tw`flex flex-row items-center gap-2`}>
					<SvgXml xml={iconLocationLarge} />
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-poppins`}>New York, NY</Text>
						<Text style={tw`text-sm font-poppins text-gray-700`}>
							2 miles away
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
