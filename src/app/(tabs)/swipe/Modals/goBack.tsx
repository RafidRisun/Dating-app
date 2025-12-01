import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function GoBack() {
	const plans = [
		{
			id: 1,
			name: '30 DMs',
			price: '30TL each',
			popularity: 'Most Popular',
			save: 'Save 40%',
		},
		{
			id: 2,
			name: '15 DMs',
			price: '40TL each',
			popularity: '',
			save: 'Save 20%',
		},
		{
			id: 3,
			name: '5 DMs',
			price: '50TL each',
			popularity: '',
			save: '',
		},
	];

	const [selectedPlan, setSelectedPlan] = React.useState(plans[0].id);

	return (
		<View style={tw`w-full bg-white rounded-t-3xl p-6`}>
			<Text style={tw`text-center text-lg font-poppinsSemiBold`}>Go Back</Text>
			<Text style={tw`text-center text-sm font-poppins mt-4`}>
				Go back to the last profile you passed.
			</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={tw`flex-row items-center gap-4 mt-6`}>
					{plans.map(plan => (
						<TouchableOpacity
							key={plan.id}
							style={tw`w-55 p-4 items-start justify-center bg-gray-200 rounded-lg border border-gray-300`}
							onPress={() => setSelectedPlan(plan.id)}
						>
							{selectedPlan === plan.id && (
								<LinearGradient
									colors={['#05C3DD', '#B14EFF']}
									style={tw`absolute inset-0 rounded-lg opacity-60`}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
								/>
							)}
							<Text style={tw`font-poppinsSemiBold`}>{plan.name}</Text>
							<Text style={tw`font-poppins text-sm mt-2`}>{plan.price}</Text>
							<Text style={tw`font-poppins text-xs mt-2`}>
								{plan.popularity ? plan.popularity : ''}
							</Text>
							<View
								style={tw`flex items-center justify-center px-3 py-2 ${
									plan.save ? 'bg-white' : ''
								} rounded-full mt-4`}
							>
								<Text style={tw`font-poppinsSemiBold text-xs`}>
									{plan.save}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
			<View style={tw`w-full h-1 border-b border-gray-300 rounded-full mt-6`} />
			<Text style={tw`text-xs font-poppins mt-6`}>
				One-time payment. By purchasing, you agree to this transaction and our
				terms.
			</Text>
			<TouchableOpacity
				style={tw`w-full bg-blue rounded-full py-3 mt-6 items-center`}
			>
				<Text style={tw`text-white font-poppinsSemiBold`}>
					Get {plans.find(plan => plan.id === selectedPlan)?.name} for{' '}
					{plans.find(plan => plan.id === selectedPlan)?.price}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
