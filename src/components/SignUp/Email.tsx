import { iconYesIdLoveTo } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import TitleAndSubtitle from '../Register/TitleAndSubtitle';

export default function Email({
	email,
	setEmail,
	isSubscribed,
	setIsSubscribed,
}: {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	isSubscribed: boolean;
	setIsSubscribed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { theme } = useTheme();

	useEffect(() => {
		if (email.trim() === '') {
			setIsSubscribed(false);
		}
		if (email.trim() !== '') {
			setIsSubscribed(true);
		}
	}, [email]);

	return (
		<View style={tw`flex-1 w-full`}>
			<TitleAndSubtitle
				title="Stay in the loop?"
				subtitle="Receive marketing emails about campaigns and offers."
			/>
			<TextInput
				style={tw`border border-gray-300 rounded-lg ${
					theme === 'dark'
						? 'bg-lighterDark text-white'
						: 'bg-gray-100 text-black'
				} px-4 py-3 mt-5 text-base font-poppins`}
				placeholder="e.g., your.email@example.com"
				value={email}
				onChangeText={text => setEmail(text)}
				placeholderTextColor="#6B7280"
			/>
			<TouchableOpacity
				style={tw`flex flex-row items-center justify-center py-2 gap-2 mt-10 rounded-lg ${
					isSubscribed
						? 'bg-purple/30 border border-[#612B8C]'
						: 'bg-gray-100 border border-gray-300 '
				}`}
				onPress={() => setIsSubscribed(!isSubscribed)}
				disabled={email.trim() === ''}
			>
				{isSubscribed && (
					<SvgXml xml={iconYesIdLoveTo} width={20} height={20} />
				)}
				{isSubscribed ? (
					<Text style={tw`text-purple font-poppins text-base`}>
						Yes, I&apos;d love to
					</Text>
				) : (
					<Text style={tw`text-gray-500 font-poppins text-base`}>
						Yes, I&apos;d love to
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
}
