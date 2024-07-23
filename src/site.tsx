import { Box, Image, Stack } from '@mantine/core';
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
				<FormChoose
					className={styles.form_choose}
					onSubmit={handleGform}
				/>
				{!!gform ? (
					<Box className={styles.gform}>
						<FormIframe id={gform} />
					</Box>
				) : null}
				<Stack gap='xs'>
					<Image
						src='/images/banner.jpeg'
						loading='lazy'
					/>
					{/* <Title ta='center'>Pembentangan Benda - benda Peninggalan Rasulullah SAW</Title>
					<Text ta='center'>
						Balai Adat LAMR, Jalan Diponegoro 39 Pekanbaru <br />
						9 - 18 Agustus 2024 M / 5 - 14 Safar 1446 H
					</Text> */}
				</Stack>
			</Stack>
		</div>
	);
}
