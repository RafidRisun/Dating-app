import { iconFeature, iconLack } from '@/assets/icon';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function SubscriptionPackages() {
	const [index, setIndex] = React.useState(0);
	const pagerRef = useRef<PagerView>(null); // Properly type the PagerView ref
	const handlePageChange = (pageIndex: number) => {
		setIndex(pageIndex);
		pagerRef.current?.setPage(pageIndex); // Scroll to the selected page
	};
	const [seeMore, setSeeMore] = React.useState(false);

	const [selectedPlanPlus, setSelectedPlanPlus] = React.useState(
		packages[0].plans[0].id
	);
	const [selectedPlanPremium, setSelectedPlanPremium] = React.useState(
		packages[1].plans[0].id
	);

	return (
		<View style={tw`flex-1 bg-white mt-12`}>
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
							Soulflag Plus
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
							Soulflag Premium
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<PagerView
				ref={pagerRef} // Attach the reference
				style={tw`h-220`}
				initialPage={0}
				scrollEnabled={true}
				pageMargin={0}
				onPageSelected={e => setIndex(e.nativeEvent.position)}
			>
				{packages.map((pkg, pkgIndex) => (
					<View
						key={pkg.id}
						style={tw`flex flex-col gap-2 flex-1 items-center`}
					>
						<Image source={pkg.photo} style={tw`w-full h-55`} />
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ paddingHorizontal: 16 }}
							style={{ flexGrow: 0 }}
						>
							<View style={tw`flex-row items-center gap-4 my-4`}>
								{pkg.plans.map(plan => (
									<TouchableOpacity
										key={plan.id}
										style={tw`w-55 p-4 items-start justify-center bg-gray-200 rounded-lg border border-gray-300`}
										onPress={() =>
											pkg.id === '1'
												? setSelectedPlanPlus(plan.id)
												: setSelectedPlanPremium(plan.id)
										}
									>
										{(pkg.id === '1'
											? selectedPlanPlus === plan.id
											: selectedPlanPremium === plan.id) && (
											<LinearGradient
												colors={['#05C3DD', '#B14EFF']}
												style={tw`absolute inset-0 rounded-lg opacity-60`}
												start={{ x: 0, y: 0 }}
												end={{ x: 1, y: 0 }}
											/>
										)}
										<Text style={tw`font-poppinsSemiBold`}>{plan.name}</Text>
										<Text style={tw`font-poppins text-sm mt-2`}>
											{plan.price}
										</Text>
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
						{pkg.features
							.slice(0, seeMore ? pkg.features.length : 6)
							.map((feature, featureIndex) => (
								<View
									key={featureIndex}
									style={tw`flex flex-row items-center w-full px-6`}
								>
									<SvgXml xml={iconFeature} />
									<Text style={tw`ml-4 text-base font-poppins`}>{feature}</Text>
								</View>
							))}

						{seeMore &&
							pkg.lacks.map((lack, lackIndex) => (
								<View
									key={lackIndex}
									style={tw`flex flex-row items-center w-full px-6`}
								>
									<SvgXml xml={iconLack} />
									<Text style={tw`ml-4 text-base font-poppins`}>{lack}</Text>
								</View>
							))}
						{seeMore === false ? (
							<TouchableOpacity
								style={tw`mt-6 mb-4 px-6 py-3 bg-blue rounded-lg`}
								onPress={() => setSeeMore(true)}
							>
								<Text style={tw`text-white text-center font-poppinsBold`}>
									See all perks
								</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={tw`mt-6 mb-4 px-6 py-3 bg-blue rounded-lg`}
							>
								<Text style={tw`text-white text-center font-poppinsBold`}>
									{pkg.name === 'Soulflag Plus'
										? `Subscribe to Plus for ${
												pkg.plans.find(p => p.id === selectedPlanPlus)?.price ??
												pkg.plans[0].price
										  }`
										: `Subscribe to Premium for ${
												pkg.plans.find(p => p.id === selectedPlanPremium)
													?.price ?? pkg.plans[0].price
										  }`}
								</Text>
							</TouchableOpacity>
						)}
					</View>
				))}
			</PagerView>
		</View>
	);
}

const packages = [
	{
		id: '1',
		name: 'Soulflag Plus',
		features: [
			'Unlimited Likes',
			'See Who Liked You',
			'1 free standout per month',
			'2 free favorites per week',
			'Unlimited go backs',
			'Control who sees you',
		],
		lacks: [
			'Match with All-Star Profiles (Not included)',
			'Direct Messaging (Not included)',
			'Multicity mode (Not included)',
		],
		photo: require('@/assets/images/onboard2.png'),
		plans: [
			{
				id: '1',
				name: '1 Week',
				price: '100TL',
				popularity: 'Most Popular',
				save: 'Save 40%',
			},
			{ id: '2', name: '1 Month', price: '400TL', save: 'Save 20%' },
			{ id: '3', name: '3 Months', price: '900TL', save: '' },
		],
	},
	{
		id: '2',
		name: 'Soulflag Premium',
		features: [
			'Unlimited Likes',
			'See Who Liked You',
			'Match with All-Star Profiles',
			'2 free standout per month',
			'3 free favorites per week',
			'3 free DMs per week',
			'Unlimited go backs',
			'Multicity mode (New)',
			'Control who sees you',
			'Hide ads',
		],
		lacks: [],
		photo: require('@/assets/images/premium.png'),
		plans: [
			{
				id: '1',
				name: '1 Week',
				price: '500TL',
				popularity: 'Most Popular',
				save: 'Save 40%',
			},
			{ id: '2', name: '1 Month', price: '900TL', save: 'Save 20%' },
			{ id: '3', name: '3 Months', price: '1200TL', save: '' },
		],
	},
];
