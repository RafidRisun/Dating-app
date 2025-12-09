import EditProfileComponent from '@/src/components/EditProfile/EditProfile';
import ProfileComponent from '@/src/components/ProfileComponent';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function EditProfile() {
	const { theme } = useTheme();
	const [index, setIndex] = useState(0);
	const pagerRef = useRef<PagerView>(null); // Properly type the PagerView ref
	const router = useRouter();

	const handlePageChange = (pageIndex: number) => {
		setIndex(pageIndex);
		pagerRef.current?.setPage(pageIndex); // Scroll to the selected page
	};

	const [photos, setPhotos] = useState<(string | null)[]>([
		null,
		null,
		null,
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
			quality: 1,
		});

		if (!result.canceled) {
			const updatedPhotos = [...photos];
			updatedPhotos[index] = result.assets[0].uri;
			setPhotos(updatedPhotos);
		}
	};
	return (
		<WrapperWithHeader name="Edit Profile">
			<View
				style={tw`flex-1 ${theme === 'dark' ? 'bg-lightDark' : 'bg-[#FDFDFD]'}`}
			>
				<View
					style={tw`flex flex-row w-full items-center border-b border-gray-200`}
				>
					<TouchableOpacity
						onPress={() => handlePageChange(0)}
						style={tw`flex-1`}
					>
						<View style={tw`w-full`}>
							<Text
								style={tw`w-full text-center py-3 font-poppinsSemiBold border-b-2 ${
									index === 0
										? 'text-blue border-blue'
										: 'text-gray-500 border-white'
								}`}
							>
								Edit
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => handlePageChange(1)}
						style={tw`flex-1`}
					>
						<View style={tw`w-full`}>
							<Text
								style={tw`w-full text-center py-3 font-poppinsSemiBold border-b-2 ${
									index === 1
										? 'text-purple border-purple'
										: 'text-gray-500 border-white'
								}`}
							>
								Preview
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<PagerView
					ref={pagerRef} // Attach the reference
					style={tw`flex-1`}
					initialPage={0}
					scrollEnabled={true}
					pageMargin={0}
					onPageSelected={e => setIndex(e.nativeEvent.position)}
				>
					<View key="1" style={tw`flex-1 items-center`}>
						<EditProfileComponent
							photos={photos}
							handlePhotoUpload={handlePhotoUpload}
						/>
					</View>
					<View key="2" style={tw`flex-1 justify-center items-center`}>
						<ProfileComponent />
					</View>
				</PagerView>
			</View>
		</WrapperWithHeader>
	);
}
