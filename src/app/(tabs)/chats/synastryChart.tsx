import {
	iconBack,
	iconCalendarBlack,
	iconCloseSmall,
	iconSynastryGradient,
} from '@/assets/icon';
import tw from '@/src/lib/tailwind';
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
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function SynastryChart() {
	const router = useRouter();
	const [userDate, setUserDate] = React.useState(new Date());
	const [openUserDateModal, setOpenUserDateModal] = React.useState(false);
	const [userTime, setUserTime] = React.useState(new Date());
	const [openUserTimeModal, setOpenUserTimeModal] = React.useState(false);
	const [userCity, setUserCity] = React.useState('');
	const [userCountry, setUserCountry] = React.useState('');

	const [matchName, setMatchName] = React.useState('');
	const [matchDate, setMatchDate] = React.useState(new Date());
	const [openMatchDateModal, setOpenMatchDateModal] = React.useState(false);
	const [matchTime, setMatchTime] = React.useState(new Date());
	const [openMatchTimeModal, setOpenMatchTimeModal] = React.useState(false);
	const [matchCity, setMatchCity] = React.useState('');
	const [matchCountry, setMatchCountry] = React.useState('');

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
					style={tw`flex items-center justify-center bg-[#F7EDFF] rounded-lg gap-2 p-4`}
				>
					<Text
						style={tw`font-poppinsSemiBold text-base text-[#7E37B5] w-full`}
					>
						Your Birth
					</Text>
					<View>
						<TouchableOpacity
							style={tw`w-full p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
							onPress={() => setOpenUserDateModal(true)}
						>
							<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
								{userDate.toDateString()}
							</Text>
							<SvgXml xml={iconCalendarBlack} />
						</TouchableOpacity>
						<DatePicker
							modal
							open={openUserDateModal}
							date={userDate}
							onConfirm={date => {
								setOpenUserDateModal(false);
								setUserDate(date);
							}}
							onCancel={() => {
								setOpenUserDateModal(false);
							}}
							mode="date"
						/>
					</View>
					<View style={tw`flex flex-row w-full gap-2 items-center`}>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>Time</Text>
							<TouchableOpacity
								style={tw`flex-1 p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
								onPress={() => setOpenUserTimeModal(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{userTime.toDateString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
							<DatePicker
								modal
								open={openUserTimeModal}
								date={userTime}
								onConfirm={date => {
									setOpenUserTimeModal(false);
									setUserTime(date);
								}}
								onCancel={() => {
									setOpenUserTimeModal(false);
								}}
								mode="time"
							/>
						</View>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>City of Birth</Text>
							<View style={tw`border border-gray-300 bg-gray-100 rounded-lg`}>
								<RNPickerSelect
									placeholder={{ label: 'City', value: null }}
									onValueChange={value => setUserCity(value)}
									items={[
										{ label: 'Istanbul', value: 'istanbul' },
										{ label: 'Ankara', value: 'ankara' },
										{ label: 'Izmir', value: 'izmir' },
										{ label: 'New York', value: 'newyork' },
										{ label: 'Los Angeles', value: 'losangeles' },
										{ label: 'Chicago', value: 'chicago' },
									]}
								/>
							</View>
						</View>
					</View>
					<View style={tw`flex w-full gap-2`}>
						<Text>Country of Birth</Text>
						<View style={tw`border border-gray-300 bg-gray-100 rounded-lg`}>
							<RNPickerSelect
								placeholder={{ label: 'Country', value: null }}
								onValueChange={value => setUserCountry(value)}
								items={[
									{ label: 'Turkey', value: 'turkey' },
									{ label: 'USA', value: 'usa' },
									{ label: 'Germany', value: 'germany' },
									{ label: 'France', value: 'france' },
									{ label: 'Italy', value: 'italy' },
									{ label: 'Spain', value: 'spain' },
								]}
							/>
						</View>
					</View>
				</View>
				<View
					style={tw`flex items-center justify-center bg-[#FEEDF6] rounded-lg gap-2 p-4`}
				>
					<Text
						style={tw`font-poppinsSemiBold text-base text-[#AE3773] w-full`}
					>
						Match&apos;s Birth
					</Text>
					<View style={tw`w-full gap-2`}>
						<Text>Match&apos;s Name {'(for display only)'}</Text>
						<View
							style={tw`w-full border border-gray-300 bg-gray-100 rounded-lg flex  items-center px-2 py-1`}
						>
							<TextInput
								placeholder="Full Name"
								style={tw`w-full font-poppinsSemiBold text-xs text-gray-600`}
							/>
						</View>
					</View>
					<View style={tw`flex w-full gap-2`}>
						<Text>Date of birth</Text>
						<TouchableOpacity
							style={tw`w-full p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
							onPress={() => setOpenUserDateModal(true)}
						>
							<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
								{userDate.toDateString()}
							</Text>
							<SvgXml xml={iconCalendarBlack} />
						</TouchableOpacity>
						<DatePicker
							modal
							open={openMatchDateModal}
							date={matchDate}
							onConfirm={date => {
								setOpenMatchDateModal(false);
								setMatchDate(date);
							}}
							onCancel={() => {
								setOpenMatchDateModal(false);
							}}
							mode="date"
						/>
					</View>
					<View style={tw`flex flex-row w-full gap-2 items-center`}>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>Time</Text>
							<TouchableOpacity
								style={tw`flex-1 p-3 border border-gray-300 bg-gray-100 rounded-lg flex flex-row  items-center justify-between`}
								onPress={() => setOpenMatchTimeModal(true)}
							>
								<Text style={tw`font-poppinsSemiBold text-xs text-gray-600`}>
									{matchTime.toDateString()}
								</Text>
								<SvgXml xml={iconCalendarBlack} />
							</TouchableOpacity>
							<DatePicker
								modal
								open={openMatchTimeModal}
								date={matchTime}
								onConfirm={date => {
									setOpenMatchTimeModal(false);
									setMatchTime(date);
								}}
								onCancel={() => {
									setOpenMatchTimeModal(false);
								}}
								mode="time"
							/>
						</View>
						<View style={tw`flex flex-1 gap-2`}>
							<Text>City of Birth</Text>
							<View style={tw`border border-gray-300 bg-gray-100 rounded-lg`}>
								<RNPickerSelect
									placeholder={{ label: 'City', value: null }}
									onValueChange={value => setMatchCity(value)}
									items={[
										{ label: 'Istanbul', value: 'istanbul' },
										{ label: 'Ankara', value: 'ankara' },
										{ label: 'Izmir', value: 'izmir' },
										{ label: 'New York', value: 'newyork' },
										{ label: 'Los Angeles', value: 'losangeles' },
										{ label: 'Chicago', value: 'chicago' },
									]}
								/>
							</View>
						</View>
					</View>
					<View style={tw`flex w-full gap-2`}>
						<Text>Country of Birth</Text>
						<View style={tw`border border-gray-300 bg-gray-100 rounded-lg`}>
							<RNPickerSelect
								placeholder={{ label: 'Country', value: null }}
								onValueChange={value => setMatchCountry(value)}
								items={[
									{ label: 'Turkey', value: 'turkey' },
									{ label: 'USA', value: 'usa' },
									{ label: 'Germany', value: 'germany' },
									{ label: 'France', value: 'france' },
									{ label: 'Italy', value: 'italy' },
									{ label: 'Spain', value: 'spain' },
								]}
							/>
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
		</SafeAreaView>
	);
}
