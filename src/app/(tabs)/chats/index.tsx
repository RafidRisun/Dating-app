import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Chat() {
	const router = useRouter();
	return (
		<SafeAreaView edges={['top']} style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex-1 bg-white`}>
				<View style={tw`flex flex-row w-full items-center justify-start p-4`}>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>Messages</Text>
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
							{messages.map(message => (
								<TouchableOpacity
									key={message.id}
									style={tw`flex flex-row items-center p-4 bg-white shadow rounded-lg gap-4`}
									onPress={() =>
										router.push({
											pathname: '/(tabs)/chats/chat',
											params: { chatId: message.id },
										})
									}
								>
									<Image
										source={message.image}
										style={tw`w-12 h-12 rounded-full`}
									/>
									<View style={tw`flex-1`}>
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
									<Text
										style={tw`${
											message.read ? 'font-poppinsSemiBold' : 'font-poppins'
										} text-sm`}
									>
										{message.timeAgo}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
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
