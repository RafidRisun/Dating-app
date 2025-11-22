import { iconLocked } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import {
	Dimensions,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth * 44) / 100;

export default function Likes() {
	const [index, setIndex] = React.useState(0);
	const pagerRef = useRef<PagerView>(null); // Properly type the PagerView ref
	const router = useRouter();

	const handlePageChange = (pageIndex: number) => {
		setIndex(pageIndex);
		pagerRef.current?.setPage(pageIndex); // Scroll to the selected page
	};

	return (
		<SafeAreaView edges={['top']} style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex-1 bg-white`}>
				<View style={tw`flex flex-row w-full items-center justify-start p-4`}>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>Likes</Text>
				</View>
				<View
					style={tw`flex flex-row w-full items-center border-b border-gray-200`}
				>
					<TouchableOpacity
						onPress={() => handlePageChange(0)}
						style={tw`flex-1`}
					>
						<View style={tw`w-full`}>
							<Text
								style={tw`w-full text-center py-3 font-poppinsSemiBold border-b-2 ${
									index === 0
										? 'text-blue border-blue'
										: 'text-gray-500 border-white'
								}`}
							>
								Likes {'(12)'}
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePageChange(1)}
						style={tw`flex-1`}
					>
						<View style={tw`w-full`}>
							<Text
								style={tw`w-full text-center py-3 font-poppinsSemiBold border-b-2 ${
									index === 1
										? 'text-purple border-purple'
										: 'text-gray-500 border-white'
								}`}
							>
								Sent {'(1200)'}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<PagerView
					ref={pagerRef} // Attach the reference
					style={tw`flex-1`}
					initialPage={0}
					scrollEnabled={true}
					pageMargin={0}
					onPageSelected={e => setIndex(e.nativeEvent.position)}
				>
					<View key="1" style={tw`flex-1 items-center`}>
						<ScrollView
							style={tw`flex-1 w-full`}
							showsVerticalScrollIndicator={false}
						>
							<View
								style={tw`flex flex-row flex-wrap p-4 gap-4 justify-between`}
							>
								{likes.map(like => (
									<TouchableOpacity
										key={like.id}
										style={tw`flex flex-col w-[${cardWidth}px] h-[${cardWidth}px] justify-between rounded-xl bg-white shadow-sm`}
									>
										<Image
											source={like.image}
											style={tw`w-full h-full rounded-xl`}
										/>
										{premium && (
											<Text
												style={tw`absolute bottom-2 left-4 text-white text-lg font-poppinsSemiBold`}
											>
												{like.name}, {like.age}
											</Text>
										)}
										{!premium && (
											<View
												style={tw`absolute inset-0 rounded-xl overflow-hidden flex items-center justify-center`}
											>
												<BlurView
													style={tw`absolute inset-0 rounded-xl`}
													intensity={210}
													tint="prominent"
													// experimentalBlurMethod="dimezisBlurView"
												/>
												<View
													style={tw`flex items-center justify-center gap-2`}
												>
													<SvgXml xml={iconLocked} />
													<Text
														style={tw`text-gray-600 text-center font-poppinsSemiBold`}
													>
														Upgrade to Premium to see who likes you
													</Text>
													<TouchableOpacity
														style={tw`flex p-2 items-center justify-center`}
													>
														<LinearGradient
															style={tw`absolute inset-0 rounded-xl`}
															colors={['#05C3DD', '#B14EFF']}
															start={{ x: 0, y: 0 }}
															end={{ x: 1, y: 0 }}
														/>
														<Text style={tw`text-white font-poppinsSemiBold`}>
															View Profile
														</Text>
													</TouchableOpacity>
												</View>
											</View>
										)}
									</TouchableOpacity>
								))}
							</View>
							<View style={tw`flex items-center px-12 py-4 mb-10`}>
								<TouchableOpacity
									style={tw`flex w-full items-center bg-blue p-3 rounded-full`}
								>
									<Text style={tw`text-white font-poppinsSemiBold`}>
										See who liked you{' '}
									</Text>
								</TouchableOpacity>
							</View>
						</ScrollView>
					</View>
					<View key="2" style={tw`flex-1 justify-center items-center`}>
						<ScrollView
							style={tw`flex-1 w-full`}
							showsVerticalScrollIndicator={false}
						>
							<View
								style={tw`flex flex-row flex-wrap p-4 gap-4 justify-between`}
							>
								{likes.map(like => (
									<TouchableOpacity
										key={like.id}
										style={tw`flex flex-col w-[${cardWidth}px] h-[${cardWidth}px] justify-between rounded-xl bg-white shadow-sm`}
									>
										<Image
											source={like.image}
											style={tw`w-full h-full rounded-xl`}
										/>
										<Text
											style={tw`absolute bottom-2 left-4 text-white text-lg font-poppinsSemiBold`}
										>
											{like.name}, {like.age}
										</Text>
									</TouchableOpacity>
								))}
							</View>
						</ScrollView>
					</View>
				</PagerView>
			</View>
		</SafeAreaView>
	);
}

const likes = [
	{
		id: '1',
		name: 'Alice',
		age: 25,
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '2',
		name: 'Bob',
		age: 28,
		image: require('@/assets/images/hotGuy.png'),
	},
	{
		id: '3',
		name: 'Cathy',
		age: 22,
		image: require('@/assets/images/hotgirl2.png'),
	},
	{
		id: '4',
		name: 'Alice',
		age: 25,
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '5',
		name: 'Bob',
		age: 28,
		image: require('@/assets/images/hotGuy.png'),
	},
	{
		id: '6',
		name: 'Cathy',
		age: 22,
		image: require('@/assets/images/hotgirl2.png'),
	},
	{
		id: '7',
		name: 'Alice',
		age: 25,
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '8',
		name: 'Bob',
		age: 28,
		image: require('@/assets/images/hotGuy.png'),
	},
	{
		id: '9',
		name: 'Cathy',
		age: 22,
		image: require('@/assets/images/hotgirl2.png'),
	},
];

const sent = [
	{
		id: '1',
		name: 'Alice',
		age: 25,
		image: require('@/assets/images/hotgirl1.png'),
	},
	{
		id: '2',
		name: 'Bob',
		age: 28,
		image: require('@/assets/images/hotGuy.png'),
	},
	{
		id: '3',
		name: 'Cathy',
		age: 22,
		image: require('@/assets/images/hotgirl2.png'),
	},
];

const premium = false;
