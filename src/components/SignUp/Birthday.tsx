import tw from '@/src/lib/tailwind';
// import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View } from 'react-native';
import { DatePicker } from 'react-native-wheel-pick';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Birthday() {
	const [date, setDate] = useState(new Date());
	const [showAndroidPicker, setShowAndroidPicker] = useState(true);
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="When's your birthday?"
				subtitle="Your age will be public."
			/>
			<View style={tw`mt-25 items-center justify-center`}>
				{/* {Platform.OS === 'ios' ? (
					<DateTimePicker
						value={date}
						mode="date"
						display="spinner"
						textColor="black"
						onChange={(event, selectedDate) => {
							if (selectedDate) setDate(selectedDate);
						}}
					/>
				) : (
					<>
						<TouchableOpacity
							style={tw`px-4 py-3 bg-blue rounded-full`}
							onPress={() => setShowAndroidPicker(true)}
						>
							<Text style={tw`text-white font-poppinsSemiBold`}>
								Select Birth Date
							</Text>
						</TouchableOpacity>
						{showAndroidPicker && (
							<DateTimePicker
								value={date}
								mode="date"
								display="spinner"
								onChange={(event, selectedDate) => {
									if (selectedDate) setDate(selectedDate);
									// Close after selection or dismissal
									setShowAndroidPicker(false);
								}}
							/>
						)}
					</>
				)} */}
				<DatePicker
					style={{ backgroundColor: 'white', width: 340, height: 240 }}
					minimumDate={new Date('1960-01-01')}
					maximumDate={new Date()}
					onDateChange={(date: Date) => {
						console.log(date);
					}}
					textColor="black"
					selectTextColor="black"
					textSize={18}
				/>
			</View>
		</View>
	);
}
