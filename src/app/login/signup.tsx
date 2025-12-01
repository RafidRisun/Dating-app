import PageWrapper from '@/src/components/PageWrapper';
import AddPhotos from '@/src/components/SignUp/AddPhotos';
import Bio from '@/src/components/SignUp/Bio';
import Birthday from '@/src/components/SignUp/Birthday';
import Education from '@/src/components/SignUp/Education';
import Email from '@/src/components/SignUp/Email';
import Gender from '@/src/components/SignUp/Gender';
import Height from '@/src/components/SignUp/Height';
import Interests from '@/src/components/SignUp/Interests';
import Lifestyle from '@/src/components/SignUp/Lifestyle';
import LookingFor from '@/src/components/SignUp/LookingFor';
import Name from '@/src/components/SignUp/Name';
import OTP from '@/src/components/SignUp/OTP';
import PhoneNumber from '@/src/components/SignUp/PhoneNumber';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function Signup() {
	const router = useRouter();
	const [progress, setProgress] = useState(1);

	return (
		<PageWrapper>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View style={tw`flex w-full h-15 items-center justify-end mb-10`}>
				<View style={tw`flex w-full h-2 bg-gray-300 rounded-full mb-2`}>
					{/* Progress Bar Background */}
					<LinearGradient
						colors={['#05C3DD', '#B14EFF']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={tw`w-${progress}/13 h-2 rounded-full`}
					/>
					{/* Progress Bar Fill */}
				</View>
				{progress >= 7 && (
					<TouchableOpacity
						style={tw`absolute right-0 bottom-7 flex px-3 py-1 items-center justify-center bg-purple rounded-md`}
						onPress={() => {
							if (progress < 13) setProgress(progress + 1);
							else router.replace('/login/enableNotification');
						}}
					>
						<Text style={tw`text-white font-poppins text-sm`}>Skip</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={tw`flex-1 w-full justify-between`}>
				{progress === 1 && <PhoneNumber />}
				{progress === 2 && <OTP />}
				{progress === 3 && <Name />}
				{progress === 4 && <AddPhotos />}
				{progress === 5 && <Birthday />}
				{progress === 6 && <Gender />}
				{progress === 7 && <LookingFor />}
				{progress === 8 && <Interests />}
				{progress === 9 && <Height />}
				{progress === 10 && <Bio />}
				{progress === 11 && <Lifestyle />}
				{progress === 12 && <Education />}
				{progress === 13 && <Email />}
			</View>
			<TouchableOpacity
				style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
				onPress={() => {
					if (progress < 13) setProgress(progress + 1);
					else router.replace('/login/enableNotification');
				}}
			>
				<Text style={tw`text-white font-poppins text-lg`}>Save</Text>
			</TouchableOpacity>
		</PageWrapper>
	);
}
