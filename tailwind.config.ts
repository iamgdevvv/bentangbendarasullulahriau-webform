/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import { fontFamily, transitionDuration } from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		container: {
			center: true,
			screens: {
				min: '720px',
			},
			padding: '16px'
		},
		extend: {
			colors: {
				primary: {
					50: '#e7fcf3',
					100: '#d9f3e8',
					200: '#b6e4d0',
					300: '#8fd5b6',
					400: '#6fc8a0',
					500: '#59c092',
					600: '#44b483',
					700: '#3ca578',
					800: '#309369',
					900: '#1e8059',
					DEFAULT: '#44b483',
				},
			},
			screens: {
				sm: { min: '600px' },
				md: { min: '900px' },
				lg: { min: '1280px' },
				xl: { min: '1600px' },
				'<sm': { max: '699px' },
				'<md': { max: '899px' },
				'<lg': { max: '1279px' },
				'<xl': { max: '1599px' },
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', ...fontFamily.sans],
			},
		},
		transitionTimingFunction: {
			DEFAULT: 'linear',
		},
		transitionDuration: {
			...transitionDuration,
			DEFAULT: '200ms',
		},
	},
} satisfies Config;
