import { iconGrayBack } from '@/assets/icon';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

export default function Onboarding() {
	const router = useRouter();
	const [progress, setProgress] = React.useState(1);

	const translateX = useSharedValue(0);

	// JS function executed on the JS thread via runOnJS
	function handleSwipe(translationX: number) {
		if (translationX > 50) {
			setProgress(p => Math.max(1, p - 1));
		} else if (translationX < -50) {
			setProgress(p => Math.min(4, p + 1));
		}
	}

	const gesture = Gesture.Pan()
		.activeOffsetX([-20, 20]) // Activate after 20px horizontal movement
		.onEnd(({ translationX }) => {
			// call handleSwipe on the JS thread to avoid calling React state setters from a worklet
			runOnJS(handleSwipe)(translationX);
			translateX.value = withSpring(0); // Reset translation
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: translateX.value }],
	}));

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<GestureDetector gesture={gesture}>
				<PageWrapper>
					<StatusBar barStyle="dark-content" backgroundColor="transparent" />
					<View style={tw`flex-1 w-full items-center justify-start py-10`}>
						{progress === 1 && (
							<View style={tw`flex flex-col w-full flex-1 items-center gap-12`}>
								<Image
									source={require('../../../assets/images/onboard1.png')}
									style={tw`w-full h-60 rounded-2xl`}
									contentFit="cover"
								/>
								<Text style={tw`text-2xl font-semibold`}>
									Social Experiences are Here
								</Text>
								<Text style={tw`text-center text-lg font-poppins`}>
									Meet new people, share real moments, and start meaningful
									connections through experiences.
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-2 absolute bottom-5`}
								>
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={tw`w-6 h-2 rounded-full`}
									/>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
								</View>
							</View>
						)}
						{progress === 2 && (
							<View style={tw`flex flex-col w-full flex-1 items-center gap-12`}>
								<Image
									source={require('../../../assets/images/onboard2.png')}
									style={tw`w-full h-60 rounded-2xl`}
									contentFit="cover"
								/>
								<Text style={tw`text-2xl font-semibold`}>
									Whether to a Concert
								</Text>
								<Text style={tw`text-center text-lg font-poppins`}>
									Feel the rhythm, meet the vibe. Let music bring you closer.
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-2 absolute bottom-5`}
								>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={tw`w-6 h-2 rounded-full`}
									/>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
								</View>
							</View>
						)}
						{progress === 3 && (
							<View style={tw`flex flex-col w-full flex-1 items-center gap-12`}>
								<Image
									source={require('../../../assets/images/onboard3.png')}
									style={tw`w-full h-60 rounded-2xl`}
									contentFit="cover"
								/>
								<Text style={tw`text-2xl font-semibold`}>
									Whether to the Festival
								</Text>
								<Text style={tw`text-center text-lg font-poppins`}>
									Share the energy, live the moment, and find someone to dance
									it with.
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-2 absolute bottom-5`}
								>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={tw`w-6 h-2 rounded-full`}
									/>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
								</View>
							</View>
						)}
						{progress === 4 && (
							<View style={tw`flex flex-col w-full flex-1 items-center gap-12`}>
								<Image
									source={require('../../../assets/images/onboard4.png')}
									style={tw`w-full h-60 rounded-2xl`}
									contentFit="cover"
								/>
								<Text style={tw`text-2xl font-semibold`}>
									and More Experience
								</Text>
								<Text style={tw`text-center text-lg font-poppins`}>
									Every event could be the start of a new story — yours begins
									with Soulflag.
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-2 absolute bottom-5`}
								>
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<View style={tw`w-2 h-2 rounded-full bg-gray-300`} />
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
										style={tw`w-6 h-2 rounded-full`}
									/>
								</View>
							</View>
						)}
					</View>
					<View
						style={tw`flex flex-row items-center ${
							progress > 1 ? 'justify-between' : 'justify-end'
						} w-full px-5 mb-10 pt-5`}
					>
						{progress > 1 && (
							<TouchableOpacity
								style={tw`flex flex-row gap-2 px-4 py-2 items-center justify-center bg-gray-200 rounded-full`}
								onPress={() => {
									if (progress > 1) setProgress(progress - 1);
									else router.back();
								}}
							>
								<SvgXml xml={iconGrayBack} />
								<Text style={tw`text-gray-500 font-poppins text-lg`}>Back</Text>
							</TouchableOpacity>
						)}
						<TouchableOpacity
							style={tw`flex flex-row gap-2 px-6 py-2 items-center justify-center bg-blue rounded-full`}
							onPress={() => {
								if (progress < 4) setProgress(progress + 1);
								else router.replace('/(tabs)/swipe');
							}}
						>
							<Text style={tw`text-white font-poppins text-lg`}>Next</Text>
						</TouchableOpacity>
					</View>
				</PageWrapper>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}

const onboardingImages = [
	,
	require('../../../assets/images/onboard2.png'),
	require('../../../assets/images/onboard3.png'),
	require('../../../assets/images/onboard4.png'),
];
