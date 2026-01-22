import { iconCalendarBlack } from '@/assets/icon';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function Calendar({
	date,
	visible,
	setDate,
	setVisible,
}: {
	date: Date;
	visible: boolean;
	setDate: (date: Date) => void;
	setVisible: (visible: boolean) => void;
}) {
	return (
		<View>
			<TouchableOpacity
				style={tw`w-full p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
				onPress={() => setVisible(true)}
			>
				<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
					{date.toDateString()}
				</Text>
				<SvgXml xml={iconCalendarBlack} />
			</TouchableOpacity>
			<DateTimePicker
				value={date}
				mode="date"
				// maximumDate={maxSelectableDate}
				display="spinner"
				themeVariant="light"
				textColor="black"
				onChange={(event, selectedDate) => {
					if (selectedDate) {
						setDate(selectedDate);
					}
				}}
			/>
		</View>
	);
}
