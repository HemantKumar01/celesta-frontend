/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			boxShadow: {
				custom: '0 5px 25px rgba(355, 333, 250, 0.775)',
				hover: '0 0px 40px rgba(350, 333, 250, 0.775)',
			},
		},
	},
	plugins: [],
};
