import { iconCloseSmall, iconFeature, iconLack } from '@/assets/icon';
import { useTheme } from '@/src/lib/ThemeContext';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function PlansModalComponent() {
	const router = useRouter();
	const { theme } = useTheme();
	const [index, setIndex] = useState(0);
	const pagerRef = useRef<PagerView>(null); // Properly type the PagerView ref
	const handlePageChange = (pageIndex: number) => {
		setIndex(pageIndex);
		pagerRef.current?.setPage(pageIndex); // Scroll to the selected page
	};

	const [selectedPlanPlus, setSelectedPlanPlus] = React.useState(
		packages[0].plans[0].id
	);
	const [selectedPlanPremium, setSelectedPlanPremium] = React.useState(
		packages[1].plans[0].id
	);

	const [expanded, setExpanded] = useState(false);

	const [pagerEnabled, setPagerEnabled] = useState(true);

	// -- Discount config (temporary local); replace with remote/API fetch
	const discount: {
		percent: number;
		expiresAt: string;
		appliesTo: string | string[];
		title: string;
		promoCode: string | null;
		amount?: number;
	} = {
		percent: 20, // percent off
		expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // 8 hours
		appliesTo: 'all', // or array of pkg/plan ids
		title: 'Limited time 20% OFF',
		promoCode: null,
	};

	const [timeRemaining, setTimeRemaining] = React.useState('8h 00m 00s');
	const [discountActive, setDiscountActive] = React.useState(true);

	const formatRemaining = (ms: number) => {
		if (ms <= 0) return '0h 00m 00s';
		const total = Math.max(0, Math.floor(ms / 1000));
		const h = Math.floor(total / 3600);
		const m = Math.floor((total % 3600) / 60);
		const s = total % 60;
		return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(
			2,
			'0'
		)}s`;
	};

	useEffect(() => {
		let id: NodeJS.Timeout | number;
		const tick = () => {
			const diff = new Date(discount.expiresAt).getTime() - Date.now();
			if (diff <= 0) {
				setTimeRemaining('Expired');
				setDiscountActive(false);
				if (id) clearInterval(id as any);
				return;
			}
			setTimeRemaining(formatRemaining(diff));
		};
		tick();
		id = setInterval(tick, 1000);
		return () => clearInterval(id as any);
	}, []);

	const isDiscountValidFor = (pkgId: string, planId?: string) => {
		if (!discountActive) return false;
		if (!discount) return false;
		if (discount.appliesTo === 'all') return true;
		if (Array.isArray(discount.appliesTo)) {
			return discount.appliesTo.includes(planId ?? pkgId);
		}
		return false;
	};

	const applyDiscountToPriceString = (
		priceStr: string | undefined,
		d: typeof discount,
		pkgId: string,
		planId?: string
	) => {
		if (!priceStr) return priceStr ?? '';
		if (!d || !discountActive || !isDiscountValidFor(pkgId, planId))
			return priceStr;
		const match = priceStr.match(/([\d.,]+)/);
		const num = match ? parseFloat(match[1].replace(',', '.')) : NaN;
		const suffix = priceStr.replace(/[0-9.,\s]/g, '');
		if (Number.isNaN(num)) return priceStr;
		let newNum = num;
		if (d.percent) newNum = Math.round(newNum * (1 - d.percent / 100));
		if (d.amount) newNum = Math.max(0, Math.round(newNum - d.amount));
		return `${newNum}${suffix}`;
	};

	return (
		<SafeAreaView
			edges={['top']}
			style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}
		>
			<View style={tw`flex flex-row items-center justify-end px-4 pt-3`}>
				<TouchableOpacity
					style={tw`w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full`}
					onPress={() => router.back()}
				>
					<SvgXml xml={iconCloseSmall} />
				</TouchableOpacity>
			</View>
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
			<ScrollView
				nestedScrollEnabled
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1 }}
			>
				<View style={tw`flex-1 bg-${theme === 'dark' ? 'dark' : 'white'}`}>
					<PagerView
						ref={pagerRef} // Attach the reference
						style={tw`h-220`}
						initialPage={0}
						scrollEnabled={pagerEnabled}
						pageMargin={0}
						onPageSelected={e => setIndex(e.nativeEvent.position)}
					>
						{packages.map((pkg, pkgIndex) => (
							<View
								key={pkg.id}
								style={tw`flex flex-col gap-2 flex-1 items-center`}
							>
								<View style={tw`flex w-full`}>
									<Image source={pkg.photo} style={tw`w-full h-55 mb-4`} />
									<View
										style={tw`flex items-center justify-center bg-black bg-opacity-30 absolute inset-0`}
									>
										<Text style={tw`text-white text-xl font-poppinsSemiBold`}>
											{pkg.quote}
										</Text>
									</View>
									{discountActive && (
										<View
											style={tw`absolute left-0 right-0 top-4 items-center`}
										>
											<View style={tw`bg-white px-3 py-1 rounded-full`}>
												<Text
													style={tw`text-black text-xs font-poppinsSemiBold`}
												>
													{discount.title} - Ends in {timeRemaining}
												</Text>
											</View>
										</View>
									)}
								</View>
								<ScrollView
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{ paddingHorizontal: 16 }}
									style={{ flexGrow: 0 }}
									onTouchStart={() => setPagerEnabled(false)}
									onTouchEnd={() => setPagerEnabled(true)}
									onMomentumScrollEnd={() => setPagerEnabled(true)}
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
												<Text style={tw`font-poppinsSemiBold`}>
													{plan.name}
												</Text>
												{(() => {
													const discounted = applyDiscountToPriceString(
														plan.price,
														discount,
														pkg.id,
														plan.id
													);
													if (discounted !== plan.price) {
														return (
															<>
																<Text style={tw`font-poppinsSemiBold text-lg`}>
																	{discounted}
																</Text>
																<Text style={tw`font-poppins text-sm mt-1`}>
																	<Text
																		style={{
																			textDecorationLine: 'line-through',
																		}}
																	>
																		{plan.price}
																	</Text>
																</Text>
															</>
														);
													}
													return (
														<Text style={tw`font-poppins text-sm mt-2`}>
															{plan.price}
														</Text>
													);
												})()}
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
								<View
									style={tw`flex flex-col w-full gap-3 ${
										expanded ? '' : 'h-48 overflow-hidden'
									}`}
								>
									{pkg.features.map((feature, featureIndex) => (
										<View
											key={featureIndex}
											style={tw`flex flex-row items-center w-full px-6`}
										>
											<SvgXml xml={iconFeature} />
											<Text
												style={tw`ml-4 text-base font-poppins ${
													theme === 'dark' ? 'text-white' : 'text-black'
												}`}
											>
												{feature}
											</Text>
										</View>
									))}
									{pkg.lacks?.map((lack, lackIndex) => (
										<View
											key={lackIndex}
											style={tw`flex flex-row items-center w-full px-6`}
										>
											<SvgXml xml={iconLack} />
											<Text
												style={tw`ml-4 text-base font-poppins ${
													theme === 'dark' ? 'text-white' : 'text-black'
												}`}
											>
												{lack}
											</Text>
										</View>
									))}
								</View>
								{!expanded && (
									<TouchableOpacity
										style={tw`px-6 py-3 bg-blue rounded-lg`}
										onPress={() => setExpanded(true)}
									>
										<Text style={tw`text-white text-center font-poppinsBold`}>
											See all Perks
										</Text>
									</TouchableOpacity>
								)}
							</View>
						))}
					</PagerView>
				</View>
			</ScrollView>
			<View
				style={tw`flex flex-col w-full mb-3 bg-${
					theme === 'dark' ? 'dark' : 'white'
				} p-6`}
			>
				<Text
					style={tw`text-xs font-poppins ${
						theme === 'dark' ? 'text-white' : 'text-black'
					}`}
				>
					By purchasing, you will be charged, your subscription will auto-renew
					for the same price and package length until you cancel anytime in App
					Store Settings, and you agree to our Terms
				</Text>
				<TouchableOpacity
					style={tw`w-full bg-blue rounded-full py-3 mt-4 items-center`}
					onPress={() => {
						// Handle purchase logic here
					}}
				>
					<Text style={tw`text-white text-base font-poppinsSemiBold`}>
						{index === 0
							? `${
									packages[0].plans.find(p => p.id === selectedPlanPlus)
										?.name ?? ''
							  } - ${applyDiscountToPriceString(
									packages[0].plans.find(p => p.id === selectedPlanPlus)?.price,
									discount,
									packages[0].id,
									selectedPlanPlus
							  )}`
							: `${
									packages[1].plans.find(p => p.id === selectedPlanPremium)
										?.name ?? ''
							  } - ${applyDiscountToPriceString(
									packages[1].plans.find(p => p.id === selectedPlanPremium)
										?.price,
									discount,
									packages[1].id,
									selectedPlanPremium
							  )}`}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
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
		quote: 'See who liked you!',
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
		quote: 'Get unlimited access to all features!',
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
