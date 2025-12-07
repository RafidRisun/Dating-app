import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Gender() {
	const [selectedGender, setSelectedGender] = React.useState<string | null>(
		null
	);
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle title="Your Gender?" subtitle="Select your gender" />
			<View style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						selectedGender === 'Male' ? 'bg-blue' : ''
					} `}
					onPress={() => {
						if (selectedGender === 'Male') {
							setSelectedGender(null);
						} else {
							setSelectedGender('Male');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							selectedGender === 'Male' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Male
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						selectedGender === 'Female' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (selectedGender === 'Female') {
							setSelectedGender(null);
						} else {
							setSelectedGender('Female');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							selectedGender === 'Female' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Female
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						selectedGender === 'Non-Binary' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (selectedGender === 'Non-Binary') {
							setSelectedGender(null);
						} else {
							setSelectedGender('Non-Binary');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							selectedGender === 'Non-Binary' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Non-Binary
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg ${
						selectedGender === 'Other' ? 'bg-blue' : ''
					}`}
					onPress={() => {
						if (selectedGender === 'Other') {
							setSelectedGender(null);
						} else {
							setSelectedGender('Other');
						}
					}}
				>
					<Text
						style={tw`font-poppinsSemiBold text-lg ${
							selectedGender === 'Other' ? 'text-white' : 'text-gray-600'
						}`}
					>
						Other
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
