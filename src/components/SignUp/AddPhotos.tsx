import { iconPlus } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function AddPhotos() {
	const [photos, setPhotos] = useState<(string | null)[]>([
		null,
		null,
		null,
		null,
		null,
		null,
	]);

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
	return (
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
	);
}
