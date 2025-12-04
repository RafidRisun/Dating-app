import {
	iconBack,
	iconCalendarBlack,
	iconCloseSmall,
	iconSynastryGradient,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function SynastryChart() {
	const router = useRouter();
	const [userDate, setUserDate] = React.useState(new Date());
	const [openUserDateModal, setOpenUserDateModal] = React.useState(false);
	const [userTime, setUserTime] = React.useState(new Date());
	const [openUserTimeModal, setOpenUserTimeModal] = React.useState(false);
	const [userCity, setUserCity] = React.useState<string | null>(null);
	const [userCountry, setUserCountry] = React.useState<string | null>(null);
	const [userCityModalOpen, setUserCityModalOpen] = React.useState(false);
	const [userCountryModalOpen, setUserCountryModalOpen] = React.useState(false);

	const [matchName, setMatchName] = React.useState('');
	const [matchDate, setMatchDate] = React.useState(new Date());
	const [openMatchDateModal, setOpenMatchDateModal] = React.useState(false);
	const [matchTime, setMatchTime] = React.useState(new Date());
	const [openMatchTimeModal, setOpenMatchTimeModal] = React.useState(false);
	const [matchCity, setMatchCity] = React.useState<string | null>(null);
	const [matchCountry, setMatchCountry] = React.useState<string | null>(null);
	const [matchCityModalOpen, setMatchCityModalOpen] = React.useState(false);
	const [matchCountryModalOpen, setMatchCountryModalOpen] =
		React.useState(false);

	const cityOptions = [
		{ label: 'Istanbul', value: 'istanbul' },
		{ label: 'Ankara', value: 'ankara' },
		{ label: 'Izmir', value: 'izmir' },
		{ label: 'Bursa', value: 'bursa' },
		{ label: 'Antalya', value: 'antalya' },
		{ label: 'Konya', value: 'konya' },
		{ label: 'Adana', value: 'adana' },
		{ label: 'Gaziantep', value: 'gaziantep' },
		{ label: 'Kayseri', value: 'kayseri' },
		{ label: 'Mersin', value: 'mersin' },
	];
	const cityLabelMap: Record<string, string> = cityOptions.reduce((acc, c) => {
		acc[c.value] = c.label;
		return acc;
	}, {} as Record<string, string>);

	const countryOptions = [
		{ label: 'Turkey', value: 'turkey' },
		{ label: 'USA', value: 'usa' },
		{ label: 'Germany', value: 'germany' },
		{ label: 'France', value: 'france' },
		{ label: 'Italy', value: 'italy' },
		{ label: 'Spain', value: 'spain' },
		{ label: 'United Kingdom', value: 'uk' },
	];
	const countryLabelMap: Record<string, string> = countryOptions.reduce(
		(acc, c) => {
			acc[c.value] = c.label;
			return acc;
		},
		{} as Record<string, string>
	);

	const [ReportVisible, setReportVisible] = React.useState(false);

	return (
		<SafeAreaView edges={['top']} style={tw`flex-1 p-4 bg-white`}>
			<ScrollView
				style={tw`flex-1`}
				contentContainerStyle={tw`gap-6`}
				showsVerticalScrollIndicator={false}
			>
				<View style={tw`flex flex-row items-center gap-4`}>
					<TouchableOpacity
						style={tw`self-start `}
						onPress={() => router.back()}
					>
						<SvgXml xml={iconBack} />
					</TouchableOpacity>
					<Text style={tw`font-poppinsSemiBold text-2xl`}>
						Synastry Match Details
					</Text>
				</View>
				<Text style={tw`font-poppins text-xs text-gray-700`}>
					Date Mode offers a dual-use experience focused on dating when enabled
					and event discovery when disabled.
				</Text>
				<View
					style={tw`flex items-center justify-center bg-[#F4F4F4] rounded-lg gap-2 p-4`}
				>
					<Text style={tw`font-poppinsSemiBold text-base w-full`}>
						Your Birth
					</Text>
					<View>
						<TouchableOpacity
							style={tw`w-full p-3 border border-gray-300 bg-white rounded-lg flex flex-row  items-center justify-between`}
							onPress={() => setOpenUserDateModal(true)}
						>
							<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
								{userDate.toDateString()}
							</Text>
							<SvgXml xml={iconCalendarBlack} />
						</TouchableOpacity>
						{openUserDateModal && (
							<DateTimePicker
								value={userDate}
								mode="date"
								display="spinner"
								themeVariant="light"
								textColor="black"
								onChange={(event, selectedDate) => {
									if ((event as any).type === 'dismissed') {
										setOpenUserDateModal(false);
										return;
									}
									if (selectedDate) setUserDate(selectedDate);
									setOpenUserDateModal(false);
								}}
							/>
						)}
					</View>
					<View style={tw`flex flex-row w-full gap-2 items-center`}>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>Time</Text>
							<TouchableOpacity
								style={tw`flex-1 p-3 border border-gray-300 bg-white rounded-lg flex flex-row  items-center justify-between`}
								onPress={() => setOpenUserTimeModal(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{userTime.toLocaleTimeString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
						</View>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>City of Birth</Text>
							<View style={tw`border border-gray-300 bg-white rounded-lg`}>
								<TouchableOpacity
									style={tw`w-full p-3 flex flex-row items-center justify-between`}
									onPress={() => setUserCityModalOpen(true)}
								>
									<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
										{userCity ? cityLabelMap[userCity] : 'City'}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					{openUserTimeModal && (
						<DateTimePicker
							value={userTime}
							mode="time"
							display="spinner"
							themeVariant="light"
							textColor="black"
							onChange={(event, selectedDate) => {
								if ((event as any).type === 'dismissed') {
									setOpenUserTimeModal(false);
									return;
								}
								if (selectedDate) setUserTime(selectedDate);
								setOpenUserTimeModal(false);
							}}
						/>
					)}
					<View style={tw`flex w-full gap-2`}>
						<Text>Country of Birth</Text>
						<View style={tw`border border-gray-300 bg-white rounded-lg`}>
							<TouchableOpacity
								style={tw`w-full p-3 flex flex-row items-center justify-between`}
								onPress={() => setUserCountryModalOpen(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{userCountry ? countryLabelMap[userCountry] : 'Country'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={tw`flex items-center justify-center bg-[#F4F4F4] rounded-lg gap-2 p-4`}
				>
					<Text style={tw`font-poppinsSemiBold text-base w-full`}>
						Match&apos;s Birth
					</Text>
					<View style={tw`w-full gap-2`}>
						<Text>Match&apos;s Name {'(for display only)'}</Text>
						<View
							style={tw`w-full border border-gray-300 bg-white rounded-lg flex  items-center px-2 py-1`}
						>
							<TextInput
								placeholder="Full Name"
								style={tw`w-full font-poppinsSemiBold text-xs text-gray-600`}
								placeholderTextColor="#6B7280"
							/>
						</View>
					</View>
					<View style={tw`flex w-full gap-2`}>
						<Text>Date of birth</Text>
						<TouchableOpacity
							style={tw`w-full p-3 border border-gray-300 bg-white rounded-lg flex flex-row  items-center justify-between`}
							onPress={() => setOpenMatchDateModal(true)}
						>
							<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
								{userDate.toDateString()}
							</Text>
							<SvgXml xml={iconCalendarBlack} />
						</TouchableOpacity>
						{openMatchDateModal && (
							<DateTimePicker
								value={matchDate}
								mode="date"
								display="spinner"
								themeVariant="light"
								textColor="black"
								onChange={(event, selectedDate) => {
									if ((event as any).type === 'dismissed') {
										setOpenMatchDateModal(false);
										return;
									}
									if (selectedDate) setMatchDate(selectedDate);
									setOpenMatchDateModal(false);
								}}
							/>
						)}
					</View>
					<View style={tw`flex flex-row w-full gap-2 items-center`}>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>Time</Text>
							<TouchableOpacity
								style={tw`flex-1 p-3 border border-gray-300 bg-white rounded-lg flex flex-row  items-center justify-between`}
								onPress={() => setOpenMatchTimeModal(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{matchTime.toLocaleTimeString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
						</View>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>City of Birth</Text>
							<View style={tw`border border-gray-300 bg-white rounded-lg`}>
								<TouchableOpacity
									style={tw`w-full p-3 flex flex-row items-center justify-between`}
									onPress={() => setMatchCityModalOpen(true)}
								>
									<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
										{matchCity ? cityLabelMap[matchCity] : 'City'}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					{openMatchTimeModal && (
						<DateTimePicker
							value={matchTime}
							mode="time"
							display="spinner"
							themeVariant="light"
							textColor="black"
							onChange={(event, selectedDate) => {
								if ((event as any).type === 'dismissed') {
									setOpenMatchTimeModal(false);
									return;
								}
								if (selectedDate) setMatchTime(selectedDate);
								setOpenMatchTimeModal(false);
							}}
						/>
					)}
					<View style={tw`flex w-full gap-2`}>
						<Text>Country of Birth</Text>
						<View style={tw`border border-gray-300 bg-white rounded-lg`}>
							<TouchableOpacity
								style={tw`w-full p-3 flex flex-row items-center justify-between`}
								onPress={() => setMatchCountryModalOpen(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{matchCountry ? countryLabelMap[matchCountry] : 'Country'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={tw`flex w-full pt-2`}>
				<TouchableOpacity
					style={tw`bg-blue p-3 rounded-full`}
					onPress={() => setReportVisible(true)}
				>
					<Text style={tw`text-white text-center`}>Get Synastry Report</Text>
				</TouchableOpacity>
			</View>
			{ReportVisible && (
				<View
					style={tw`absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center px-5`}
				>
					<View
						style={tw`flex w-full bg-white rounded-xl gap-4 p-4 items-center justify-center`}
					>
						<SvgXml xml={iconSynastryGradient} />
						<Text style={tw`font-poppinsSemiBold text-lg`}>
							Synastry Report
						</Text>
						<Text style={tw`font-poppins text-center text-gray-700`}>
							Your compatibility with Elena
						</Text>
						<Text style={tw`font-poppins text-sm text-center text-gray-700`}>
							☀️{' '}
							<Text style={tw`font-poppinsSemiBold text-center text-gray-700`}>
								Sun Sign:
							</Text>{' '}
							You {'(Leo)'} and Elena {'(Aries)'}
						</Text>
						<Text style={tw`font-poppins text-sm text-center text-gray-700`}>
							🌕{' '}
							<Text style={tw`font-poppinsSemiBold text-center text-gray-700`}>
								Moon Sign:
							</Text>{' '}
							You {'(Taurus)'} and Elena {'(Scorpio)'}
						</Text>
						<View style={tw`flex w-full items-center gap-2 p-4`}>
							<LinearGradient
								colors={['#05C3DD', '#B14EFF']}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								style={tw`absolute inset-0 rounded-lg opacity-80`}
							/>
							<Text style={tw`font-poppinsSemiBold text-white`}>
								Overall: 82% Match!
							</Text>
							<Text style={tw`font-poppins text-white text-center`}>
								Strong attraction and shared values create a solid foundation
								for a lasting relationship.
							</Text>
						</View>
						<Text style={tw`font-poppins text-gray-700 text-center`}>
							We hope this helps you understand your compatibility better!
						</Text>
						<TouchableOpacity
							style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full absolute top-4 right-4`}
							onPress={() => setReportVisible(false)}
						>
							<SvgXml xml={iconCloseSmall} />
						</TouchableOpacity>
					</View>
				</View>
			)}
			{userCityModalOpen && (
				<View
					style={tw`absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center px-5`}
				>
					<View style={tw`w-full bg-white rounded-xl p-4`}>
						<Text style={tw`font-poppinsSemiBold text-base mb-2`}>
							Select City (You)
						</Text>
						<ScrollView showsVerticalScrollIndicator={false}>
							{cityOptions.map(c => (
								<TouchableOpacity
									key={c.value}
									style={tw`p-3 border border-gray-200 rounded-lg mb-2`}
									onPress={() => {
										setUserCity(c.value);
										setUserCityModalOpen(false);
									}}
								>
									<Text style={tw`font-poppins text-gray-800`}>{c.label}</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
						<TouchableOpacity
							style={tw`w-full px-4 py-2 bg-gray-200 rounded-xl items-center mt-3`}
							onPress={() => setUserCityModalOpen(false)}
						>
							<Text style={tw`font-poppinsSemiBold text-gray-700`}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			{matchCityModalOpen && (
				<View
					style={tw`absolute inset-0 bg-black bg-opacity-15 flex items-center justify-center px-5`}
				>
					<View style={tw`w-full bg-white rounded-xl p-4`}>
						<Text style={tw`font-poppinsSemiBold text-base mb-2`}>
							Select City (Match)
						</Text>
						<ScrollView showsVerticalScrollIndicator={false}>
							{cityOptions.map(c => (
								<TouchableOpacity
									key={c.value}
									style={tw`p-3 border border-gray-200 rounded-lg mb-2`}
									onPress={() => {
										setMatchCity(c.value);
										setMatchCityModalOpen(false);
									}}
								>
									<Text style={tw`font-poppins text-gray-800`}>{c.label}</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
						<TouchableOpacity
							style={tw`w-full px-4 py-2 bg-gray-200 rounded-xl items-center mt-3`}
							onPress={() => setMatchCityModalOpen(false)}
						>
							<Text style={tw`font-poppinsSemiBold text-gray-700`}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			{/* Country Modals */}
			<CountrySelectModal
				open={userCountryModalOpen}
				onClose={() => setUserCountryModalOpen(false)}
				onSelect={value => setUserCountry(value)}
				options={countryOptions}
			/>
			<CountrySelectModal
				open={matchCountryModalOpen}
				onClose={() => setMatchCountryModalOpen(false)}
				onSelect={value => setMatchCountry(value)}
				options={countryOptions}
			/>
		</SafeAreaView>
	);
}

// Country selection modals
function CountrySelectModal({
	open,
	onClose,
	onSelect,
	options,
}: {
	open: boolean;
	onClose: () => void;
	onSelect: (value: string) => void;
	options: { label: string; value: string }[];
}) {
	if (!open) return null;
	return (
		<View style={tw`absolute inset-0 bg-black/40`}>
			<View
				style={tw`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[60%]`}
			>
				<View style={tw`flex-row items-center justify-between mb-2`}>
					<Text style={tw`font-poppinsSemiBold`}>Select Country</Text>
					<TouchableOpacity onPress={onClose}>
						<Text style={tw`text-primary`}>Close</Text>
					</TouchableOpacity>
				</View>
				<ScrollView>
					{options.map(opt => (
						<TouchableOpacity
							key={opt.value}
							style={tw`py-3 border-b border-gray-200`}
							onPress={() => {
								onSelect(opt.value);
								onClose();
							}}
						>
							<Text style={tw`text-gray-800`}>{opt.label}</Text>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
