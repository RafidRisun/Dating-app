import tw from '@/src/lib/tailwind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
	Keyboard,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function AgeModal() {
	const [rating, setRating] = React.useState(0);
	const [opinion, setOpinion] = React.useState('');
	const router = useRouter();

	const { age } = useLocalSearchParams();

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={tw`w-full bg-white rounded-t-3xl p-6`}>
				<Text style={tw`text-center text-lg font-poppinsSemiBold`}>
					You are {age} years old
				</Text>
				<Text style={tw`text-center text-sm font-poppins mt-4`}>
					Age cannot be changed later.
				</Text>

				<View style={tw`flex flex-col gap-2 py-10`}>
					<TouchableOpacity
						style={tw`w-full bg-blue rounded-full py-3 mb-2 items-center`}
						onPress={() => {
							AsyncStorage.setItem('ageConfirmed', 'true');
							router.back();
						}}
					>
						<Text style={tw`text-white text-base font-poppinsSemiBold`}>
							Submit
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`w-full bg-gray-300 rounded-full py-3 mb-2 items-center`}
						onPress={() => router.back()}
					>
						<Text style={tw`text-gray-700 text-base font-poppinsSemiBold`}>
							Change Birth Date
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
