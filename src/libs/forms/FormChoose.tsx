import { Button, Center, Select, SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { TbFileSearch } from 'react-icons/tb';

const dataChooseDay = [
	{
		label: 'Friday',
		value: 'friday',
	},
	{
		label: 'Saturday',
		value: 'saturday',
	},
	{
		label: 'Sunday',
		value: 'sunday',
	},
];

const dataChooseSession = [
	{
		label: 'Morning',
		value: 'morning',
	},
	{
		label: 'Afternoon',
		value: 'afternoon',
	},
	{
		label: 'Evening',
		value: 'evening',
	},
];

const SchemaChoose = z.object({
	day: z.string().refine((value) => !!dataChooseDay.find((chooseDay) => chooseDay.value === value)),
	session: z.string().refine((value) => !!dataChooseSession.find((chooseSession) => chooseSession.value === value)),
});

export type PayloadChoose = z.infer<typeof SchemaChoose>;

type Props = {
	className?: string;
	onSubmit: (values: PayloadChoose) => void;
};

export default function FormChoose({ className, onSubmit }: Props) {
	const form = useForm<PayloadChoose>({
		validateInputOnBlur: true,
		validate: zodResolver(SchemaChoose),
	});

	return (
		<form
			className={className}
			onSubmit={form.onSubmit(onSubmit)}
		>
			<SimpleGrid cols={{ base: 1, sm: 2 }}>
				<Select
					label='Day'
					data={dataChooseDay}
					{...form.getInputProps('day')}
				/>
				<Select
					label='Session'
					data={dataChooseSession}
					{...form.getInputProps('session')}
				/>
			</SimpleGrid>
			<Center mt='sm'>
				<Button
					type='submit'
					size='sm'
					rightSection={<TbFileSearch />}
				>
					Search Form
				</Button>
			</Center>
		</form>
	);
}
