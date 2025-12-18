import ProfileComponent from '@/src/components/ProfileComponent';
import { useTheme } from '@/src/lib/ThemeContext';
import React from 'react';

import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import { useRouter } from 'expo-router';

export default function Profile() {
	const router = useRouter();
	const { theme } = useTheme();
	return (
		<WrapperWithHeader name="Likes">
			<ProfileComponent tab="likes" />
		</WrapperWithHeader>
	);
}
