import {
	Button,
	Checkbox,
	Input,
	NumberInput,
	Paper,
	Popover,
	Select,
	Table,
	TextInput,
	createTheme,
} from '@mantine/core';
import { MdOutlineCheck } from 'react-icons/md';

const themeApp = createTheme({
	breakpoints: {
		xs: '360px',
		sm: '600px',
		md: '900px',
		lg: '1280px',
		xl: '1440px',
	},
	colors: {
		primary: [
			'#e7fcf3',
			'#d9f3e8',
			'#b6e4d0',
			'#8fd5b6',
			'#6fc8a0',
			'#59c092',
			'#44b483',
			'#3ca578',
			'#309369',
			'#1e8059',
		],
	},
	primaryColor: 'primary',
	fontFamily:
		'Plus Jakarta Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
	headings: {
		fontFamily:
			'Plus Jakarta Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
		sizes: {
			h1: {
				fontSize: '2.25rem',
			},
			h2: {
				fontSize: '1.875rem',
			},
			h3: {
				fontSize: '1.5rem',
			},
			h4: {
				fontSize: '1.25rem',
			},
			h5: {
				fontSize: '1.125rem',
			},
			h6: {
				fontSize: '1rem',
			},
		},
	},
	components: {
		InputWrapper: Input.Wrapper.extend({
			defaultProps: {
				inputWrapperOrder: ['label', 'input', 'description'],
			},
		}),
		Input: Input.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		TextInput: TextInput.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		NumberInput: NumberInput.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		Checkbox: Checkbox.extend({
			defaultProps: {
				radius: 'sm',
				icon: MdOutlineCheck,
			},
		}),
		Select: Select.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		Button: Button.extend({
			defaultProps: {
				size: 'md',
			},
		}),
		Paper: Paper.extend({
			defaultProps: {
				radius: 'md',
			},
		}),
		Popover: Popover.extend({
			defaultProps: {
				radius: 'md',
			},
		}),
		Table: Table.extend({
			defaultProps: {
				fz: 'md',
			},
		}),
	},
	cursorType: 'pointer',
});

export { themeApp };
