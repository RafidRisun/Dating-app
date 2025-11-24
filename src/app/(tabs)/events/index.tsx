import { iconFilter, iconRightArrowBlue } from '@/assets/icon';
import EventFilter from '@/src/components/Events/EventFilter';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Dimensions,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth * 43) / 100;

export default function Events() {
	const router = useRouter();
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<SafeAreaView edges={['top']} style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex-1 bg-white`}>
				<View style={tw`flex flex-row w-full items-center justify-between p-4`}>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>Events</Text>
					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<SvgXml xml={iconFilter} />
					</TouchableOpacity>
				</View>
				<View style={tw`flex w-full items-center justify-center p-4`}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{categories.map(category => (
							<TouchableOpacity
								key={category.id}
								style={tw`flex items-center justify-center px-4 py-2 mr-3 ${
									selectedCategory.id === category.id
										? ''
										: 'bg-white border border-gray-400'
								} rounded-lg`}
								onPress={() => setSelectedCategory(category)}
							>
								{selectedCategory.id === category.id && (
									<LinearGradient
										colors={['#05C3DD', '#B14EFF']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										style={tw`absolute inset-0 rounded-lg`}
									/>
								)}
								<Text
									style={tw`font-poppins text-base text-center ${
										selectedCategory.id === category.id ? 'text-white' : ''
									}`}
								>
									{category.name}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
				<ScrollView style={tw`flex-1`}>
					<View style={tw`flex flex-row flex-wrap p-4 gap-4 justify-between`}>
						{events.map(event => (
							<TouchableOpacity
								key={event.id}
								style={tw`flex flex-col w-[${cardWidth}px] h-75 justify-between rounded-xl bg-white shadow-sm`}
								onPress={() =>
									router.push({
										pathname: '/(tabs)/events/detailPage',
										params: { eventId: event.id },
									})
								}
							>
								<View style={tw`flex flex-col gap-2`}>
									<Image
										source={event.image}
										style={tw`w-full h-30 rounded-xl`}
									/>
									<View style={tw`flex flex-col gap-2 px-2 pb-2`}>
										<Text style={tw`text-base font-poppinsSemiBold`}>
											{event.title}
										</Text>
										<Text style={tw`text-xs font-poppins text-gray-400`}>
											{event.day}, {event.date} · {event.address}
										</Text>
									</View>
								</View>
								<View style={tw`flex flex-col gap-2 p-2`}>
									<Text style={tw`text-sm font-poppinsBold text-green-500`}>
										{event.price}
									</Text>
									<View style={tw`flex flex-row items-center`}>
										{event.userImages.map((userImage, index) => (
											<Image
												key={index}
												source={userImage}
												style={tw`w-9 h-9 rounded-full border-2 border-white -ml-2 ${
													index === 0 ? 'ml-0' : ''
												}`}
											/>
										))}
										<View
											style={tw`w-9 h-9 rounded-full border-2 border-white -ml-2 bg-cyan-200 items-center justify-center`}
										>
											<Text
												style={tw`text-xs font-poppinsSemiBold text-cyan-800`}
											>
												{event.participants}
											</Text>
										</View>
										<SvgXml xml={iconRightArrowBlue} />
									</View>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				{modalVisible && (
					<EventFilter visible={modalVisible} setVisible={setModalVisible} />
				)}
			</View>
		</SafeAreaView>
	);
}

const categories = [
	{ id: '1', name: 'Popular' },
	{ id: '2', name: 'Concerts' },
	{ id: '3', name: 'Festivals' },
	{ id: '4', name: 'Sports' },
	{ id: '5', name: 'Exhibitions' },
	{ id: '6', name: 'Food' },
];

const events = [
	{
		id: '1',
		title: 'Summer Music Festival',
		day: 'Sat',
		date: 'Jun 15',
		address: 'Central Park, NYC',
		image: require('@/assets/images/onboard1.png'),
		price: '$50',
		userImages: [
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
		],
		participants: 120,
	},
	{
		id: '2',
		title: 'Food Truck Rally',
		day: 'Sun',
		date: 'Jun 16',
		address: 'Downtown LA',
		image: require('@/assets/images/onboard2.png'),
		price: 'Free',
		userImages: [
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
		],
		participants: 85,
	},
	{
		id: '3',
		title: 'Food Truck Rally',
		day: 'Sun',
		date: 'Jun 16',
		address: 'Downtown LA',
		image: require('@/assets/images/onboard3.png'),
		price: 'Free',
		userImages: [
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
		],
		participants: 85,
	},
	{
		id: '4',
		title: 'Food Truck Rally',
		day: 'Sun',
		date: 'Jun 16',
		address: 'Downtown LA',
		image: require('@/assets/images/onboard4.png'),
		price: 'Free',
		userImages: [
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
		],
		participants: 85,
	},
	{
		id: '5',
		title: 'Food Truck Rally',
		day: 'Sun',
		date: 'Jun 16',
		address: 'Downtown LA',
		image: require('@/assets/images/onboard1.png'),
		price: 'Free',
		userImages: [
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
			require('@/assets/images/hotGuy.png'),
		],
		participants: 85,
	},
];
