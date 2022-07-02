import { createTheme } from '@mui/material';

export const Theme = createTheme({
	palette: {
		primary: {
			main: '#222831',
		},
		secondary: {
			main: '#393E46',
		},
		complementary1: {
			main: '#00ADB5',
		},
		complementary2: {
			main: '#EEEEEE',
		},
		text: {
			primary: '#00ADB5',
			secondary: '#EEEEEE',
		},
	},
	typography: {
		fontFamily: 'Inter',
	},
});
