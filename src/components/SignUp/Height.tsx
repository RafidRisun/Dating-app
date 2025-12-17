import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Height({
	height,
	setHeight,
}: {
	height: string;
	setHeight: (text: string) => void;
}) {
	const { theme } = useTheme();

	const [unit, setUnit] = useState<'cm' | 'ft'>('cm');
	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle title="Your Height?" subtitle="Add your height." />
			<View style={tw`mt-25 items-center justify-center`}>
				{unit === 'cm' ? (
					<Picker
						style={{
							backgroundColor: theme === 'dark' ? '#121212' : 'white',
							width: 300,
							height: 215,
						}}
						selectedValue={height}
						pickerData={heightsInCm}
						onValueChange={(newHeight: string) => {
							setHeight(newHeight);
							console.log(newHeight);
						}}
						textColor={theme === 'dark' ? 'white' : 'black'}
						selectTextColor={theme === 'dark' ? 'white' : 'black'}
					/>
				) : (
					<Picker
						style={{
							backgroundColor: theme === 'dark' ? '#121212' : 'white',
							width: 300,
							height: 215,
						}}
						selectedValue={height}
						pickerData={heightsInFeet}
						onValueChange={(newHeight: string) => {
							setHeight(newHeight);
							console.log(newHeight);
						}}
						textColor={theme === 'dark' ? 'white' : 'black'}
						selectTextColor={theme === 'dark' ? 'white' : 'black'}
					/>
				)}
			</View>
			<View style={tw`flex flex-row items-center justify-center gap-4 mt-5`}>
				<TouchableOpacity
					style={tw`flex items-center justify-center w-20 py-2 rounded-full ${
						unit === 'cm' ? 'bg-blue' : 'bg-gray-200'
					}`}
					onPress={() => setUnit('cm')}
				>
					<Text
						style={tw`font-poppinsSemiBold ${
							unit === 'cm' ? 'text-white' : 'text-gray-600'
						}`}
					>
						cm
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex items-center justify-center w-20 py-2 rounded-full ${
						unit === 'ft' ? 'bg-blue' : 'bg-gray-200'
					}`}
					onPress={() => setUnit('ft')}
				>
					<Text
						style={tw`font-poppinsSemiBold ${
							unit === 'ft' ? 'text-white' : 'text-gray-600'
						}`}
					>
						ft
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const heightsInFeet = [
	'4\'0"',
	'4\'1"',
	'4\'2"',
	'4\'3"',
	'4\'4"',
	'4\'5"',
	'4\'6"',
	'4\'7"',
	'4\'8"',
	'4\'9"',
	'4\'10"',
	'4\'11"',
	'5\'0"',
	'5\'1"',
	'5\'2"',
	'5\'3"',
	'5\'4"',
	'5\'5"',
	'5\'6"',
	'5\'7"',
	'5\'8"',
	'5\'9"',
	'5\'10"',
	'5\'11"',
	'6\'0"',
	'6\'1"',
	'6\'2"',
	'6\'3"',
	'6\'4"',
	'6\'5"',
	'6\'6"',
	'6\'7"',
	'6\'8"',
	'6\'9"',
	'6\'10"',
	'6\'11"',
	'7\'0"',
];

const heightsInCm = [
	'122',
	'124',
	'127',
	'130',
	'132',
	'135',
	'137',
	'140',
	'142',
	'145',
	'147',
	'150',
	'152',
	'155',
	'157',
	'160',
	'163',
	'165',
	'168',
	'170',
	'173',
	'175',
	'178',
	'180',
	'183',
	'185',
	'188',
	'191',
	'193',
	'196',
	'198',
	'201',
	'203',
	'206',
	'208',
	'211',
	'213',
];
