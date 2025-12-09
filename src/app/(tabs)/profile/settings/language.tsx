import { iconTick } from '@/assets/icon';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Language() {
	const { theme } = useTheme();
	const [selectedLanguage, setSelectedLanguage] = React.useState('tk');

	return (
		<WrapperWithHeader name="Language">
			<View style={tw`flex-1 w-full`}>
				<View
					style={tw`w-full p-4 ${
						theme === 'dark' ? 'bg-dark' : 'bg-white'
					} rounded-lg shadow-sm gap-2 mt-6`}
				>
					<TouchableOpacity
						onPress={() => setSelectedLanguage('tk')}
						style={tw`flex flex-row items-center ${
							selectedLanguage === 'tk' ? 'justify-between' : 'justify-start'
						} w-full pb-4 border-b border-gray-200`}
					>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							Turkish
						</Text>
						{selectedLanguage === 'tk' && <SvgXml xml={iconTick} />}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setSelectedLanguage('en')}
						style={tw`flex flex-row items-center ${
							selectedLanguage === 'en' ? 'justify-between' : 'justify-start'
						} w-full pb-4 border-b border-gray-200`}
					>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							English
						</Text>
						{selectedLanguage === 'en' && <SvgXml xml={iconTick} />}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setSelectedLanguage('es')}
						style={tw`flex flex-row items-center ${
							selectedLanguage === 'es' ? 'justify-between' : 'justify-start'
						} w-full`}
					>
						<Text
							style={tw`text-sm font-poppins ${
								theme === 'dark' ? 'text-white' : 'text-black'
							}`}
						>
							Spanish
						</Text>
						{selectedLanguage === 'es' && <SvgXml xml={iconTick} />}
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				style={tw`w-full bg-blue rounded-xl py-3 items-center my-6`}
				onPress={() => {}}
			>
				<Text style={tw`text-white font-poppinsSemiBold`}>Save</Text>
			</TouchableOpacity>
		</WrapperWithHeader>
	);
}
