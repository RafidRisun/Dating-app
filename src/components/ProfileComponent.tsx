import {
	iconLocationSmall,
	iconLocationSmallDark,
	iconSuperLike,
	iconSwipeMessage,
} from '@/assets/icon';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import { useTheme } from '../lib/ThemeContext';
import ConfirmationModal from './ConfirmationModal';

export default function ProfileComponent() {
	const router = useRouter();

	const { theme } = useTheme();
	const [blockModal, setBlockModal] = React.useState(false);
	const [dmModal, setDmModal] = React.useState(false);
	const [superLikeModal, setSuperLikeModal] = React.useState(false);
	return (
		<>
			<ScrollView
				style={tw`flex-1 pb-9 px-5 ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				}`}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
			>
				{/* header */}
				<View style={tw`flex w-full`}>
					<Image
						source={require('@/assets/images/hotGuy.png')}
						style={tw`w-full h-150 my-4 rounded-lg`}
					/>
					<View style={tw`absolute bottom-4 w-full p-4`}>
						<View style={tw`flex-row items-center gap-3`}>
							<Text style={tw`text-white text-3xl font-poppinsSemiBold`}>
								Shreks, 24
							</Text>
							<SvgXml xml={iconSuperLike} width={16} height={16} />
						</View>

						<View style={tw`flex flex-row items-center gap-2`}>
							<SvgXml xml={iconLocationSmall} />
							<Text style={tw`text-white text-sm font-poppins`}>
								67 miles away
							</Text>
						</View>
					</View>
				</View>
				<View
					style={tw`flex flex-col p-4 gap-2 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg mt-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						ABOUT ME
					</Text>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-gray-700'
						}`}
					>
						Just a creative soul looking for my next adventure. I love painting
						on weekends and exploring new hiking trails. Big believer in zodiac
						compatibility!
					</Text>
				</View>
				<Image
					source={require('@/assets/images/hotGuy.png')}
					style={tw`w-full h-150 my-4 rounded-lg`}
				/>
				<View
					style={tw`flex flex-col p-4 gap-2 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						HEIGHT
					</Text>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-gray-700'
						}`}
					>
						180cm (5&apos;9&quot;)
					</Text>
				</View>
				<View
					style={tw`flex flex-col p-4 gap-3 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						LOOKING FOR
					</Text>
					<View style={tw`flex flex-row gap-2`}>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Something Casual
							</Text>
						</View>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Some clapping
							</Text>
						</View>
					</View>
				</View>
				<Image
					source={require('@/assets/images/hotGuy.png')}
					style={tw`w-full h-150 my-4 rounded-lg`}
				/>
				<View
					style={tw`flex flex-col p-4 gap-3 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						INTERESTS
					</Text>
					<View style={tw`flex flex-row gap-2`}>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Hiking
							</Text>
						</View>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Clapping
							</Text>
						</View>
					</View>
				</View>
				<View
					style={tw`flex flex-col p-4 gap-3 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						LIFESTYLE
					</Text>
					<View style={tw`flex flex-row gap-2`}>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Smoker
							</Text>
						</View>
						<View
							style={tw`px-3 py-1 ${
								theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
							} rounded-full items-center justify-center`}
						>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								Drinker
							</Text>
						</View>
					</View>
				</View>
				<View
					style={tw`flex flex-col p-4 gap-2 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						EDUCATION
					</Text>
					<Text
						style={tw`text-sm font-poppins ${
							theme === 'dark' ? 'text-white' : 'text-gray-700'
						}`}
					>
						Master&apos;s Degree on Bouncing Balls
					</Text>
				</View>
				<View
					style={tw`flex flex-col p-4 gap-2 shadow-md ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg my-5`}
				>
					<Text
						style={tw`text-sm font-poppinsSemiBold ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						LOCATION
					</Text>
					<View style={tw`flex flex-row items-center gap-2`}>
						{theme === 'dark' ? (
							<SvgXml xml={iconLocationSmallDark} />
						) : (
							<SvgXml xml={iconLocationSmall} />
						)}
						<View style={tw`flex flex-col`}>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-black'
								}`}
							>
								New York, NY
							</Text>
							<Text
								style={tw`text-sm font-poppins ${
									theme === 'dark' ? 'text-white' : 'text-gray-700'
								}`}
							>
								2 miles away
							</Text>
						</View>
					</View>
				</View>
				<View
					style={tw`flex flex-row w-full items-center justify-between px-12 py-8`}
				>
					<TouchableOpacity
						style={tw`w-12 h-12 rounded-full ${
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} shadow-lg shadow-[#00B7DC] items-center justify-center`}
						onPress={() => setSuperLikeModal(true)}
					>
						<SvgXml xml={iconSuperLike} />
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`w-12 h-12 rounded-full ${
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} shadow-lg shadow-[#00B7DC] items-center justify-center`}
						onPress={() => setDmModal(true)}
					>
						<SvgXml xml={iconSwipeMessage} />
					</TouchableOpacity>
				</View>
				<View
					style={tw`flex flex-col gap-5 items-center justify-center w-full py-6`}
				>
					<TouchableOpacity onPress={() => setBlockModal(true)}>
						<Text style={tw`text-lg font-poppinsSemiBold text-red-800`}>
							Unlike
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setBlockModal(true)}>
						<Text
							style={tw`text-lg font-poppinsSemiBold ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							Block
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => router.push('/(tabs)/swipe/reportModal')}
					>
						<Text style={tw`text-lg font-poppinsSemiBold text-red-500`}>
							Report
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			{blockModal && (
				<ConfirmationModal
					icon="block"
					confirmationText="Block User?"
					confirmationSubText="You can unblock them later at the settings."
					onConfirm={() => {
						// Add your block user logic here
						setBlockModal(false);
					}}
					onCancel={() => setBlockModal(false)}
				/>
			)}
			{dmModal && (
				<ConfirmationModal
					icon="dm"
					confirmationText="Send a Direct Message?"
					confirmationSubText="You can start a private conversation with this user."
					onConfirm={() => {
						setDmModal(false);
						router.push('/(common)/dm');
					}}
					onCancel={() => setDmModal(false)}
				/>
			)}
			{superLikeModal && (
				<ConfirmationModal
					icon="star"
					confirmationText="Get Favorite?"
					confirmationSubText="You're 5x more likely to get a match! Stand out from the crowd."
					onConfirm={() => {
						setSuperLikeModal(false);
						router.push('/(common)/plansModal');
					}}
					onCancel={() => setSuperLikeModal(false)}
				/>
			)}
		</>
	);
}
