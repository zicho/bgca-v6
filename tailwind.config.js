/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#292524',
				light: '#f5f5f4'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['garden'],
					primary: 'DarkRed',
					secondary: 'DarkRed',
					'secondary-content': 'DarkRed',
					info: '#0091D5',
					success: '#6BB187',
					warning: '#DBAE59',
					error: '#AC3E31',
					'--rounded-box': '0.25rem',
					'--rounded-btn': '.125rem',
					'--rounded-badge': '.125rem'
				}
			}
		]
	}
};
