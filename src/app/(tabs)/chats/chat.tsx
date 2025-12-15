import {
	iconBack,
	iconBackDark,
	iconCall,
	iconEvents,
	iconOptions,
	iconSendMessage,
	iconSynastry,
	iconVideoCall,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	FlatList,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Chat() {
	const { theme } = useTheme();
	const router = useRouter();

	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}
		>
			<KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
				{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
				<View
					style={tw`flex-1 bg-${theme === 'dark' ? 'lightDark' : 'gray-100'}`}
				>
					{/* Header */}
					<View
						style={tw`flex flex-row bg-${
							theme === 'dark' ? 'dark' : 'white'
						} w-full items-center justify-between gap-4 p-4`}
					>
						<TouchableOpacity onPress={() => router.back()}>
							{theme === 'dark' ? (
								<SvgXml xml={iconBackDark} />
							) : (
								<SvgXml xml={iconBack} />
							)}
						</TouchableOpacity>
						<View style={tw`flex flex-row items-center gap-4 flex-1`}>
							<TouchableOpacity
								onPress={() => router.push('/(tabs)/chats/profile')}
							>
								<Image
									source={require('@/assets/images/hotgirl1.png')}
									style={tw`w-10 h-10 rounded-full`}
								/>
							</TouchableOpacity>
							<View>
								<Text
									style={tw`font-poppinsSemiBold text-sm ${
										theme === 'dark' ? 'text-white' : 'text-black'
									}`}
								>
									Jane Doe
								</Text>
								<Text style={tw`text-xs font-poppinsSemiBold text-green-500`}>
									Online
								</Text>
							</View>
						</View>
						<View style={tw`flex flex-row items-center gap-6`}>
							<TouchableOpacity
								onPress={() => router.push('/(tabs)/chats/synastryChart')}
							>
								<SvgXml xml={iconSynastry} />
							</TouchableOpacity>
							<TouchableOpacity>
								<SvgXml xml={iconCall} />
							</TouchableOpacity>
							<TouchableOpacity>
								<SvgXml xml={iconVideoCall} />
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => router.push('/(tabs)/chats/threeDots')}
								style={tw`px-2`}
							>
								<SvgXml xml={iconOptions} />
							</TouchableOpacity>
						</View>
					</View>

					{/* Chat Body */}
					<FlatList
						data={messages}
						renderItem={({ item }) => (
							<View
								style={tw`max-w-3/4 mb-4 p-3 rounded-3xl shadow-sm ${
									item.sent
										? 'bg-gray-500 self-end rounded-br-md'
										: 'bg-white self-start rounded-bl-md'
								}`}
							>
								<Text
									style={tw`text-base ${
										item.sent ? 'text-white' : 'text-gray-800'
									}`}
								>
									{item.text}
								</Text>
								<Text
									style={tw`ml-2 text-xs ${
										item.sent ? 'text-gray-200' : 'text-gray-500'
									} self-end`}
								>
									{item.time}
								</Text>
							</View>
						)}
						keyExtractor={item => item.id.toString()}
						style={tw`flex-1`}
						contentContainerStyle={tw`px-4 py-2`}
						showsVerticalScrollIndicator={false}
					/>

					{/* Input Field */}
					<View
						style={tw`flex flex-row items-center gap-4 px-4 py-2 bg-${
							theme === 'dark' ? 'dark' : 'white'
						}`}
					>
						<TouchableOpacity
							onPress={() => router.push('/(tabs)/chats/sendEvent')}
						>
							<SvgXml xml={iconEvents} />
						</TouchableOpacity>
						<TextInput
							placeholder="Type a message..."
							style={tw`flex-1 border border-gray-300 rounded-full px-4 py-2 ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
							placeholderTextColor="#6B7280"
						/>
						<TouchableOpacity>
							<SvgXml xml={iconSendMessage} />
						</TouchableOpacity>
					</View>
				</View>
				{/* </TouchableWithoutFeedback> */}
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const messages = [
	{ id: 1, text: 'Hi there!', time: '10:00 AM', sent: true },
	{ id: 2, text: 'Hello! How are you?', time: '10:01 AM', sent: false },
	{
		id: 3,
		text: 'I’m good, thanks! How about you?',
		time: '10:02 AM',
		sent: true,
	},
	{
		id: 4,
		text: 'Doing great, thanks for asking!',
		time: '10:03 AM',
		sent: false,
	},
	{ id: 5, text: 'What are you up to today?', time: '10:04 AM', sent: false },
	{
		id: 6,
		text: 'Just clapping some cheeks. Like gyatts and shi. You?',
		time: '10:05 AM',
		sent: true,
	},
	{ id: 7, text: 'Same here! Busy day.', time: '10:06 AM', sent: false },
	{ id: 8, text: 'Let’s catch up later!', time: '10:07 AM', sent: true },
	{ id: 9, text: 'Sure thing! Talk soon.', time: '10:08 AM', sent: false },
	{ id: 10, text: 'Bye for now!', time: '10:09 AM', sent: true },
	{ id: 11, text: 'Bye!', time: '10:10 AM', sent: false },
	{ id: 12, text: 'Have a great day!', time: '10:11 AM', sent: true },
	{ id: 13, text: 'You too!', time: '10:12 AM', sent: false },
	{ id: 14, text: 'See you later!', time: '10:13 AM', sent: true },
	{ id: 15, text: 'See you!', time: '10:14 AM', sent: false },
];
