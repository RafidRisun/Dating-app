import {
	iconDownArrow,
	iconLike,
	iconLocationSmall,
	iconLocationSmallDark,
	iconNope,
	iconShareSmall,
	iconSuperLike,
	iconSwipeMessage,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
	Dimensions,
	ScrollView,
	Share,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { SvgXml } from 'react-native-svg';
import ConfirmationModal from '../ConfirmationModal';

const { width: wWidth } = Dimensions.get('window');

export function ProfileCard({
	profile,
	onSwipe,
	style,
	tab,
}: ProfileCardProps & { style?: any }) {
	const { theme } = useTheme();
	const router = useRouter();

	const translateX = useSharedValue(0);
	const likeOpacity = useSharedValue(0);
	const unlikeOpacity = useSharedValue(0);

	const arrowSize = useSharedValue(20);

	const gesture = Gesture.Pan()
		.activeOffsetX([-20, 20]) // Only activate after 20px horizontal movement
		.failOffsetY([-20, 20]) // Fail if vertical movement exceeds 20px
		.onUpdate(({ translationX, translationY }) => {
			translateX.value = translationX;

			// Adjust opacity based on pan direction
			if (translationX > 0) {
				likeOpacity.value = Math.min(1, translationX / 100);
				unlikeOpacity.value = 0;
			} else {
				unlikeOpacity.value = Math.min(1, -translationX / 100);
				likeOpacity.value = 0;
			}
		})
		.onEnd(({ velocityX }) => {
			const dest = snapPoint(translateX.value, velocityX, [
				-wWidth * 2,
				0,
				wWidth * 2,
			]);

			translateX.value = withSpring(dest, { velocity: velocityX }, () => {
				if (dest !== 0) {
					runOnJS(onSwipe)(profile.id); // Use runOnJS to call the onSwipe function
				}
			});
			likeOpacity.value = 0;
			unlikeOpacity.value = 0;
			arrowSize.value = withSpring(20); // Reset arrow size

			// // Navigate to profile on vertical swipe end only if translationY remained negative and horizontal swipe was minimal
			// if (Math.abs(translationX) < 100 && translationY < -80) {
			// 	//runOnJS(router.push)('/(tabs)/swipe/profile');
			// 	runOnJS(setBottomSheetVisible)(true);
			// }
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{ translateX: translateX.value },
			{ rotate: `${translateX.value / 20}deg` }, // Slight tilt based on horizontal translation
		],
	}));

	const likeStyle = useAnimatedStyle(() => ({
		opacity: likeOpacity.value,
	}));

	const unlikeStyle = useAnimatedStyle(() => ({
		opacity: unlikeOpacity.value,
	}));

	// const arrowAnimatedProps = useAnimatedProps(() => ({
	// 	height: arrowSize.value,
	// 	width: arrowSize.value,
	// }));

	const [superLikeModal, setSuperLikeModal] = useState(false);

	const [dmModal, setDmModal] = useState(false);

	const [blockModal, setBlockModal] = useState(false);

	const [viewHeight, setViewHeight] = useState(0);

	const handleLike = () => {
		translateX.value = withSpring(wWidth * 2, {}, () => {
			runOnJS(onSwipe)(profile.id);
		});
	};

	const handleDisLike = () => {
		translateX.value = withSpring(-wWidth * 2, {}, () => {
			runOnJS(onSwipe)(profile.id);
		});
	};

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View
				style={[
					tw`absolute w-full h-full rounded-3xl overflow-hidden`,
					animatedStyle,
					style, // Apply the passed style
					{ zIndex: 1 }, // Lowered zIndex to ensure modal appears above
				]}
				onLayout={event => {
					const { height } = event.nativeEvent.layout;
					setViewHeight(height); // Save the height to state
				}}
			>
				<ScrollView
					style={tw`flex-1 pb-4 ${theme === 'dark' ? 'bg-dark' : 'bg-white'}`}
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
				>
					<View style={{ width: '100%', height: viewHeight }}>
						<Image
							source={profile.image}
							style={tw`w-full h-full rounded-lg`}
							contentFit="cover"
						/>
						<View style={tw`absolute bottom-0 w-full p-4`}>
							<View style={tw`flex-row items-center gap-3`}>
								<Text style={tw`text-white text-3xl font-poppinsSemiBold`}>
									{profile.name}, {profile.age}
								</Text>
								{profile.verified && (
									<SvgXml xml={iconSuperLike} width={16} height={16} />
								)}
							</View>

							<View style={tw`flex flex-row items-center gap-2`}>
								<SvgXml xml={iconLocationSmall} />
								<Text style={tw`text-white text-sm font-poppins`}>
									{profile.distance} miles away
								</Text>
							</View>

							<View style={tw`flex flex-row items-center justify-between mt-3`}>
								<TouchableOpacity
									style={tw`w-12 h-12 rounded-full ${
										theme === 'dark' ? 'bg-dark' : 'bg-white'
									} items-center justify-center`}
									onPress={() => setDmModal(true)}
								>
									<SvgXml xml={iconSwipeMessage} />
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`w-12 h-12 rounded-full ${
										theme === 'dark' ? 'bg-dark' : 'bg-white'
									} items-center justify-center`}
									onPress={() => setSuperLikeModal(true)}
								>
									<SvgXml xml={iconSuperLike} />
								</TouchableOpacity>
								<View
									style={tw`flex w-full items-center absolute bottom-[-2] `}
								>
									<View style={tw`w-20 items-center`}>
										<SvgXml xml={iconDownArrow} width={20} height={20} />
									</View>
								</View>
							</View>
						</View>
					</View>
					{/* header */}
					<View
						style={tw`flex flex-col p-4 gap-2 shadow-md ${
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg mt-5 mx-1`}
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
							} `}
						>
							Just a creative soul looking for my next adventure. I love
							painting on weekends and exploring new hiking trails. Big believer
							in zodiac compatibility!
						</Text>
					</View>
					<Image
						source={require('@/assets/images/hotGuy.png')}
						style={tw`w-full h-150 my-4 rounded-lg`}
					/>
					<View
						style={tw`flex flex-col p-4 gap-2 shadow-md ${
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
									theme === 'dark' ? 'bg-lightDark' : 'bg-gray-200'
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
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
							theme === 'dark' ? 'bg-lightDark' : 'bg-white'
						} rounded-lg my-5 mx-1`}
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
					<View style={tw`flex flex-col gap-4 w-full py-6 mb-20`}>
						<View style={tw`flex w-full items-center justify-center`}>
							<TouchableOpacity
								style={tw`w-12 h-12 rounded-full ${
									theme === 'dark' ? 'bg-lightDark' : 'bg-white'
								} shadow-lg shadow-[#00B7DC] items-center justify-center`}
								onPress={() => setSuperLikeModal(true)}
							>
								<SvgXml xml={iconSuperLike} />
							</TouchableOpacity>
						</View>
						<View
							style={tw`flex flex-row w-full px-8 items-center justify-between`}
						>
							<TouchableOpacity
								style={tw`w-12 h-12 rounded-full ${
									theme === 'dark' ? 'bg-lightDark' : 'bg-white'
								} shadow-lg shadow-[#FF0000] items-center justify-center`}
								onPress={handleDisLike}
							>
								<SvgXml xml={iconNope} />
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-12 h-12 rounded-full ${
									theme === 'dark' ? 'bg-lightDark' : 'bg-white'
								} shadow-lg shadow-[#AC48FF] items-center justify-center`}
								onPress={handleLike}
							>
								<SvgXml xml={iconLike} />
							</TouchableOpacity>
						</View>
						<View
							style={tw`flex flex-col gap-5 items-center justify-center w-full absolute bottom-[-10]`}
						>
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
								onPress={() =>
									router.push(
										tab === 'swipe'
											? '/(tabs)/swipe/reportModal'
											: '/(tabs)/events/reportModal'
									)
								}
							>
								<Text style={tw`text-lg font-poppinsSemiBold text-red-500`}>
									Report
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity
					style={tw`absolute top-0 right-0 p-5`}
					onPress={async () => {
						try {
							await Share.share({
								message:
									'Check out this profile: https://example.com/profile/' +
									profile.id,
							});
						} catch (error) {
							console.error('Error sharing the link:', error);
						}
					}}
				>
					<SvgXml xml={iconShareSmall} width={20} height={20} />
				</TouchableOpacity>
				<Animated.Image
					source={require('@/assets/images/Like.png')}
					style={[
						tw`absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20`,
						likeStyle,
					]}
				/>
				<Animated.Image
					source={require('@/assets/images/Unlike.png')}
					style={[
						tw`absolute top-1/2 left-1/2 -ml-10 -mt-10 w-20 h-20`,
						unlikeStyle,
					]}
				/>

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
			</Animated.View>
		</GestureDetector>
	);
}

interface ProfileCardProps {
	profile: {
		id: string;
		name: string;
		age: number;
		image: any;
		verified: boolean;
		distance: number;
	};
	index: number;
	onSwipe: (profileId: string) => void;
	style?: any;
	setBottomSheetVisible: (visible: boolean) => void;
	tab: 'swipe' | 'events';
}
