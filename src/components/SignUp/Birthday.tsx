import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Birthday() {
	const [date, setDate] = useState(new Date());
	return (
		<View>
			<TitleAndSubtitle
				title="When's your birthday?"
				subtitle="Your age will be public."
			/>
			<View style={tw`mt-25 items-center justify-center`}>
				<DatePicker date={date} onDateChange={setDate} mode="date" />
			</View>
		</View>
	);
}
