import {
	iconLike,
	iconLocationLarge,
	iconNope,
	iconShareLarge,
	iconSuperLike,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
	NativeScrollEvent,
	NativeSyntheticEvent,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Profile() {
	const router = useRouter();
	const scrollViewRef = useRef(null);
	const [isAtTop, setIsAtTop] = useState(false);
	const [canTriggerBack, setCanTriggerBack] = useState(false);

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const { contentOffset } = event.nativeEvent;
		if (contentOffset.y <= 0) {
			setIsAtTop(true);
		} else {
			setIsAtTop(false);
			setCanTriggerBack(false); // Reset the trigger flag when scrolling away from the top
		}
	};

	const handleScrollEnd = () => {
		if (isAtTop && canTriggerBack) {
			router.back();
		} else if (isAtTop) {
			setCanTriggerBack(true); // Allow back navigation on the next upward swipe
		}
	};

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
					Chad, 27
				</Text>
				<TouchableOpacity>
					<SvgXml xml={iconShareLarge} />
				</TouchableOpacity>
			</View>
			<ScrollView
				ref={scrollViewRef}
				style={tw`flex-1 px-4 pb-4`}
				showsVerticalScrollIndicator={false}
				onScroll={handleScroll}
				onMomentumScrollEnd={handleScrollEnd}
				scrollEventThrottle={16} // Ensures smooth scroll tracking
			>
				{/* header */}
				<View
					style={tw`flex flex-col p-4 gap-2 shadow-md bg-white rounded-lg mt-5`}
				>
					<Text style={tw`text-sm font-poppinsSemiBold`}>ABOUT ME</Text>
					<Text style={tw`text-sm font-poppins text-gray-700`}>
						Just a creative soul looking for my next adventure. I love painting
						on weekends and exploring new hiking trails. Big believer in zodiac
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
							<Text style={tw`text-sm font-poppins text-gray-700`}>
								Clapping
							</Text>
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
							<Text style={tw`text-sm font-poppins text-gray-700`}>
								Drinker
							</Text>
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
				<View style={tw`flex flex-col gap-4 w-full py-6 mb-20`}>
					<View style={tw`flex w-full items-center justify-center`}>
						<TouchableOpacity
							style={tw`w-12 h-12 rounded-full bg-white shadow-lg shadow-[#00B7DC] items-center justify-center`}
							onPress={() => router.back()}
						>
							<SvgXml xml={iconSuperLike} />
						</TouchableOpacity>
					</View>
					<View
						style={tw`flex flex-row w-full px-8 items-center justify-between`}
					>
						<TouchableOpacity
							style={tw`w-12 h-12 rounded-full bg-white shadow-lg shadow-[#FF0000] items-center justify-center`}
							onPress={() => router.back()}
						>
							<SvgXml xml={iconNope} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-12 h-12 rounded-full bg-white shadow-lg shadow-[#AC48FF] items-center justify-center`}
							onPress={() => router.back()}
						>
							<SvgXml xml={iconLike} />
						</TouchableOpacity>
					</View>
					<View
						style={tw`flex flex-col gap-5 items-center justify-center w-full absolute bottom-[-10]`}
					>
						<TouchableOpacity>
							<Text style={tw`text-lg font-poppinsSemiBold`}>Block</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={tw`text-lg font-poppinsSemiBold text-red-500`}>
								Report
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
