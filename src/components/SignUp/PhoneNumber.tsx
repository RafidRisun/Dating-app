import tw from '@/src/lib/tailwind';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function PhoneNumber() {
	const [phoneNumber, setPhoneNumber] = useState('');
	const phoneInput = useRef<PhoneInput>(null);

	const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode>('US');
	const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
	const handleCountrySelect = (country: any) => {
		setPhoneCountryCode(country.cca2);
		const newPhoneNumber = `+${country.callingCode[0]}`;
		setPhoneNumber(newPhoneNumber);
		if (phoneInput.current) {
			phoneInput.current.selectCountry(country.cca2.toLowerCase());
			phoneInput.current.setValue(newPhoneNumber);
		}
		setShowPhoneCountryPicker(false);
	};
	return (
		<View>
			<TitleAndSubtitle
				title="What's your phone number?"
				subtitle="We will send you a code to verify your number."
			/>
			{/* phone number here */}
			<PhoneInput
				ref={phoneInput}
				style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
				initialValue={phoneNumber}
				initialCountry={phoneCountryCode.toLowerCase()}
				onPressFlag={() => setShowPhoneCountryPicker(true)}
				onChangePhoneNumber={text => {
					setPhoneNumber(text);
				}}
			/>
			<CountryPicker
				countryCode={phoneCountryCode}
				visible={showPhoneCountryPicker}
				onSelect={handleCountrySelect}
				onClose={() => setShowPhoneCountryPicker(false)}
				withFlagButton={false}
				withFilter
			/>
		</View>
	);
}
