import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import Site from '@/site';
import '@/main.css';
import '@mantine/core/styles.css';
import { themeApp } from '@/config/mantine';

ReactDOM.createRoot(document.getElementById('webform')!).render(
	<React.StrictMode>
		<MantineProvider theme={themeApp}>
			<Site />
		</MantineProvider>
	</React.StrictMode>
);
