import {
	iconCloseSmall,
	iconDownArrow,
	iconFilter,
	iconLocationSmall,
	iconReload,
	iconShareSmall,
	iconSuperLike,
	iconSwipeMessage,
	iconVerified,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import Slider from '@react-native-community/slider';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ScrollView,
	StatusBar,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Swipe() {
	const router = useRouter();
	const [filterModalVisible, setFilterModalVisible] = useState(false);
	const [ageRange, setAgeRange] = useState(25);
	const [verifiedProfile, setVerifiedProfile] = useState(false);
	const toggleVerifiedProfileSwitch = () =>
		setVerifiedProfile(previousState => !previousState);
	const [travelMode, setTravelMode] = useState(false);
	const toggleTravelModeSwitch = () =>
		setTravelMode(previousState => !previousState);
	const [likedProfilesOnly, setLikedProfilesOnly] = useState(false);
	const toggleLikedProfilesOnlySwitch = () =>
		setLikedProfilesOnly(previousState => !previousState);

	return (
		<SafeAreaView style={tw`flex-1 bg-white`}>
			<StatusBar barStyle="dark-content" />
			<View style={tw`flex-1 bg-white`}>
				<View style={tw`flex flex-row w-full items-center justify-between p-4`}>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>Soulflag</Text>
					<View style={tw`flex flex-row items-center gap-8`}>
						<TouchableOpacity>
							<SvgXml xml={iconReload} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setFilterModalVisible(true)}>
							<SvgXml xml={iconFilter} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex-1 w-full items-center justify-center px-4`}>
					{/* tinder card */}
					<View style={tw`w-full h-full`}>
						<TouchableOpacity style={tw`absolute top-4 right-4 z-10`}>
							<SvgXml xml={iconShareSmall} />
						</TouchableOpacity>
						<Image
							source={require('@/assets/images/hotGuy.png')}
							style={tw`w-full h-full rounded-3xl`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col absolute bottom-0 w-full p-4 gap-2`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<Text style={tw`text-white text-3xl font-poppinsSemiBold`}>
									Chad, 27
								</Text>
								<SvgXml xml={iconVerified} />
							</View>
							<View style={tw`flex flex-row items-center gap-2`}>
								<SvgXml xml={iconLocationSmall} />
								<Text style={tw`text-white text-sm font-poppins`}>
									2 miles away
								</Text>
							</View>
							<View style={tw`flex flex-row items-center justify-between mt-3`}>
								<TouchableOpacity
									style={tw`w-12 h-12 rounded-full bg-white items-center justify-center`}
								>
									<SvgXml xml={iconSwipeMessage} />
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`w-12 h-12 rounded-full bg-white items-center justify-center`}
								>
									<SvgXml xml={iconSuperLike} />
								</TouchableOpacity>
								<View
									style={tw`flex w-full items-center absolute bottom-[-2] `}
								>
									<TouchableOpacity
										style={tw`w-20 items-center`}
										onPress={() => router.push('/(tabs)/swipe/profile')}
									>
										<SvgXml xml={iconDownArrow} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			{filterModalVisible && (
				<View
					style={tw`absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center px-5`}
				>
					<View
						style={tw`w-full h-8/9 bg-white rounded-lg p-6 flex items-center`}
					>
						<Text style={tw`text-xl font-poppinsSemiBold mb-4`}>Filters</Text>
						<ScrollView
							style={tw`w-full`}
							contentContainerStyle={tw`gap-4`}
							showsVerticalScrollIndicator={false}
						>
							<Text style={tw`font-poppinsSemiBold text-gray-600 mb-4`}>
								Who would you like to date?
							</Text>
							<View style={tw`flex flex-col gap-2 w-full mb-4`}>
								<TouchableOpacity
									style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
								>
									<Text
										style={tw`font-poppinsSemiBold text-base text-gray-600`}
									>
										Men
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
								>
									<Text
										style={tw`font-poppinsSemiBold text-base text-gray-600`}
									>
										Women
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
								>
									<Text
										style={tw`font-poppinsSemiBold text-base text-gray-600`}
									>
										Non-Binary
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
								>
									<Text
										style={tw`font-poppinsSemiBold text-base text-gray-600`}
									>
										I&apos;m open to anyone
									</Text>
								</TouchableOpacity>
							</View>
							<Text style={tw`font-poppinsSemiBold text-gray-600 mb-4`}>
								Age Range
							</Text>
							<View style={tw`flex flex-col w-full`}>
								<View style={tw`flex flex-row items-center justify-between`}>
									<Text style={tw`text-sm font-poppins text-gray-600`}>18</Text>
									<Text style={tw`text-sm font-poppinsSemiBold text-gray-800`}>
										{ageRange}
									</Text>
									<Text style={tw`text-sm font-poppins text-gray-600`}>
										65+
									</Text>
								</View>
								<Slider
									style={{ width: '100%', height: 40 }}
									minimumValue={18}
									maximumValue={65}
									minimumTrackTintColor="#017ADF"
									maximumTrackTintColor="#B0BEC5"
									thumbTintColor="#017ADF"
									value={ageRange}
									onValueChange={value => setAgeRange(value)}
									step={1}
								/>
							</View>
							<View style={tw`flex flex-col gap-4 w-full mb-10`}>
								<Text style={tw`font-poppinsSemiBold text-gray-600 mb-4`}>
									City
								</Text>
								<RNPickerSelect
									placeholder={{ label: 'City', value: null }}
									onValueChange={value => console.log(value)}
									items={[
										{ label: 'Istanbul', value: 'istanbul' },
										{ label: 'Ankara', value: 'ankara' },
										{ label: 'Izmir', value: 'izmir' },
										{ label: 'New York', value: 'newyork' },
										{ label: 'Los Angeles', value: 'losangeles' },
										{ label: 'Chicago', value: 'chicago' },
									]}
								/>
								<Text style={tw`text-xs font-poppins text-gray-500`}>
									Travel Mode {'(multi-city)'} is a Premium feature
								</Text>
							</View>
							<View style={tw`flex flex-col gap-4 w-full mb-20`}>
								<Text style={tw`font-poppinsSemiBold text-gray-600`}>
									Premium Filters
								</Text>
								<View
									style={tw`flex flex-row w-full items-center justify-between`}
								>
									<Text style={tw`text-sm font-poppins text-gray-600`}>
										Verified profiles only
									</Text>
									<Switch
										trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
										thumbColor={verifiedProfile ? '#FFFFFF' : '#A0A0A0'}
										ios_backgroundColor="#3e3e3e"
										onValueChange={toggleVerifiedProfileSwitch}
										value={verifiedProfile}
									/>
								</View>
								<View
									style={tw`flex flex-row w-full items-center justify-between`}
								>
									<Text style={tw`text-sm font-poppins text-gray-600`}>
										Travel Mode
									</Text>
									<Switch
										trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
										thumbColor={travelMode ? '#FFFFFF' : '#A0A0A0'}
										ios_backgroundColor="#3e3e3e"
										onValueChange={toggleTravelModeSwitch}
										value={travelMode}
									/>
								</View>
								<View
									style={tw`flex flex-row w-full items-center justify-between`}
								>
									<Text style={tw`text-sm font-poppins text-gray-600`}>
										Only visible to profiles you liked
									</Text>
									<Switch
										trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
										thumbColor={likedProfilesOnly ? '#FFFFFF' : '#A0A0A0'}
										ios_backgroundColor="#3e3e3e"
										onValueChange={toggleLikedProfilesOnlySwitch}
										value={likedProfilesOnly}
									/>
								</View>
							</View>
						</ScrollView>
						<TouchableOpacity
							style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full absolute top-4 right-4`}
							onPress={() => setFilterModalVisible(false)}
						>
							<SvgXml xml={iconCloseSmall} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-full px-4 py-2 bg-blue rounded-xl items-center mt-2`}
							onPress={() => setFilterModalVisible(false)}
						>
							<Text style={tw`text-white font-poppinsSemiBold`}>
								Apply Filter
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
}

// const profiles = [
// 	{
// 		id: '1',
// 		name: 'John Doe',
// 		age: 28,
// 		image: require('@/assets/images/hotGuy.png'),
// 		bio: 'Loves hiking and outdoor adventures.',
// 	},
// 	{
// 		id: '2',
// 		name: 'Jane Smith',
// 		age: 25,
// 		image: require('@/assets/images/hotGuy.png'),
// 		bio: 'Avid reader and coffee enthusiast.',
// 	},
// 	{
// 		id: '3',
// 		name: 'Mike Johnson',
// 		age: 30,
// 		image: require('@/assets/images/hotGuy.png'),
// 		bio: 'Tech geek and gamer.',
// 	},
// ];
