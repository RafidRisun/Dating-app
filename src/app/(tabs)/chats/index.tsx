import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat() {
	const router = useRouter();
	const [status, setStatus] = React.useState<'All' | 'Unread'>('All');
	// manage messages in state so we can delete one
	const [messagesState, setMessagesState] = React.useState(messages);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView edges={['top']} style={tw`flex-1 bg-white`}>
				<StatusBar barStyle="dark-content" />
				<View style={tw`flex-1 bg-white`}>
					<View
						style={tw`flex flex-row w-full items-center justify-between p-4`}
					>
						<Text style={tw`font-poppinsSemiBold text-2xl`}>Messages</Text>
						<View style={tw`flex flex-row items-center gap-2`}>
							<TouchableOpacity
								style={tw`px-4 py-2 ${
									status === 'All' ? '' : 'border border-gray-200 rounded-xl'
								}`}
								onPress={() => setStatus('All')}
							>
								{status === 'All' && (
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										style={tw`absolute inset-0 rounded-xl`}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
									/>
								)}
								<Text
									style={tw`text-xs font-poppinsSemiBold ${
										status === 'All' ? 'text-white' : ''
									}`}
								>
									All
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`px-4 py-2 ${
									status === 'Unread' ? '' : 'border border-gray-200 rounded-xl'
								}`}
								onPress={() => setStatus('Unread')}
							>
								{status === 'Unread' && (
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										style={tw`absolute inset-0 rounded-xl`}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 0 }}
									/>
								)}
								<Text
									style={tw`text-xs font-poppinsSemiBold ${
										status === 'Unread' ? 'text-white' : ''
									}`}
								>
									Unread
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<ScrollView>
						<View style={tw`flex w-full items-center justify-center p-4 gap-4`}>
							<View style={tw`flex gap-4 w-full`}>
								<Text style={tw`font-poppinsSemiBold text-base w-full`}>
									Matches
								</Text>
								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={tw`gap-6`}
								>
									{matches.map(match => (
										<View
											key={match.id}
											style={tw`flex flex-col items-center justify-center`}
										>
											<Image
												source={match.image}
												style={tw`w-16 h-16 rounded-full`}
											/>
											<Text style={tw`text-center mt-2`}>{match.name}</Text>
										</View>
									))}
								</ScrollView>
							</View>
							<View style={tw`flex gap-4 w-full`}>
								<Text style={tw`font-poppinsSemiBold text-base w-full`}>
									Messages
								</Text>
								{messagesState.map(message => (
									<MessageRow
										key={message.id}
										message={message}
										onOpenChat={() =>
											router.push({
												pathname: '/(tabs)/chats/chat',
												params: { chatId: message.id },
											})
										}
										onDelete={() =>
											setMessagesState(prev =>
												prev.filter(m => m.id !== message.id)
											)
										}
									/>
								))}
							</View>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}

const matches = [
	{
		id: '1',
		name: 'Alice',
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '2',
		name: 'Bob',
		image: require('@/assets/images/hotgirl2.png'),
	},
	{
		id: '3',
		name: 'Charlie',
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '4',
		name: 'Diana',
		image: require('@/assets/images/hotgirl2.png'),
	},
	{
		id: '5',
		name: 'Alice',
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '6',
		name: 'Bob',
		image: require('@/assets/images/hotgirl2.png'),
	},
	{
		id: '7',
		name: 'Charlie',
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '8',
		name: 'Diana',
		image: require('@/assets/images/hotgirl2.png'),
	},
];

const messages = [
	{
		id: '1',
		name: 'Alice',
		image: require('@/assets/images/hotgirl1.png'),
		lastMessage: 'Hey! How are you?',
		timeAgo: '2h',
		read: true,
	},
	{
		id: '2',
		name: 'Bob',
		image: require('@/assets/images/hotgirl2.png'),
		lastMessage: 'Wanna grab coffee?',
		timeAgo: '1d',
		read: false,
	},
	{
		id: '3',
		name: 'Charlie',
		image: require('@/assets/images/hotgirl1.png'),
		lastMessage: "Let's catch up soon!",
		timeAgo: '3d',
		read: true,
	},
	{
		id: '4',
		name: 'Diana',
		image: require('@/assets/images/hotgirl2.png'),
		lastMessage: 'Had a great time!',
		timeAgo: '5d',
		read: false,
	},
	{
		id: '5',
		name: 'Alice',
		image: require('@/assets/images/hotgirl1.png'),
		lastMessage: 'Hey! How are you?',
		timeAgo: '2h',
		read: true,
	},
	{
		id: '6',
		name: 'Bob',
		image: require('@/assets/images/hotgirl2.png'),
		lastMessage: 'Wanna grab coffee?',
		timeAgo: '1d',
		read: false,
	},
	{
		id: '7',
		name: 'Charlie',
		image: require('@/assets/images/hotgirl1.png'),
		lastMessage: "Let's catch up soon!",
		timeAgo: '3d',
		read: true,
	},
	{
		id: '8',
		name: 'Diana',
		image: require('@/assets/images/hotgirl2.png'),
		lastMessage: 'Had a great time!',
		timeAgo: '5d',
		read: false,
	},
];

// MessageRow component: draggable row that reveals a delete button when swiped left
function MessageRow({
	message,
	onOpenChat,
	onDelete,
}: {
	message: any;
	onOpenChat: () => void;
	onDelete: () => void;
}) {
	const translateX = useSharedValue(0);
	const maxTranslate = -90; // width of delete button

	const gesture = Gesture.Pan()
		.onUpdate(({ translationX }) => {
			// allow only left dragging up to maxTranslate
			translateX.value = Math.max(maxTranslate, Math.min(0, translationX));
		})
		.onEnd(({ translationX, velocityX }) => {
			if (translationX < maxTranslate / 2 || velocityX < -500) {
				translateX.value = withSpring(maxTranslate, { velocity: velocityX });
			} else {
				translateX.value = withSpring(0, { velocity: velocityX });
			}
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: translateX.value }],
	}));

	return (
		<View style={{ width: '100%', marginBottom: 8 }}>
			{/* Delete button behind the row */}
			<View
				style={tw`absolute right-1 top-0 bottom-0 w-22 items-center justify-center pr-4`}
			>
				<TouchableOpacity
					style={tw`w-20 h-full items-center justify-center bg-red-500 rounded-r-lg`}
					onPress={onDelete}
				>
					<Text style={tw`text-white font-poppinsSemiBold`}>Delete</Text>
				</TouchableOpacity>
			</View>

			<GestureDetector gesture={gesture}>
				<Animated.View
					style={
						[
							tw`flex flex-row items-center p-4 bg-white shadow rounded-lg gap-4`,
							animatedStyle,
						] as any
					}
				>
					<TouchableOpacity
						onPress={onOpenChat}
						style={tw`flex flex-row items-center flex-1`}
					>
						<Image source={message.image} style={tw`w-12 h-12 rounded-full`} />
						<View style={tw`flex-1 ml-3`}>
							<Text
								style={tw`${
									message.read ? 'font-poppinsSemiBold' : 'font-poppins'
								} text-base`}
							>
								{message.name}
							</Text>
							<Text
								style={tw`${
									message.read ? 'font-poppinsSemiBold' : 'font-poppins'
								}`}
							>
								{message.lastMessage}
							</Text>
						</View>
					</TouchableOpacity>
					<Text
						style={tw`${
							message.read ? 'font-poppinsSemiBold' : 'font-poppins'
						} text-sm`}
					>
						{message.timeAgo}
					</Text>
				</Animated.View>
			</GestureDetector>
		</View>
	);
}
