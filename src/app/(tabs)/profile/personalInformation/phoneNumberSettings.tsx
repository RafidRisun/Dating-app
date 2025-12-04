import PhoneNumber from '@/src/components/SignUp/PhoneNumber';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import React from 'react';

export default function PhoneNumberSettings() {
	return (
		<WrapperWithHeader name="Phone Number">
			<PhoneNumber />
		</WrapperWithHeader>
	);
}
