import { iconGrayBack } from '@/assets/icon';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Onboarding() {
	const router = useRouter();
	const [progress, setProgress] = React.useState(1);

	return (
		<PageWrapper>
			<StatusBar barStyle="light-content" backgroundColor="transparent" />
			<View style={tw`flex-1 w-full items-center justify-center`}>
				<Image
					source={onboardingImages[progress - 1]}
					style={tw`w-full h-40 rounded-2xl`}
					contentFit="cover"
				/>
				<TouchableOpacity
					onPress={() => {
						setProgress(progress + 1);
					}}
				>
					<Text>asdasdasd</Text>
				</TouchableOpacity>
			</View>
			<View
				style={tw`flex flex-row items-center justify-between w-full px-5 mb-10 pt-5`}
			>
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
				<TouchableOpacity
					style={tw`flex flex-row gap-2 px-6 py-2 items-center justify-center bg-blue rounded-full`}
					onPress={() => {
						if (progress < 13) setProgress(progress + 1);
						else router.replace('/login/enableNotification');
					}}
				>
					<Text style={tw`text-white font-poppins text-lg`}>Next</Text>
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}

const onboardingImages = [
	require('../../../assets/images/onboard1.png'),
	require('../../../assets/images/onboard2.png'),
	require('../../../assets/images/onboard3.png'),
	require('../../../assets/images/onboard4.png'),
];
