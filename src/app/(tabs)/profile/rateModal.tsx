import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

export default function RateModal() {
	const { theme } = useTheme();
	const [rating, setRating] = React.useState(0);
	const [opinion, setOpinion] = React.useState('');

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{/* <KeyboardAvoidingView behavior="padding"> */}
			<View
				style={tw`w-full ${
					theme === 'dark' ? 'bg-dark' : 'bg-white'
				} rounded-t-3xl p-6`}
			>
				<Text
					style={tw`text-center text-lg font-poppinsSemiBold ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					Enjoying Soulflag?
				</Text>
				<Text
					style={tw`text-center text-sm font-poppins mt-4 ${
						theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
					}`}
				>
					Your feedback helps us improve the app and provide a better experience
					for you.
				</Text>
				<View style={tw`flex-row items-center justify-center gap-2 mt-6`}>
					{[1, 2, 3, 4, 5].map((star, index) => (
						<TouchableOpacity
							key={index}
							style={tw`w-12 h-12 items-center justify-center`}
							onPress={() => setRating(star)}
						>
							<LinearGradient
								colors={['#B14EFF', '#05C3DD']}
								style={tw`w-12 h-12 rounded-full`}
							/>
							<View
								style={tw`w-11 h-11 ${
									rating >= star ? 'bg-transparent' : 'bg-white'
								} rounded-full items-center justify-center absolute`}
							>
								<Text
									style={tw`text-lg font-poppinsSemiBold ${
										rating >= star ? 'text-white' : 'text-black'
									}`}
								>
									{star}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
				<TextInput
					style={tw`w-full h-40 p-3 ${
						theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
					} border border-gray-300 rounded-lg mt-6 text-base font-poppins ${
						theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
					}`}
					placeholder="Tell us more about your experience..."
					multiline
					numberOfLines={6}
					textAlignVertical="top"
					value={opinion}
					onChangeText={setOpinion}
					placeholderTextColor="#6B7280"
				/>
				<TouchableOpacity
					style={tw`w-full bg-blue rounded-full py-3 mt-6 mb-2 items-center`}
					onPress={() => {}}
				>
					<Text style={tw`text-white text-base font-poppinsSemiBold`}>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
			{/* </KeyboardAvoidingView> */}
		</TouchableWithoutFeedback>
	);
}
