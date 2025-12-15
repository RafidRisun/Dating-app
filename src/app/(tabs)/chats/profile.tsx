import ProfileComponent from '@/src/components/ProfileComponent';
import WrapperWithHeader from '@/src/components/WrapperWithHeader';
import React from 'react';

export default function Profile() {
	return (
		<WrapperWithHeader name="Chat">
			<ProfileComponent />
		</WrapperWithHeader>
	);
}
