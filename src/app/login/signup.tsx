import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function Signup() {
	const [progress, setProgress] = useState(7);
	const [phoneNumber, setPhoneNumber] = useState('');
	const [code, setCode] = useState('');
	const [name, setName] = useState('');
	const [photos, setPhotos] = useState<string[]>([]);
	const [dob, setDob] = useState<Date | null>(null);
	const [gender, setGender] = useState<string>('');
	const [lookingFor, setLookingFor] = useState<
		| 'A long-term relationship'
		| 'Fun, casual dates'
		| 'Marriage'
		| 'Friends'
		| 'Event Buddy'
		| ''
	>('');
	const [interests, setInterests] = useState<string[]>([]);
	const [height, setHeight] = useState<number | null>(null);
	const [bio, setBio] = useState<string>('');
	const [lifeStyle, setLifeStyle] = useState<{
		smoking: boolean | null;
		drinking: boolean | null;
	}>({
		smoking: null,
		drinking: null,
	});
	const [education, setEducation] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	return (
		<PageWrapper>
			<View style={tw`flex w-full h-20 items-center justify-end`}>
				<View style={tw`flex w-full h-2 bg-gray-300 rounded-full mb-2`}>
					<LinearGradient
						colors={['#05C3DD', '#B14EFF']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={tw`w-[${progress}%] h-2 rounded-full`}
					/>
				</View>
			</View>
		</PageWrapper>
	);
}
