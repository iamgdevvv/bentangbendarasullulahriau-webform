import { Box, Stack, Text, Title } from '@mantine/core';
import { useFrameGform } from '@/libs/hooks/gform';
import FormChoose from '@/libs/forms/FormChoose';
import FormIframe from '@/libs/components/FormIframe';
import styles from './site.module.css';

export default function Site() {
	const { gform, handleGform } = useFrameGform();

	return (
		<div className={styles.site}>
			<Stack
				gap='xl'
				className={styles.inner_site}
			>
				<Stack gap='xs'>
					<Title ta='center'>Lorem ipsum dolor sit amet</Title>
					<Text ta='center'>
						Maecenas nunc tortor, imperdiet non odio at, porttitor accumsan nisi. Quisque ac arcu augue.
						Praesent vestibulum est vitae ultricies sollicitudin. Mauris egestas arcu nisl, et ornare odio
						iaculis sit amet.
					</Text>
				</Stack>
				<FormChoose
					className={styles.form_choose}
					onSubmit={handleGform}
				/>
				{!!gform ? (
					<Box className={styles.gform}>
						<FormIframe id={gform} />
					</Box>
				) : null}
			</Stack>
		</div>
	);
}
