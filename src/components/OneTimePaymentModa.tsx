import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../lib/ThemeContext';

export default function OneTimePaymentModal({
	title,
	subtitle,
	action,
	type,
}: {
	title: string;
	subtitle: string;
	action: () => void;
	type: 'dm' | 'standout' | 'favorite';
}) {
	const { theme } = useTheme();
	const insets = useSafeAreaInsets();
	const dmPlans = [
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

	const standoutPlans = [
		{
			id: 1,
			name: '30 Standouts',
			price: '30TL each',
			popularity: 'Most Popular',
			save: 'Save 40%',
		},
		{
			id: 2,
			name: '15 Standouts',
			price: '40TL each',
			popularity: '',
			save: 'Save 20%',
		},
		{
			id: 3,
			name: '5 Standouts',
			price: '50TL each',
			popularity: '',
			save: '',
		},
	];

	const favoritePlans = [
		{
			id: 1,
			name: '30 Favorites',
			price: '30TL each',
			popularity: 'Most Popular',
			save: 'Save 40%',
		},
		{
			id: 2,
			name: '15 Favorites',
			price: '40TL each',
			popularity: '',
			save: 'Save 20%',
		},
		{
			id: 3,
			name: '5 Favorites',
			price: '50TL each',
			popularity: '',
			save: '',
		},
	];

	const plans =
		type === 'dm'
			? dmPlans
			: type === 'standout'
			? standoutPlans
			: favoritePlans;

	const [selectedPlan, setSelectedPlan] = React.useState(plans[0].id);

	return (
		<View
			style={[
				tw`w-full bg-${
					theme === 'dark' ? 'lightDark' : 'white'
				} rounded-t-3xl p-6`,
				{ paddingBottom: Math.max(insets.bottom, 16), overflow: 'hidden' },
			]}
		>
			<Text
				style={tw`text-center text-lg font-poppinsSemiBold text-${
					theme === 'dark' ? 'white' : 'black'
				}`}
			>
				{title}
			</Text>
			<Text
				style={tw`text-center text-sm font-poppins mt-4 text-${
					theme === 'dark' ? 'white' : 'black'
				}`}
			>
				{subtitle}
			</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 16 }}
				style={{ flexGrow: 0 }}
			>
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
			<Text
				style={tw`text-xs font-poppins mt-6 ${
					theme === 'dark' ? 'text-white' : 'text-black'
				}`}
			>
				One-time payment. By purchasing, you agree to this transaction and our
				terms.
			</Text>
			<TouchableOpacity
				style={tw`w-full bg-blue rounded-full py-3 mt-6 items-center`}
				onPress={action}
			>
				<Text style={tw`text-white font-poppinsSemiBold`}>
					Get {plans.find(plan => plan.id === selectedPlan)?.name} for{' '}
					{plans.find(plan => plan.id === selectedPlan)?.price}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
