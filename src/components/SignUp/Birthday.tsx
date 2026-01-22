import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
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
			<View style={tw`mt-25 items-center justify-center`}>
				{/* <DatePicker
					style={{
						backgroundColor: theme === 'dark' ? '#121212' : 'white',
						width: 340,
						height: 240,
					}}
					minimumDate={new Date('1960-01-01')}
					maximumDate={maxSelectableDate}
					onDateChange={(date: Date) => {
						setDate(date);
					}}
					textColor={theme === 'dark' ? 'white' : 'black'}
					selectTextColor={theme === 'dark' ? 'white' : 'black'}
					textSize={18}
					date={date}
				/> */}
				<DateTimePicker
					value={date}
					mode="date"
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
		</View>
	);
}
