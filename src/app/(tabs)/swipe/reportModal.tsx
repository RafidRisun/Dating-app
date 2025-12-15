import ReportModalComponent from '@/src/components/ReportModalComponent';
import React from 'react';

export default function ReportModal() {
	const [selectedReason, setSelectedReason] = React.useState<string | null>(
		null
	);
	return (
		<ReportModalComponent
			selectedReason={selectedReason}
			setSelectedReason={setSelectedReason}
		/>
	);
}
