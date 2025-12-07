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
							<View
								key={user.id}
								style={tw`flex flex-row w-full items-center justify-between p-4 bg-white shadow rounded-lg`}
							>
								<View style={tw`flex flex-row items-center gap-4`}>
									<Image
										source={user.image}
										style={tw`w-12 h-12 rounded-full`}
									/>
									<Text style={tw`text-base`}>{user.name}</Text>
								</View>
								{user.status === 'Blocked' ? (
									<TouchableOpacity
										style={tw`px-4 py-2 bg-red-500 rounded-full`}
										onPress={() => {
											// Unblock user logic here
											alert(`Unblocked ${user.name}`);
										}}
									>
										<Text style={tw`text-white font-poppinsSemiBold`}>
											Unblock
										</Text>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										style={tw`px-4 py-2 bg-gray-100 rounded-full`}
										onPress={() => {
											// Unblock user logic here
											alert(`Blocked ${user.name}`);
										}}
									>
										<Text style={tw`text-red-500 font-poppinsSemiBold`}>
											Block
										</Text>
									</TouchableOpacity>
								)}
							</View>
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
		status: 'Blocked',
	},
	{
		id: 2,
		name: 'Jane Smith',
		image: require('@/assets/images/hotgirl1.png'),
		status: 'Blocked',
	},
	{
		id: 3,
		name: 'Mike Johnson',
		image: require('@/assets/images/hotgirl2.png'),
		status: 'Unblocked',
	},
];
