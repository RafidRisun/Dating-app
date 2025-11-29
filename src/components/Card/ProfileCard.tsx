import {
	iconDownArrow,
	iconLocationSmall,
	iconSuperLike,
	iconSwipeMessage,
	iconVerified,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
	runOnJS,
	useAnimatedProps,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { SvgXml } from 'react-native-svg';
import ConfirmationModal from '../ConfirmationModal';

const { width: wWidth } = Dimensions.get('window');

// const SNAP_POINTS = [-wWidth, 0, wWidth];

// Wrap SvgXml with Animated
const AnimatedSvgXml = Animated.createAnimatedComponent(SvgXml);

export function ProfileCard({
	profile,
	index,
	onSwipe,
	style,
}: ProfileCardProps & { style?: any }) {
	const router = useRouter();

	const translateX = useSharedValue(0);
	const likeOpacity = useSharedValue(0);
	const unlikeOpacity = useSharedValue(0);

	const arrowSize = useSharedValue(20);

	const gesture = Gesture.Pan()
		.onUpdate(({ translationX, translationY }) => {
			// Disable horizontal translation if vertical scrolling is detected
			if (Math.abs(translationY) > Math.abs(translationX)) {
				translateX.value = 0;

				// Increase arrow size only for negative translateY (swiping down)
				if (translationY < 0) {
					arrowSize.value = Math.min(40, 20 + Math.abs(translationY) / 10);
				} else {
					arrowSize.value = 20; // Reset size for positive translateY
				}
				return;
			}

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
		.onEnd(({ velocityX, translationY, translationX }) => {
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

			// Navigate to profile on vertical swipe end only if translationY remained negative and horizontal swipe was minimal
			if (Math.abs(translationX) < 100 && translationY < -80) {
				runOnJS(router.push)('/(tabs)/swipe/profile');
			}
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

	const arrowAnimatedProps = useAnimatedProps(() => ({
		height: arrowSize.value,
		width: arrowSize.value,
	}));

	const [superLikeModal, setSuperLikeModal] = useState(false);

	const [dmModal, setDmModal] = useState(false);

	return (
		<GestureDetector gesture={gesture}>
			<Animated.View
				style={[
					tw`absolute w-full h-full rounded-3xl overflow-hidden`,
					animatedStyle,
					style, // Apply the passed style
					{ zIndex: 1 }, // Lowered zIndex to ensure modal appears above
				]}
			>
				<Image source={profile.image} style={tw`w-full h-full`} />
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

				<View style={tw`absolute bottom-0 w-full p-4`}>
					<View style={tw`flex-row items-center gap-2`}>
						<Text style={tw`text-white text-3xl font-poppinsSemiBold`}>
							{profile.name}, {profile.age}
						</Text>
						{profile.verified && <SvgXml xml={iconVerified} />}
					</View>

					<View style={tw`flex flex-row items-center gap-2`}>
						<SvgXml xml={iconLocationSmall} />
						<Text style={tw`text-white text-sm font-poppins`}>
							{profile.distance} miles away
						</Text>
					</View>

					<View style={tw`flex flex-row items-center justify-between mt-3`}>
						<TouchableOpacity
							style={tw`w-12 h-12 rounded-full bg-white items-center justify-center`}
							onPress={() => setDmModal(true)}
						>
							<SvgXml xml={iconSwipeMessage} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-12 h-12 rounded-full bg-white items-center justify-center`}
							onPress={() => setSuperLikeModal(true)}
						>
							<SvgXml xml={iconSuperLike} />
						</TouchableOpacity>
						<View style={tw`flex w-full items-center absolute bottom-[-2] `}>
							<TouchableOpacity
								style={tw`w-20 items-center`}
								onPress={() => router.push('/(tabs)/swipe/profile')}
							>
								<AnimatedSvgXml
									xml={iconDownArrow}
									animatedProps={arrowAnimatedProps}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{superLikeModal && (
					<ConfirmationModal
						icon="star"
						confirmationText="Get Favorite?"
						confirmationSubText="You're 5x more likely to get a match! Stand out from the crowd."
						onConfirm={() => router.push('/(tabs)/swipe/Modals/getFavorite')}
						onCancel={() => setSuperLikeModal(false)}
					/>
				)}
				{dmModal && (
					<ConfirmationModal
						icon="dm"
						confirmationText="Send a Direct Message?"
						confirmationSubText="You can start a private conversation with this user."
						onConfirm={() => router.push('/(tabs)/swipe/Modals/sendDM')}
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
}
