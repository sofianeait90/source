/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./Components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primaryBg: '#1F2A45',
			},
			spacing: {
				'195': '48.5rem',
				'300': '75rem',
			},
		},
	},
	plugins: [],
};
