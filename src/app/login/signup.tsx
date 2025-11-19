import { iconGrayBack, iconPlus } from '@/assets/icon';
import PageWrapper from '@/src/components/PageWrapper';
import TitleAndSubtitle from '@/src/components/Register/TitleAndSubtitle';
import tw from '@/src/lib/tailwind';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-date-picker';
import PhoneInput from 'react-native-phone-input';
import { SvgXml } from 'react-native-svg';
import { Picker } from 'react-native-wheel-pick';

export default function Signup() {
	const router = useRouter();

	const [progress, setProgress] = useState(1);
	//const [phoneNumber, setPhoneNumber] = useState('');
	const [code, setCode] = useState('');
	const [name, setName] = useState('');
	const [photos, setPhotos] = useState<(string | null)[]>([
		null,
		null,
		null,
		null,
		null,
		null,
	]);
	//const [dob, setDob] = useState<Date | null>(null);
	const [date, setDate] = useState(new Date());
	const [gender, setGender] = useState<string>('');
	const [lookingFor, setLookingFor] = useState<
		| 'A long-term relationship'
		| 'Fun, casual dates'
		| 'Marriage'
		| 'Friends'
		| 'Event Buddy'
		| ''
	>('');
	const [lookingForId, setLookingForId] = useState<string>('');
	const [interests, setInterests] = useState<string[]>([]);
	const [height, setHeight] = useState<string>('');
	const [bio, setBio] = useState<string>('');
	const [lifeStyle, setLifeStyle] = useState<{
		smoking: string | null;
		drinking: string | null;
	}>({
		smoking: null,
		drinking: null,
	});
	const [education, setEducation] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode>('US');
	const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState('');
	const phoneInput = useRef<PhoneInput>(null);
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

	const handlePhotoUpload = async (index: number) => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			const updatedPhotos = [...photos];
			updatedPhotos[index] = result.assets[0].uri;
			setPhotos(updatedPhotos);
		}
	};

	const [unit, setUnit] = useState<'cm' | 'ft'>('cm');

	return (
		<PageWrapper>
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View style={tw`flex w-full h-15 items-center justify-end mb-10`}>
				<View style={tw`flex w-full h-2 bg-gray-300 rounded-full mb-2`}>
					{/* Progress Bar Background */}
					<LinearGradient
						colors={['#05C3DD', '#B14EFF']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={tw`w-${progress}/13 h-2 rounded-full`}
					/>
					{/* Progress Bar Fill */}
				</View>
				{progress >= 7 && (
					<TouchableOpacity
						style={tw`absolute right-0 bottom-7 flex px-3 py-1 items-center justify-center bg-purple rounded-md`}
						onPress={() => {
							if (progress < 13) setProgress(progress + 1);
							else router.replace('/login/enableNotification');
						}}
					>
						<Text style={tw`text-white font-poppins text-sm`}>Skip</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={tw`flex-1 w-full justify-between`}>
				{progress === 1 && (
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
				)}
				{progress === 2 && (
					<View>
						<TitleAndSubtitle
							title="Enter the verification code"
							subtitle="We have sent a 6-digit verification code to your phone number."
						/>
						<TextInput
							style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
							placeholder="6-digit code"
							keyboardType="number-pad"
							value={code}
							onChangeText={text => setCode(text)}
						/>
					</View>
				)}
				{progress === 3 && (
					<View>
						<TitleAndSubtitle
							title="Your Name?"
							subtitle="This is how you will appear in Soulflag."
						/>
						<TextInput
							style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
							placeholder="Your name"
							keyboardType="default"
							value={name}
							onChangeText={text => setName(text)}
						/>
					</View>
				)}
				{progress === 4 && (
					<View>
						<TitleAndSubtitle
							title="Add your Photos"
							subtitle="Add at least 2 photos to your profile."
						/>
						<View
							style={tw`flex flex-row items-center justify-center flex-wrap mt-5 gap-8`}
						>
							{/* 6 Photo Upload Slots */}
							{photos.map((photo, index) => (
								<TouchableOpacity
									key={index}
									style={tw`w-25 h-25 rounded-lg bg-gray-100 items-center justify-center`}
									onPress={() => handlePhotoUpload(index)}
								>
									{photo ? (
										<Image
											source={{ uri: photo }}
											style={tw`w-full h-full rounded-lg`}
										/>
									) : (
										<SvgXml xml={iconPlus} />
									)}
								</TouchableOpacity>
							))}
						</View>
					</View>
				)}
				{progress === 5 && (
					<View>
						<TitleAndSubtitle
							title="When's your birthday?"
							subtitle="Your age will be public."
						/>
						<View style={tw`mt-25 items-center justify-center`}>
							<DatePicker date={date} onDateChange={setDate} mode="date" />
						</View>
					</View>
				)}
				{progress === 6 && (
					<View>
						<TitleAndSubtitle
							title="Your Gender?"
							subtitle="Select your gender"
						/>
						<View
							style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}
						>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Male
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Female
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Non-Binary
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Mechanic
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Other
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
				{progress === 7 && (
					<View>
						<TitleAndSubtitle
							title="What are you looking for?"
							subtitle="Select an option that best describes your intentions."
						/>
						<ScrollView style={tw`mt-5`}>
							<TouchableOpacity
								style={tw`w-full p-4 border ${
									lookingForId === '1' ? 'bg-blue' : 'bg-gray-100'
								} border-gray-300 rounded-lg mb-4`}
								onPress={() => {
									setLookingFor('A long-term relationship');
									setLookingForId('1');
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-lg ${
										lookingForId === '1' ? 'text-white' : 'text-gray-600'
									}`}
								>
									A long-term relationship
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border ${
									lookingForId === '2' ? 'bg-blue' : 'bg-gray-100'
								} border-gray-300 rounded-lg mb-4`}
								onPress={() => {
									setLookingFor('Fun, casual dates');
									setLookingForId('2');
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-lg ${
										lookingForId === '2' ? 'text-white' : 'text-gray-600'
									}`}
								>
									Fun, casual dates
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border ${
									lookingForId === '3' ? 'bg-blue' : 'bg-gray-100'
								} border-gray-300 rounded-lg mb-4`}
								onPress={() => {
									setLookingFor('Marriage');
									setLookingForId('3');
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-lg ${
										lookingForId === '3' ? 'text-white' : 'text-gray-600'
									}`}
								>
									Marriage
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border ${
									lookingForId === '4' ? 'bg-blue' : 'bg-gray-100'
								} border-gray-300 rounded-lg mb-4`}
								onPress={() => {
									setLookingFor('Friends');
									setLookingForId('4');
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-lg ${
										lookingForId === '4' ? 'text-white' : 'text-gray-600'
									}`}
								>
									Friends
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border ${
									lookingForId === '5' ? 'bg-blue' : 'bg-gray-100'
								} border-gray-300 rounded-lg mb-4`}
								onPress={() => {
									setLookingFor('Event Buddy');
									setLookingForId('5');
								}}
							>
								<Text
									style={tw`font-poppinsSemiBold text-lg ${
										lookingForId === '5' ? 'text-white' : 'text-gray-600'
									}`}
								>
									Event Buddy
								</Text>
							</TouchableOpacity>
						</ScrollView>
					</View>
				)}
				{progress === 8 && (
					<View style={tw`flex-1`}>
						<TitleAndSubtitle
							title="Your Interests?"
							subtitle="Pick a few things that you like."
						/>
						<ScrollView style={tw`mt-5`}>
							{interestsData.map((interest, index) => (
								<TouchableOpacity
									key={index}
									style={tw`w-full p-4 border border-gray-300 ${
										interests.includes(interest) ? 'bg-blue' : 'bg-gray-100'
									} rounded-lg mb-4`}
									onPress={() => {
										if (interests.includes(interest)) {
											// Remove the interest if it already exists
											setInterests(interests.filter(i => i !== interest));
										} else {
											// Add the interest if it doesn't exist
											setInterests([...interests, interest]);
										}
									}}
								>
									<Text
										style={tw`font-poppinsSemiBold text-lg ${
											interests.includes(interest)
												? 'text-white'
												: 'text-gray-600'
										}`}
									>
										{interest}
									</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				)}
				{progress === 9 && (
					<View>
						<TitleAndSubtitle
							title="Your Height?"
							subtitle="Add your height."
						/>
						<View style={tw`mt-25 items-center justify-center`}>
							{unit === 'cm' ? (
								<Picker
									style={{ backgroundColor: 'white', width: 300, height: 215 }}
									selectedValue={height}
									pickerData={heightsInCm}
									onValueChange={(newHeight: string) => {
										setHeight(newHeight);
										console.log(newHeight);
									}}
								/>
							) : (
								<Picker
									style={{ backgroundColor: 'white', width: 300, height: 215 }}
									selectedValue={height}
									pickerData={heightsInFeet}
									onValueChange={(newHeight: string) => {
										setHeight(newHeight);
										console.log(newHeight);
									}}
								/>
							)}
						</View>
						<View
							style={tw`flex flex-row items-center justify-center gap-4 mt-5`}
						>
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
				)}
				{progress === 10 && (
					<View>
						<TitleAndSubtitle
							title="What's your bio?"
							subtitle="Tell us a bit about yourself."
						/>
						<View style={tw`mt-5 items-center justify-center`}>
							<TextInput
								style={tw`bg-gray-100 rounded-lg p-4 w-full h-40 text-sm font-poppins`}
								placeholder="Who's up here to get clapped!"
								multiline
								textAlignVertical="top"
							/>
						</View>
					</View>
				)}
				{progress === 11 && (
					<ScrollView>
						<TitleAndSubtitle
							title="Your lifestyle?"
							subtitle="How often do you drink?"
						/>
						<View
							style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}
						>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Not for me
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									On special occasions
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Social Drinker
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Regular Drinker
								</Text>
							</TouchableOpacity>
						</View>
						<View style={{ height: 20 }} />
						<Text style={tw`font-poppins text-base`}>
							How often do you smoke?
						</Text>
						<View
							style={tw`mt-5 flex flex-col gap-4 items-center justify-center`}
						>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Non-smoker
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Occasional Smoker
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`w-full p-4 border border-gray-300 bg-gray-100 rounded-lg`}
							>
								<Text style={tw`font-poppinsSemiBold text-lg text-gray-600`}>
									Regular Smoker
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				)}
				{progress === 12 && (
					<View>
						<TitleAndSubtitle
							title="Your Education?"
							subtitle="Add your education details."
						/>
						<TextInput
							style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
							placeholder="e.g., Bachelor's in Computer Science"
							value={education}
							onChangeText={text => setEducation(text)}
						/>
					</View>
				)}
				{progress === 13 && (
					<View>
						<TitleAndSubtitle
							title="Stay in the loop?"
							subtitle="Receive marketing emails about campaigns and offers."
						/>
						<TextInput
							style={tw`border border-gray-300 rounded-lg bg-gray-100 px-4 py-3 mt-5 text-base font-poppins`}
							placeholder="e.g., your.email@example.com"
							value={email}
							onChangeText={text => setEmail(text)}
						/>
					</View>
				)}
			</View>
			<View
				style={tw`flex flex-row items-center justify-between w-full px-5 mb-10 pt-5`}
			>
				<TouchableOpacity
					style={tw`flex flex-row gap-2 px-4 py-2 items-center justify-center bg-gray-200 rounded-full`}
					onPress={() => {
						if (progress > 1) setProgress(progress - 1);
						else router.back();
					}}
				>
					<SvgXml xml={iconGrayBack} />
					<Text style={tw`text-gray-500 font-poppins text-lg`}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row gap-2 px-6 py-2 items-center justify-center bg-blue rounded-full`}
					onPress={() => {
						if (progress < 13) setProgress(progress + 1);
						else router.replace('/login/enableNotification');
					}}
				>
					<Text style={tw`text-white font-poppins text-lg`}>Next</Text>
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}

const interestsData = [
	'Concert',
	'Theater',
	'Stand-up Comedy',
	'Sports Events',
	'Art Exhibitions',
	'Travel',
	'Food & Dining',
	'Outdoor Activities',
	'Gaming',
	'Fitness & Wellness',
	'Music Festivals',
	'Workshops & Classes',
	'Networking Events',
	'Volunteering',
	'Book Clubs',
	'Tech Meetups',
	'Movie Nights',
	'Dancing',
	'Photography',
	'Crafting',
];

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
