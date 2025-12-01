import { iconCloseSmall } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SendEvent() {
	const router = useRouter();
	const [selectedEvents, setSelectedEvents] = React.useState<number[]>([]);
	return (
		<View
			style={tw`flex-1 px-6 py-10 justify-center items-center bg-black bg-opacity-10`}
		>
			<View
				style={tw`w-full h-full bg-white rounded-lg p-4 justify-start items-center`}
			>
				<TouchableOpacity
					style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full absolute top-4 right-4`}
					onPress={() => router.back()}
				>
					<SvgXml xml={iconCloseSmall} />
				</TouchableOpacity>
				<Text style={tw`text-lg font-semibold mt-6`}>Suggest an Event</Text>
				<ScrollView style={tw`w-full py-4`} contentContainerStyle={tw`gap-4`}>
					{events.map(event => (
						<TouchableOpacity
							key={event.id}
							style={tw`flex flex-row w-full h-20 border border-gray-200 rounded-lg p-2 ${
								selectedEvents.includes(event.id) ? 'bg-blue' : 'bg-white'
							}`}
							onPress={() =>
								setSelectedEvents(prev =>
									prev.includes(event.id)
										? prev.filter(id => id !== event.id)
										: [...prev, event.id]
								)
							}
						>
							<Image
								source={event.image}
								style={tw`h-full aspect-square rounded-lg`}
								contentFit="cover"
							/>
							<View style={tw`flex flex-col items-start justify-start px-4`}>
								<Text
									style={tw`font-poppinsSemiBold text-sm ${
										selectedEvents.includes(event.id) ? 'text-white' : ''
									}`}
								>
									{event.title}
								</Text>
								<Text
									style={tw`text-xs text-gray-600 ${
										selectedEvents.includes(event.id) ? 'text-white' : ''
									}`}
								>
									{event.date} • {event.location}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
				<View style={tw`w-full flex gap-2 py-4 bg-white`}>
					<TouchableOpacity
						style={tw`w-full bg-blue rounded-lg p-3 items-center justify-center`}
						onPress={() => router.back()}
					>
						<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
							Send
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`w-full border border-blue rounded-lg p-3 items-center justify-center`}
						onPress={() => router.back()}
					>
						<Text style={tw`text-blue font-poppinsSemiBold text-sm`}>
							Cancel
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const events = [
	{
		id: 1,
		title: 'Art Expo 2024',
		date: 'Sat, Jun 15',
		location: 'Downtown Square',
		image: require('@/assets/images/onboard1.png'),
	},
	{
		id: 2,
		title: 'Live Jazz Night',
		date: 'Fri, Jun 21',
		location: 'City Jazz Club',
		image: require('@/assets/images/onboard2.png'),
	},
	{
		id: 3,
		title: 'Food Festival',
		date: 'Sun, Jun 30',
		location: 'Central Park',
		image: require('@/assets/images/onboard3.png'),
	},
	{
		id: 4,
		title: 'Tech Conference 2024',
		date: 'Mon, Jul 8',
		location: 'Convention Center',
		image: require('@/assets/images/onboard1.png'),
	},
];
