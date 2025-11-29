import { iconFeature } from '@/assets/icon';
import { Image } from 'expo-image';
import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
				style={tw`h-150`}
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
						<Image source={pkg.photo} style={tw`w-full h-55 mb-6`} />
						{pkg.features.map((feature, featureIndex) => (
							<View
								key={featureIndex}
								style={tw`flex flex-row items-center w-full px-6`}
							>
								<SvgXml xml={iconFeature} />
								<Text style={tw`ml-4 text-base font-poppins`}>{feature}</Text>
							</View>
						))}
						<TouchableOpacity
							style={tw`mt-6 mb-4 px-6 py-3 bg-blue rounded-full`}
						>
							<Text style={tw`text-white text-center font-poppinsBold`}>
								{pkg.name === 'Soulflag Plus'
									? 'Subscribe to Plus'
									: 'Subscribe to Premium'}
							</Text>
						</TouchableOpacity>
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
			'Unlimited rewinds',
			'Control who sees you',
		],
		photo: require('@/assets/images/onboard2.png'),
	},
	{
		id: '2',
		name: 'Soulflag Premium',
		features: [
			'All Soulflag Plus features',
			'5 free standouts per month',
			'5 free favorites per week',
			'Advanced filters',
			'Read receipts',
			'Message before matching',
		],
		photo: require('@/assets/images/premium.png'),
	},
];
