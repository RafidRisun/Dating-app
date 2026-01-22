import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
// import { DatePicker } from 'react-native-wheel-pick';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Birthday({
	setAge,
}: {
	setAge: (age: number) => void;
}) {
	const { theme } = useTheme();
	// default date to 18 years ago so picker doesn't start with a too-recent date
	const [date, setDate] = useState(() => {
		const d = new Date();
		d.setFullYear(d.getFullYear() - 18);
		return d;
	});

	// on iOS we render the picker inline; on Android we show it via a button
	const [showPicker, setShowPicker] = useState(true);

	useEffect(() => {
		const age = new Date().getFullYear() - date.getFullYear();
		setAge(age);
	}, [date]);

	// compute maximum selectable date as "today minus 18 years"
	const maxSelectableDate = new Date();
	maxSelectableDate.setFullYear(maxSelectableDate.getFullYear() - 18);

	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="When's your birthday?"
				subtitle="Your age will be public."
			/>

			<View style={tw`mt-25 items-center justify-center w-full`}>
				{Platform.OS === 'android' && (
					<View style={tw`w-full items-center`}>
						<TouchableOpacity
							style={tw`w-full py-4 items-center border-2 border-gray-300 rounded-lg`}
							onPress={() => setShowPicker(true)}
						>
							<Text style={tw`text-lg font-poppinsSemiBold text-gray-500`}>
								{date.toLocaleDateString()}
							</Text>
						</TouchableOpacity>
					</View>
				)}

				{showPicker && (
					<DateTimePicker
						value={date}
						mode="date"
						maximumDate={maxSelectableDate}
						display={Platform.OS === 'ios' ? 'spinner' : 'default'}
						themeVariant="light"
						textColor="black"
						onChange={(event, selectedDate) => {
							if (selectedDate) {
								setDate(selectedDate);
							}
							if (Platform.OS === 'android') {
								setShowPicker(false);
							}
						}}
					/>
				)}
			</View>
		</View>
	);
}
