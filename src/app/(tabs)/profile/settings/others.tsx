import { iconPlus } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Others() {
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
		<WrapperWithHeader name="Others">
			<View style={tw`flex w-full py-4 gap-3`}>
				<Text style={tw`text-xl font-poppinsBold`}>
					Would you like to tell us the reason?
				</Text>
				<Text style={tw`text-sm font-poppins text-gray-500`}>
					So we can give you a better experience.
				</Text>
				<TextInput
					style={tw`w-full border border-gray-300 rounded-lg p-4 text-sm font-poppins`}
					placeholder="Write your reason here..."
					multiline
					textAlignVertical="top"
				/>
				<Text style={tw`text-sm font-poppins text-gray-800`}>
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
		</WrapperWithHeader>
	);
}
