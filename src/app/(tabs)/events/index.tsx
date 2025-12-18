import { iconFilter, iconLocationXS, iconRightArrowBlue } from '@/assets/icon';
import CityFilterModal from '@/src/components/CityFilterModal';
import EventFilter from '@/src/components/Events/EventFilter';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
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
	const { theme } = useTheme();
	const router = useRouter();
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
	const [modalVisible, setModalVisible] = React.useState(false);
	const [cityModalVisible, setCityModalVisible] = React.useState(false);
	const [city, setCity] = React.useState('');

	const turkishCities: { label: string; value: string }[] = [
		{ label: 'Istanbul', value: 'istanbul' },
		{ label: 'Ankara', value: 'ankara' },
		{ label: 'Izmir', value: 'izmir' },
		{ label: 'Bursa', value: 'bursa' },
		{ label: 'Antalya', value: 'antalya' },
		{ label: 'Konya', value: 'konya' },
		{ label: 'Adana', value: 'adana' },
		{ label: 'Gaziantep', value: 'gaziantep' },
		{ label: 'Kayseri', value: 'kayseri' },
		{ label: 'Mersin', value: 'mersin' },
		{ label: 'Eskisehir', value: 'eskisehir' },
		{ label: 'Diyarbakir', value: 'diyarbakir' },
		{ label: 'Samsun', value: 'samsun' },
		{ label: 'Trabzon', value: 'trabzon' },
		{ label: 'Erzurum', value: 'erzurum' },
	];

	const cityLabelMap: Record<string, string> = turkishCities.reduce(
		(acc, c) => {
			acc[c.value] = c.label;
			return acc;
		},
		{} as Record<string, string>
	);

	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}
		>
			<StatusBar
				barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
			/>
			<View style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}>
				<View style={tw`flex flex-row w-full items-center justify-between p-4`}>
					<Text
						style={tw`font-poppinsSemiBold text-2xl ${
							theme === 'dark' ? 'text-white' : 'text-black'
						}`}
					>
						Events
					</Text>
					<View style={tw`flex flex-col items-end justify-center gap-2`}>
						<TouchableOpacity onPress={() => setModalVisible(true)}>
							<SvgXml xml={iconFilter} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row items-center gap-1`}
							onPress={() => setCityModalVisible(true)}
						>
							<SvgXml xml={iconLocationXS} />
							<Text style={tw`text-xs font-poppins text-gray-500`}>
								Sancam, Adana
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex w-full items-center justify-center p-4`}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{categories.map(category => (
							<TouchableOpacity
								key={category.id}
								style={tw`flex items-center justify-center px-4 py-2 mr-3 ${
									selectedCategory.id === category.id
										? ''
										: `bg-${
												theme === 'dark' ? 'lightDark' : 'white'
										  } border border-gray-400`
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
										selectedCategory.id === category.id
											? 'text-white'
											: `${theme === 'dark' ? 'text-white' : 'text-black'}`
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
						{events.length === 0 && (
							<View
								style={tw`w-full h-full flex flex-col items-center justify-center gap-30 pt-6`}
							>
								<View
									style={tw`flex flex-col gap-4 items-center justify-center`}
								>
									<Image
										source={require('@/assets/images/EventsGray.png')}
										style={tw`w-20 aspect-square`}
										contentFit="contain"
									/>
									<Text style={tw`text-xl text-gray-500 font-poppinsSemiBold`}>
										No Activites Nearby
									</Text>
									<Text
										style={tw`text-base text-center text-gray-500 font-poppinsSemiBold`}
									>
										Here you will see events in and around your city.
									</Text>
								</View>
								<View
									style={tw`flex flex-col gap-4 items-center justify-center w-full px-4`}
								>
									<Image
										style={tw`w-12 h-12 rounded-full`}
										source={require('@/assets/images/hotGuy.png')}
									/>
									<Text style={tw`text-lg text-gray-500 font-poppinsSemiBold`}>
										Check out other cities
									</Text>
									<Text
										style={tw`text-sm text-center text-gray-500 font-poppinsSemiBold`}
									>
										With Premium Access events and profiles in different cities
										and increase your chances of connecting with people.
									</Text>
									<TouchableOpacity
										style={tw`flex w-full gap-2 px-6 py-2 mb-6 items-center justify-center bg-blue rounded-full`}
										onPress={() => router.push('/(common)/plansModal')}
									>
										<Text style={tw`text-white font-poppins text-lg`}>
											Try Premium
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
						{events.map(event => (
							<TouchableOpacity
								key={event.id}
								style={tw`flex flex-col w-[${cardWidth}px] h-75 justify-between rounded-xl bg-${
									theme === 'dark' ? 'dark' : 'white'
								} shadow-sm`}
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
										<Text
											style={tw`text-base font-poppinsSemiBold ${
												theme === 'dark' ? 'text-white' : 'text-black'
											}`}
										>
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
									<TouchableOpacity
										style={tw`flex flex-row items-center`}
										onPress={() =>
											router.push({
												pathname: '/(tabs)/events/swipeScreen',
												params: { eventId: event.id },
											})
										}
									>
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
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				{modalVisible && (
					<EventFilter visible={modalVisible} setVisible={setModalVisible} />
				)}
			</View>
			{cityModalVisible && (
				<CityFilterModal
					setCityModalOpen={setCityModalVisible}
					turkishCities={turkishCities}
				/>
			)}
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

type Event = {
	id: string;
	title: string;
	day: string;
	date: string;
	address: string;
	image: any;
	price: string;
	userImages: any[];
	participants: number;
};

const events: Event[] = [
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
