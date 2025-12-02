import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Blocked() {
	const router = useRouter();
	return (
		<WrapperWithHeader name="Blocked Users">
			<View style={tw`w-full`}>
				<ScrollView>
					<View style={tw`flex w-full items-center justify-center p-1 gap-4`}>
						{blockedUsers.map(user => (
							<TouchableOpacity
								key={user.id}
								style={tw`flex flex-row w-full items-center p-4 bg-white shadow rounded-lg gap-4`}
							>
								<Image source={user.image} style={tw`w-12 h-12 rounded-full`} />
								<Text style={tw`text-base`}>{user.name}</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</View>
		</WrapperWithHeader>
	);
}

const blockedUsers = [
	{
		id: 1,
		name: 'John Doe',
		image: require('@/assets/images/hotGuy.png'),
	},
	{
		id: 2,
		name: 'Jane Smith',
		image: require('@/assets/images/hotgirl1.png'),
	},
];
