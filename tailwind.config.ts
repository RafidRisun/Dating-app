/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // Enable dark mode
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1024px',
			},
			fontFamily: {
				poppinsLight: ['poppinsLight'],
				poppins: ['poppins'],
				poppinsMedium: ['poppinsMedium'],
				poppinsSemiBold: ['poppinsSemiBold'],
				poppinsBold: ['poppinsBold'],
			},
			colors: {
				blue: '#05C3DD',
				purple: '#B14EFF',
			},
		},
	},
	plugins: [],
};
