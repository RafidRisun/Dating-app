import {
	iconBack,
	iconCall,
	iconOptions,
	iconSendMessage,
	iconSynastry,
	iconVideoCall,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Chat() {
	const router = useRouter();
	const { chatId } = useLocalSearchParams();

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<KeyboardAvoidingView behavior="padding" style={tw`flex-1 bg-white pt-8`}>
				<StatusBar barStyle="dark-content" />
				{/* header */}
				<View
					style={tw`flex flex-row w-full items-center justify-between gap-4 p-4`}
				>
					<TouchableOpacity
						style={tw`self-start `}
						onPress={() => router.back()}
					>
						<SvgXml xml={iconBack} />
					</TouchableOpacity>
					<View style={tw`flex flex-row items-center gap-4 flex-1`}>
						<Image
							source={require('@/assets/images/hotgirl1.png')}
							style={tw`w-10 h-10 rounded-full`}
						/>
						<View style={tw`flex flex-col`}>
							<Text style={tw`font-poppinsSemiBold text-sm`}>Jane Doe</Text>
							<Text style={tw`text-xs font-poppinsSemiBold text-green-500`}>
								Online
							</Text>
						</View>
					</View>
					<View style={tw`flex flex-row items-center gap-6`}>
						<TouchableOpacity>
							<SvgXml xml={iconSynastry} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml xml={iconCall} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml xml={iconVideoCall} />
						</TouchableOpacity>
						<TouchableOpacity style={tw`w-4`}>
							<SvgXml xml={iconOptions} />
						</TouchableOpacity>
					</View>
				</View>
				{/* chat body */}
				<View style={tw`flex-1 justify-center items-center bg-gray-100`}>
					<ScrollView style={tw`flex-1 w-full px-4 py-2`}>
						{messages.map(message => (
							<View
								key={message.id}
								style={tw`max-w-3/4 mb-4 p-3 rounded-3xl ${
									message.sent
										? 'bg-gray-500 self-end rounded-tr-md'
										: 'bg-white self-start rounded-tl-md'
								}`}
							>
								<Text
									style={tw`text-base ${
										message.sent ? 'text-white' : 'text-gray-800'
									}`}
								>
									{message.text}
								</Text>
							</View>
						))}
					</ScrollView>
					{/* inputField */}
					<View style={tw`flex flex-row items-center px-4 py-1 bg-white`}>
						<TextInput
							placeholder="Type a message..."
							style={tw`flex-1 border border-gray-300 rounded-full px-4 py-2`}
						/>
						<TouchableOpacity style={tw`bg-blue-500 rounded-full px-4 py-2`}>
							<SvgXml xml={iconSendMessage} />
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

const messages = [
	{ id: 1, text: 'Hi there!', sent: true },
	{ id: 2, text: 'Hello! How are you?', sent: false },
	{ id: 3, text: 'I’m good, thanks! How about you?', sent: true },
	{ id: 4, text: 'Doing great, thanks for asking!', sent: false },
	{ id: 5, text: 'What are you up to today?', sent: false },
	{ id: 6, text: 'Just working on some projects. You?', sent: true },
	{ id: 7, text: 'Same here! Busy day.', sent: false },
	{ id: 8, text: 'Let’s catch up later!', sent: true },
	{ id: 9, text: 'Sure thing! Talk soon.', sent: false },
	{ id: 10, text: 'Bye for now!', sent: true },
	{ id: 11, text: 'Bye!', sent: false },
	{ id: 12, text: 'Have a great day!', sent: true },
	{ id: 13, text: 'You too!', sent: false },
	{ id: 14, text: 'See you later!', sent: true },
	{ id: 15, text: 'See you!', sent: false },
];
