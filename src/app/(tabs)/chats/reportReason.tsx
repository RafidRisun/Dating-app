import { iconPlus } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ReportReason() {
	const { theme } = useTheme();
	const [reason, setReason] = React.useState('');
	const [areYouSureModal, setAreYouSureModal] = React.useState(false);
	const [photo, setPhoto] = React.useState<string | null>(null);

	const handlePhotoUpload = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setPhoto(result.assets[0].uri);
		}
	};

	return (
		<WrapperWithHeader name="Reason">
			<View style={tw`flex pt-4 w-full gap-4`}>
				<Text
					style={tw`text-2xl font-poppinsBold w-full ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					Would you like to share more about why you&apos;re reporting this
					user?
				</Text>
				<Text
					style={tw`text-base font-poppins w-full ${
						theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
					}`}
				>
					Providing a reason helps us take appropriate action and improves our
					community.
				</Text>
			</View>
			<View style={tw`flex-1 w-full gap-4`}>
				<TextInput
					style={tw`w-full h-40 p-3 ${
						theme === 'dark'
							? 'bg-dark text-white'
							: 'bg-gray-100 text-gray-800'
					} border border-gray-300 rounded-lg mt-6 text-base font-poppins`}
					placeholder="Type your reason here..."
					multiline
					numberOfLines={6}
					textAlignVertical="top"
					value={reason}
					onChangeText={setReason}
					placeholderTextColor="#6B7280"
				/>
				<Text
					style={tw`text-sm font-poppins ${
						theme === 'dark' ? 'text-gray-200' : 'text-gray-500'
					}`}
				>
					Add Image {'(Optional)'}
				</Text>
				<TouchableOpacity
					style={tw`w-25 h-25 rounded-lg bg-gray-100 items-center justify-center`}
					onPress={handlePhotoUpload}
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
			</View>
			<TouchableOpacity
				style={tw`w-full border border-blue rounded-lg py-3 mt-6 mb-4`}
				onPress={() => setAreYouSureModal(true)}
			>
				{reason ? (
					<Text style={tw`text-blue text-center text-base font-poppins`}>
						Submit
					</Text>
				) : (
					<Text style={tw`text-blue text-center text-base font-poppins`}>
						No, just report
					</Text>
				)}
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
