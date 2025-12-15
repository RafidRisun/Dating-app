import { iconApple, iconGoogle, iconPhone } from '@/assets/icon';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import tw from '../../lib/tailwind';

export default function Login() {
	const router = useRouter();
	return (
		<View style={tw`flex-1`}>
			<LinearGradient
				colors={['#05C3DD', '#B14EFF']}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0.2 }}
				style={tw`absolute inset-0`}
			/>
			<View style={tw`flex-1 w-full items-center justify-center gap-10 p-5`}>
				<Image
					source={require('../../../assets/images/stars.png')}
					style={tw`absolute top-5 left-0 w-full h-40`}
					contentFit="contain"
				/>
				<View style={tw`flex w-full items-center justify-center`}>
					<Image
						source={require('../../../assets/images/logo.png')}
						style={tw`w-45 h-30`}
						contentFit="contain"
					/>
					<Text style={tw`font-poppins text-2xl text-white`}>
						Find your next experience
					</Text>
				</View>
				<Animated.View
					entering={FadeIn.delay(500).duration(1000)}
					style={tw`flex w-full items-center justify-center mb-20`}
				>
					<Text style={tw`text-justify text-white font-poppins w-90 text-sm`}>
						By continuing with Phone, Apple, or Google, you agree to our{' '}
						<Text
							style={tw`underline text-blue`}
							onPress={() => router.push('/')}
						>
							Terms
						</Text>
						. You can review our{' '}
						<Text
							style={tw`underline text-blue`}
							onPress={() => router.push('/')}
						>
							Privacy Policy
						</Text>{' '}
						to understand how we process your data.
					</Text>
				</Animated.View>
				<View
					style={tw`flex w-full items-center justify-center flex-col gap-6`}
				>
					<TouchableOpacity
						style={tw`flex flex-row gap-2 rounded-full px-5 py-3 w-full items-center justify-center border-2 border-white bg-white bg-opacity-20`}
						onPress={() => router.push('/login/signup')}
					>
						<SvgXml xml={iconPhone} />
						<Text style={tw`text-white font-poppinsSemiBold`}>
							Sign in with Phone
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row gap-2 rounded-full px-5 py-3 w-full items-center justify-center border-2 border-white bg-white bg-opacity-20`}
					>
						<SvgXml xml={iconGoogle} />
						<Text style={tw`text-white font-poppinsSemiBold`}>
							Sign in with Google
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row gap-2 rounded-full px-5 py-3 w-full items-center justify-center border-2 border-white bg-white bg-opacity-20`}
					>
						<SvgXml xml={iconApple} />
						<Text style={tw`text-white font-poppinsSemiBold`}>
							Sign in with Apple
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => router.push('/login/help')}>
					<Text style={tw`text-white font-poppinsSemiBold underline`}>
						Having Trouble Signing In?
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
