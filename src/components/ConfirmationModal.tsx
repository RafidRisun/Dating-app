import {
	iconBell,
	iconDmModal,
	iconOutOfLikes,
	iconStarModal,
} from '@/assets/icon';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function ConfirmationModal({
	icon,
	confirmationText,
	confirmationSubText,
	onConfirm,
	onCancel,
}: {
	icon: string;
	confirmationText: string;
	confirmationSubText: string;
	onConfirm: () => void;
	onCancel: () => void;
}) {
	const bell = iconBell;
	const star = iconStarModal;
	const dm = iconDmModal;
	const outOfLikes = iconOutOfLikes;
	return (
		<View style={tw`flex items-center justify-center w-full absolute inset-0`}>
			<View style={tw`flex-1 w-full bg-black opacity-10 absolute inset-0`} />
			<View
				style={tw`flex items-center justify-center w-9/10 p-4 gap-2 bg-white rounded-lg`}
			>
				<SvgXml
					xml={
						icon === 'bell'
							? bell
							: icon === 'star'
							? star
							: icon === 'dm'
							? dm
							: outOfLikes
					}
				/>
				<Text style={tw`text-lg font-poppinsSemiBold text-center`}>
					{confirmationText}
				</Text>
				<Text style={tw`text-sm font-poppins text-gray-400 text-center`}>
					{confirmationSubText}
				</Text>
				<TouchableOpacity
					style={tw`w-full bg-blue rounded-lg py-3 mt-4`}
					onPress={onConfirm}
				>
					<Text
						style={tw`text-white text-center text-base font-poppinsSemiBold`}
					>
						Continue
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`w-full border border-gray-300 rounded-lg py-3`}
					onPress={onCancel}
				>
					<Text style={tw`text-gray-600 text-center text-base font-poppins`}>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
