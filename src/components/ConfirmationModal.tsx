import {
	iconBell,
	iconBlock,
	iconDmModal,
	iconGoBack,
	iconOutOfLikes,
	iconStarModal,
	iconUnmatch,
} from '@/assets/icon';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import { useTheme } from '../lib/ThemeContext';

export default function ConfirmationModal({
	icon,
	confirmationText,
	confirmationSubText,
	onConfirm,
	onCancel,
}: {
	icon: string | null;
	confirmationText: string;
	confirmationSubText: string;
	onConfirm: () => void;
	onCancel: () => void;
}) {
	const bell = iconBell;
	const star = iconStarModal;
	const dm = iconDmModal;
	const outOfLikes = iconOutOfLikes;
	const goBack = iconGoBack;
	const unMatch = iconUnmatch;
	const block = iconBlock;
	const { theme } = useTheme();
	return (
		<View
			style={tw`flex items-center justify-center w-full absolute inset-0 z-50`}
		>
			<View style={tw`flex-1 w-full bg-black opacity-10 absolute inset-0`} />
			<View
				style={tw`flex items-center justify-center w-9/10 p-4 gap-2 bg-${
					theme === 'dark' ? 'lightDark' : 'white'
				} rounded-lg`}
			>
				<SvgXml
					xml={
						icon === 'bell'
							? bell
							: icon === 'star'
							? star
							: icon === 'dm'
							? dm
							: icon === 'goBack'
							? goBack
							: icon === 'unMatch'
							? unMatch
							: icon === 'outOfLikes'
							? outOfLikes
							: icon === 'block'
							? block
							: icon === 'unmatch'
							? unMatch
							: ''
					}
					width={80}
					height={80}
				/>
				<Text
					style={tw`text-lg font-poppinsSemiBold text-center text-${
						theme === 'dark' ? 'white' : 'black'
					}`}
				>
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
					<Text
						style={tw`${
							theme === 'dark' ? 'text-white' : 'text-gray-700'
						} text-center text-base font-poppins`}
					>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
