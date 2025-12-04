import OneTimePaymentModal from '@/src/components/OneTimePaymentModa';
import { useRouter } from 'expo-router';
import React from 'react';

export default function SendDM() {
	const router = useRouter();
	return (
		<OneTimePaymentModal
			title="Send a DM"
			subtitle="Skip the line and send a DM directly. Your message will be seen first by this user."
			action={() => {
				router.push('/(tabs)/swipe/dm');
			}}
		/>
	);
}
