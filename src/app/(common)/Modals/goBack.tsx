import OneTimePaymentModal from '@/src/components/OneTimePaymentModa';
import React from 'react';

export default function GoBack() {
	return (
		<OneTimePaymentModal
			title="Go Back"
			subtitle="Go back to the last profile you passed."
			action={() => {}}
		/>
	);
}
