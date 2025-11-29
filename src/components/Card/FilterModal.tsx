import { iconCloseSmall } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import {
	Dimensions,
	ScrollView,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import RangeSlider from 'react-native-range-slider-expo';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { SvgXml } from 'react-native-svg';

export default function FilterModal({
	visible,
	setVisible,
}: {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}) {
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

	const [fromValue, setFromValue] = useState(20);
	const [toValue, setToValue] = useState(36);

	return (
		<View
			style={[
				tw`absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center px-5`,
				{ zIndex: 1000 }, // Ensure modal has the highest zIndex
			]}
		>
			<View style={tw`w-full h-8/9 bg-white rounded-lg p-6 flex items-center`}>
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
							<Text style={tw`font-poppinsSemiBold text-base text-gray-600`}>
								Men
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
						>
							<Text style={tw`font-poppinsSemiBold text-base text-gray-600`}>
								Women
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
						>
							<Text style={tw`font-poppinsSemiBold text-base text-gray-600`}>
								Non-Binary
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-full items-center p-3 border border-gray-300 bg-gray-100 rounded-lg`}
						>
							<Text style={tw`font-poppinsSemiBold text-base text-gray-600`}>
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
								{fromValue} - {toValue}
							</Text>
							<Text style={tw`text-sm font-poppins text-gray-600`}>65+</Text>
						</View>
						<View style={tw`w-full items-center`}>
							<MultiSlider
								values={[fromValue, toValue]} // Set initial values for the range slider
								min={18} // Minimum value for the slider
								max={65} // Maximum value for the slider
								onValuesChange={values => {
									setFromValue(values[0]); // Update the lower bound
									setToValue(values[1]); // Update the upper bound
								}}
								sliderLength={Dimensions.get('window').width - 100} // Adjust slider length as needed
								selectedStyle={{ backgroundColor: '#05C3DD' }} // Style for the selected range
								unselectedStyle={{ backgroundColor: '#B0BEC5' }} // Style for the unselected range
								step={1} // Increment step for the slider
								markerStyle={{ backgroundColor: '#05C3DD' }} // Custom marker color
							/>
						</View>
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
						<View style={tw`flex flex-row w-full items-center justify-between`}>
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
						<View style={tw`flex flex-row w-full items-center justify-between`}>
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
						<View style={tw`flex flex-row w-full items-center justify-between`}>
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
					onPress={() => setVisible(false)}
				>
					<SvgXml xml={iconCloseSmall} />
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full px-4 py-2 bg-blue rounded-xl items-center mt-2`}
					onPress={() => setVisible(false)}
				>
					<Text style={tw`text-white font-poppinsSemiBold`}>Apply Filter</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
