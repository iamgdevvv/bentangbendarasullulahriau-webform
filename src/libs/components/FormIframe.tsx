import { useEffect, useState } from 'react';
import { Center, Loader } from '@mantine/core';
import { gforms } from '@/config/gforms';

type Props = {
	id: string;
	className?: string;
};

export default function FormIframe({ id, className = '' }: Props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			setLoading(true);
		}
	}, [id]);

	return (
		<>
			{loading ? (
				<Center>
					<Loader />
				</Center>
			) : null}
			<iframe
				src={gforms[id as keyof typeof gforms]}
				onLoad={() => {
					setLoading(false);
				}}
				className={className}
			></iframe>
		</>
	);
}
