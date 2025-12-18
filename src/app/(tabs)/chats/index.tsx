import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Alert,
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
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat() {
	const { theme } = useTheme();
	const router = useRouter();
	const [status, setStatus] = React.useState<'All' | 'Unread'>('All');
	// manage messages in state so we can delete one
	const [messagesState, setMessagesState] = React.useState(messages);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView
				edges={['top']}
				style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}
			>
				<StatusBar barStyle="dark-content" />
				<View style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}>
					<View
						style={tw`flex flex-row w-full items-center justify-between p-4`}
					>
						<Text
							style={tw`font-poppinsSemiBold text-2xl ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							Messages
						</Text>
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
										theme === 'dark'
											? 'text-white'
											: status === 'All'
											? 'text-white'
											: 'text-black'
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
										theme === 'dark'
											? 'text-white'
											: status === 'Unread'
											? 'text-white'
											: 'text-black'
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
								<Text
									style={tw`font-poppinsSemiBold text-base w-full  ${
										theme === 'dark' ? 'text-white' : 'text-black'
									}`}
								>
									New Matches
								</Text>
								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={tw`gap-6`}
								>
									{matches.length === 0 && (
										<TouchableOpacity
											style={tw`flex flex-row items-center gap-4 p-4`}
											onPress={() => router.push('/(common)/plansModal')}
										>
											<Image
												source={require('@/assets/images/hotGuy.png')}
												style={tw`w-14 h-14 rounded-full`}
												contentFit="cover"
											/>
											<View style={tw`flex flex-col`}>
												<Text
													style={tw`text-sm font-poppinsBold ${
														theme === 'dark' ? 'text-white' : 'text-black'
													}`}
												>
													Be seen upto 10x
												</Text>
												<Text
													style={tw`text-xs font-poppins ${
														theme === 'dark' ? 'text-white' : 'text-gray-600'
													}`}
												>
													Be the first to stand out from the crowd
												</Text>
											</View>
										</TouchableOpacity>
									)}
									{matches.map(match => (
										<TouchableOpacity
											key={match.id}
											style={tw`flex flex-col items-center justify-center`}
											onPress={() =>
												router.push({
													pathname: '/(tabs)/chats/chat',
												})
											}
										>
											<Image
												source={match.image}
												style={tw`w-16 h-16 rounded-full`}
											/>
											<Text
												style={tw`text-center mt-2  ${
													theme === 'dark' ? 'text-white' : 'text-black'
												}`}
											>
												{match.name}
											</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							</View>
							<View style={tw`flex gap-4 w-full`}>
								<Text
									style={tw`font-poppinsSemiBold text-base w-full  ${
										theme === 'dark' ? 'text-white' : 'text-black'
									}`}
								>
									Messages
								</Text>
								{messagesState.length === 0 && (
									<View
										style={tw`w-full flex flex-col items-center justify-center gap-45 pt-12`}
									>
										<View
											style={tw`flex flex-col gap-4 items-center justify-center`}
										>
											<Image
												source={require('@/assets/images/DmGray.png')}
												style={tw`w-20 aspect-square`}
												contentFit="contain"
											/>
											<Text
												style={tw`text-xl text-gray-500 font-poppinsSemiBold`}
											>
												No messages yet
											</Text>
											<Text
												style={tw`text-base text-center text-gray-500 font-poppinsSemiBold`}
											>
												New matches are waiting for you! Browse profiles and
												start swiping now.
											</Text>
										</View>
										<TouchableOpacity
											style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
											onPress={() => router.replace('/(tabs)/swipe')}
										>
											<Text style={tw`text-white font-poppins text-lg`}>
												Browse Profiles
											</Text>
										</TouchableOpacity>
									</View>
								)}
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

type Match = {
	id: string;
	name: string;
	image: any;
};

const matches: Match[] = [
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

type Message = {
	id: string;
	name: string;
	image: any;
	lastMessage: string;
	timeAgo: string;
	read: boolean;
};

const messages: Message[] = [
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
	const { theme } = useTheme();
	const translateX = useSharedValue(0);
	const maxTranslate = -90; // width of delete button
	const touchBlocked = React.useRef(false);

	const setBlocked = (val: boolean) => {
		touchBlocked.current = val;
	};

	const clearBlockedDelayed = () => {
		// keep blocked for a short moment after gesture ends to avoid immediate taps
		setTimeout(() => {
			touchBlocked.current = false;
		}, 250);
	};

	const gesture = Gesture.Pan()
		// only activate after horizontal movement; fail when vertical movement is significant
		.activeOffsetX([-10, 10])
		.failOffsetY([-10, 10])
		.onStart(() => {
			// mark that we're interacting with the row
			runOnJS(setBlocked)(true);
		})
		.onUpdate(({ translationX }) => {
			// allow only left dragging up to maxTranslate
			if (translationX < 0) {
				translateX.value = Math.max(translationX, maxTranslate);
			}
		})
		.onEnd(({ translationX, velocityX }) => {
			if (translationX < maxTranslate / 2 || velocityX < -500) {
				translateX.value = withSpring(maxTranslate, { velocity: velocityX });
			} else {
				translateX.value = withSpring(0, { velocity: velocityX });
			}
			// clear the blocked flag shortly after gesture ends (on JS thread)
			runOnJS(clearBlockedDelayed)();
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
					onPress={() => {
						Alert.alert(
							'Delete Message',
							'Are you sure you want to delete this message?',
							[
								{
									text: 'Cancel',
									style: 'cancel',
								},
								{
									text: 'Delete',
									onPress: onDelete,
									style: 'destructive',
								},
							]
						);
					}}
				>
					<Text style={tw`text-white font-poppinsSemiBold`}>Delete</Text>
				</TouchableOpacity>
			</View>

			<GestureDetector gesture={gesture}>
				<Animated.View
					style={
						[
							tw`flex flex-row items-center p-4 bg-${
								theme === 'dark' ? 'dark' : 'white'
							} shadow rounded-lg gap-4`,
							animatedStyle,
						] as any
					}
				>
					<TouchableOpacity
						onPress={() => {
							if (touchBlocked.current) return;
							onOpenChat();
						}}
						style={tw`flex flex-row items-center flex-1`}
					>
						<Image source={message.image} style={tw`w-12 h-12 rounded-full`} />
						<View style={tw`flex-1 ml-3`}>
							<Text
								style={tw`${
									message.read ? 'font-poppinsSemiBold' : 'font-poppins'
								} text-base  ${theme === 'dark' ? 'text-white' : 'text-black'}`}
							>
								{message.name}
							</Text>
							<Text
								style={tw`${
									message.read ? 'font-poppinsSemiBold' : 'font-poppins'
								}  ${theme === 'dark' ? 'text-white' : 'text-black'}`}
							>
								{message.lastMessage}
							</Text>
						</View>
					</TouchableOpacity>
					<Text
						style={tw`${
							message.read ? 'font-poppinsSemiBold' : 'font-poppins'
						} text-sm  ${theme === 'dark' ? 'text-white' : 'text-black'}`}
					>
						{message.timeAgo}
					</Text>
				</Animated.View>
			</GestureDetector>
		</View>
	);
}
