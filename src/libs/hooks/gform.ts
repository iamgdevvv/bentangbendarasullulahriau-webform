import { useCallback, useState } from 'react';
import { PayloadChoose } from '@/libs/forms/FormChoose';

const useFrameGform = () => {
	const [gform, setGform] = useState<string | null>(null);

	const handleGform = useCallback(
		(values: PayloadChoose) => {
			const { day, session } = values;

			return setGform(`day${day}_sess${session}`);
		},
		[setGform]
	);

	return { gform, handleGform };
};

export { useFrameGform };
