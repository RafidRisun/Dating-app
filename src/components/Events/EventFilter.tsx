import React, { useState } from 'react';
import {
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { iconCalendarBlack, iconCloseSmall } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SvgXml } from 'react-native-svg';

export default function EventFilter({
	visible,
	setVisible,
}: {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}) {
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const [selectedDates, setSelectedDates] = useState<string[]>([]);

	const [fromDate, setFromDate] = useState(new Date());
	const [openFrom, setOpenFrom] = useState(false);

	const [toDate, setToDate] = useState(new Date());
	const [openTo, setOpenTo] = useState(false);

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
					<Text style={tw`font-poppinsSemiBold text-gray-600`}>Categories</Text>
					<View style={tw`flex flex-col gap-2 w-full mb-4`}>
						{categories.map((category, index) => (
							<TouchableOpacity
								key={index}
								style={tw`w-full p-3 border border-gray-300 ${
									selectedFilters.includes(category.id)
										? 'bg-blue'
										: 'bg-gray-100'
								} rounded-lg`}
								onPress={() => {
									if (selectedFilters.includes(category.id)) {
										// Remove the interest if it already exists
										setSelectedFilters(
											selectedFilters.filter(i => i !== category.id)
										);
									} else {
										// Add the interest if it doesn't exist
										setSelectedFilters([...selectedFilters, category.id]);
									}
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-xs ${
										selectedFilters.includes(category.id)
											? 'text-white'
											: 'text-gray-600'
									}`}
								>
									{category.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
					<Text style={tw`font-poppinsSemiBold text-gray-600`}>Date</Text>
					<View style={tw`flex flex-col gap-2 w-full mb-4`}>
						{dates.map((date, index) => (
							<TouchableOpacity
								key={index}
								style={tw`w-full p-3 border border-gray-300 ${
									selectedDates.includes(date.id) ? 'bg-blue' : 'bg-gray-100'
								} rounded-lg`}
								onPress={() => {
									if (selectedDates.includes(date.id)) {
										// Remove the interest if it already exists
										setSelectedDates(selectedDates.filter(i => i !== date.id));
									} else {
										// Add the interest if it doesn't exist
										setSelectedDates([...selectedDates, date.id]);
									}
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-xs ${
										selectedDates.includes(date.id)
											? 'text-white'
											: 'text-gray-600'
									}`}
								>
									{date.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
					<Text style={tw`font-poppinsSemiBold text-gray-600`}>
						Specific Date Range:
					</Text>
					{Platform.OS === 'ios' ? (
						<View style={tw`w-full bg-white rounded-lg`}>
							<DateTimePicker
								value={fromDate}
								mode="date"
								display="spinner"
								themeVariant="light"
								textColor="black"
								onChange={(event, selectedDate) => {
									if (selectedDate) setFromDate(selectedDate);
								}}
							/>
						</View>
					) : (
						<>
							<TouchableOpacity
								style={tw`w-full p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
								onPress={() => setOpenFrom(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{fromDate.toDateString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
							{openFrom && (
								<DateTimePicker
									value={fromDate}
									mode="date"
									display="default"
									onChange={(event, selectedDate) => {
										if (event.type === 'dismissed') {
											setOpenFrom(false);
											return;
										}
										if (selectedDate) {
											setFromDate(selectedDate);
										}
										setOpenFrom(false);
									}}
								/>
							)}
						</>
					)}
					<Text style={tw`font-poppinsSemiBold text-gray-600`}>To:</Text>
					{Platform.OS === 'ios' ? (
						<View style={tw`w-full bg-white rounded-lg mb-10`}>
							<DateTimePicker
								value={toDate}
								mode="date"
								display="spinner"
								themeVariant="light"
								textColor="black"
								onChange={(event, selectedDate) => {
									if (selectedDate) setToDate(selectedDate);
								}}
							/>
						</View>
					) : (
						<>
							<TouchableOpacity
								style={tw`w-full p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between mb-10`}
								onPress={() => setOpenTo(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{toDate.toDateString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
							{openTo && (
								<DateTimePicker
									value={toDate}
									mode="date"
									display="default"
									onChange={(event, selectedDate) => {
										if (event.type === 'dismissed') {
											setOpenTo(false);
											return;
										}
										if (selectedDate) {
											setToDate(selectedDate);
										}
										setOpenTo(false);
									}}
								/>
							)}
						</>
					)}
				</ScrollView>
				<TouchableOpacity
					style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full absolute top-4 right-4`}
					onPress={() => setVisible(false)}
				>
					<SvgXml xml={iconCloseSmall} />
				</TouchableOpacity>
				<View style={tw`flex flex-row w-full gap-4`}>
					<TouchableOpacity
						style={tw`flex-1 px-4 py-2 bg-gray-300 rounded-xl items-center mt-2`}
						onPress={() => setVisible(false)}
					>
						<Text style={tw`font-poppinsSemiBold text-gray-600`}>
							Clear Filter
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex-1 px-4 py-2 bg-blue rounded-xl items-center mt-2`}
						onPress={() => setVisible(false)}
					>
						<Text style={tw`text-white font-poppinsSemiBold`}>
							Apply Filter
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const categories = [
	{ id: '1', name: 'Music' },
	{ id: '2', name: 'Sports' },
	{ id: '3', name: 'Arts' },
	{ id: '4', name: 'Tech' },
	{ id: '5', name: 'Health' },
];

const dates = [
	{ id: '1', name: 'Today' },
	{ id: '2', name: 'This Week' },
	{ id: '3', name: 'This Month' },
	{ id: '4', name: 'This Year' },
];
