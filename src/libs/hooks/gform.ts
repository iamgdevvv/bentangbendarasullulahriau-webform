import { useCallback, useState } from 'react';
import { gforms } from '@/config/gforms';
import { PayloadChoose } from '@/libs/forms/FormChoose';

const useFrameGform = () => {
	const [gform, setGform] = useState<keyof typeof gforms | null>(null);

	const handleGform = useCallback(
		(values: PayloadChoose) => {
			const { day, session } = values;

			if (day === 'friday' && session === 'morning') {
				return setGform('day1_sess1');
			}

			return setGform('day1_sess2');
		},
		[setGform]
	);

	return { gform, handleGform };
};

export { useFrameGform };
