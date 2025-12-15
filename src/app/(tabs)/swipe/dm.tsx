import { iconBack, iconBackDark, iconSendMessage } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	FlatList,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Dm() {
	const { theme } = useTheme();
	const router = useRouter();

	const [dmCount, setDmCount] = React.useState(5);
	const [inputText, setInputText] = React.useState('');
	const [messages, setMessages] = React.useState<Message[]>([]);

	const [dmModal, setDmModal] = React.useState(false);

	const handleSend = () => {
		const newMessage: Message = {
			id: messages.length + 1,
			text: inputText,
			time: new Date().toLocaleTimeString(),
			sent: true,
		};

		if (dmCount === 0) {
			router.push('/(tabs)/swipe/Modals/sendDM');
			return;
		} else {
			setMessages(prevMessages => [...prevMessages, newMessage]);
			setDmCount(prevCount => Math.max(prevCount - 1, 0));
			setInputText('');
		}
	};

	const renderHeader = React.useCallback(
		() => (
			<View style={tw`w-full py-6`}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{Images.map(img => (
						<Image
							key={img.id}
							source={img.image}
							style={tw`w-50 aspect-square rounded-lg mr-4`}
							contentFit="cover"
						/>
					))}
				</ScrollView>
			</View>
		),
		[]
	);

	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}
		>
			<KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
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
							<SvgXml xml={theme === 'dark' ? iconBackDark : iconBack} />
						</TouchableOpacity>
						<View style={tw`flex-1 items-center `}>
							<Text
								style={tw`${theme === 'dark' ? 'text-white' : 'text-black'}`}
							>
								Jackson, 27
							</Text>
						</View>
						<View style={tw`flex flex-col items-end gap-1`}>
							<View
								style={tw`w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full`}
							>
								<Text
									style={tw`${theme === 'dark' ? 'text-white' : 'text-black'}`}
								>
									{dmCount}
								</Text>
							</View>
							{dmCount === 0 && (
								<LinearGradient
									colors={['#05C3DD', '#B14EFF']}
									style={tw`px-2 py-1 rounded-full`}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
								>
									<Text style={tw`text-xs text-white font-poppins`}>
										0 DM left
									</Text>
								</LinearGradient>
							)}
						</View>
					</View>

					{/* Chat Body */}
					<FlatList
						data={messages}
						ListHeaderComponent={renderHeader}
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
						<TextInput
							placeholder="Type a message..."
							style={tw`flex-1 border border-gray-300 rounded-full px-4 py-2 text-${
								theme === 'dark' ? 'white' : 'black'
							}`}
							value={inputText}
							onChangeText={setInputText}
							placeholderTextColor="#6B7280"
						/>
						<TouchableOpacity
							onPress={handleSend}
							disabled={inputText.trim() === ''}
						>
							<SvgXml xml={iconSendMessage} />
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const Images = [
	{ id: 2, image: require('@/assets/images/hotGuy.png') },
	{ id: 1, image: require('@/assets/images/hotGuy.png') },
	{ id: 3, image: require('@/assets/images/hotGuy.png') },
	{ id: 4, image: require('@/assets/images/hotGuy.png') },
	{ id: 5, image: require('@/assets/images/hotGuy.png') },
];

type Message = {
	id: number;
	text: string;
	time: string;
	sent: boolean;
};
