import { iconFilter, iconReload } from '@/assets/icon';
import FilterModal from '@/src/components/Card/FilterModal';
import { ProfileCard } from '@/src/components/Card/ProfileCard';
import ConfirmationModal from '@/src/components/ConfirmationModal';
import tw from '@/src/lib/tailwind';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function SwipeScreen() {
	const router = useRouter();
	const [cards, setCards] = useState(profiles);

	const handleSwipe = (id: string) => {
		// Add a slight delay to ensure the animation completes before removing the card
		setTimeout(() => {
			setCards(prev => prev.filter(card => card.id !== id));
		}, 300); // Adjust the delay as needed to match the animation duration
	};

	const [filterModalVisible, setFilterModalVisible] = useState(false);
	//const [detailsModalVisible, setDetailsModalVisible] = useState(false);
	const [gobackModal, setGobackModal] = useState(false);

	const [dateEnabled, setDateEnabled] = useState(false);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaView style={tw`flex-1 bg-white`}>
				<StatusBar barStyle="dark-content" />
				<View style={tw`flex-1 bg-white`}>
					<View
						style={tw`flex flex-row w-full items-center justify-between p-4`}
					>
						<Text style={tw`font-poppinsSemiBold text-2xl`}>Soulflag</Text>
						<View style={tw`flex flex-row items-center gap-8`}>
							<TouchableOpacity onPress={() => setGobackModal(true)}>
								<SvgXml xml={iconReload} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => setFilterModalVisible(true)}>
								<SvgXml xml={iconFilter} />
							</TouchableOpacity>
						</View>
					</View>
					{/* Stack of cards */}
					<View style={tw`flex-1 items-center justify-center px-4`}>
						{cards.map((profile, index) => (
							<ProfileCard
								key={profile.id}
								profile={profile}
								index={index}
								onSwipe={handleSwipe}
								style={{ zIndex: cards.length - index }} // Ensure the top card is rendered above others
							/>
						))}
						{!dateEnabled && (
							<View
								style={tw`absolute inset-0 justify-center items-center z-50`}
							>
								<BlurView
									style={tw`absolute inset-0 rounded-xl`}
									intensity={120}
									tint="prominent"
									// experimentalBlurMethod="dimezisBlurView"
								/>
								<Text
									style={tw`text-2xl font-poppinsSemiBold text-center text-white px-14`}
								>
									To start scrolling, turn on date mode from settings.
								</Text>
								<TouchableOpacity
									style={tw`mt-25 bg-blue px-25 py-3 rounded-full`}
									onPress={() => setDateEnabled(true)}
								>
									<Text style={tw`font-poppins text-base text-white`}>
										Go to Settings
									</Text>
								</TouchableOpacity>
							</View>
						)}
					</View>
				</View>
				{filterModalVisible && (
					<FilterModal
						visible={filterModalVisible}
						setVisible={setFilterModalVisible}
					/>
				)}
				{/* {detailsModalVisible && <DetailsModal />} */}
				{gobackModal && (
					<ConfirmationModal
						icon="goBack"
						confirmationText="Go back to Jackson?"
						confirmationSubText="Go back to the last profile you passed."
						onConfirm={() => router.push('/(tabs)/swipe/Modals/goBack')}
						onCancel={() => setGobackModal(false)}
					/>
				)}
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}

const profiles = [
	{
		id: '1',
		name: 'Chad',
		age: 27,
		image: require('@/assets/images/hotGuy.png'),
		verified: true,
		distance: 5,
	},
	{
		id: '2',
		name: 'Alex',
		age: 30,
		image: require('@/assets/images/hotgirl1.png'),
		verified: false,
		distance: 10,
	},
	{
		id: '3',
		name: 'Jordan',
		age: 28,
		image: require('@/assets/images/hotgirl2.png'),
		verified: true,
		distance: 8,
	},
	{
		id: '4',
		name: 'Taylor',
		age: 26,
		image: require('@/assets/images/hotGuy.png'),
		verified: false,
		distance: 12,
	},
	{
		id: '5',
		name: 'Morgan',
		age: 29,
		image: require('@/assets/images/hotgirl1.png'),
		verified: true,
		distance: 7,
	},
	{
		id: '6',
		name: 'Riley',
		age: 31,
		image: require('@/assets/images/hotGuy.png'),
		verified: false,
		distance: 9,
	},
];
