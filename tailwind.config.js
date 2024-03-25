/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				main: ['ui-sans-serif', 'system-ui', 'Neon']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				app: {
					primary: 'DarkRed',
					'primary-content': 'WhiteSmoke',
					secondary: 'DarkRed',
					'secondary-content': 'DarkRed',
					accent: '#008080',
					'accent-content': 'WhiteSmoke',
					neutral: 'Black',
					'neutral-content': 'WhiteSmoke',
					'neutral-content': 'WhiteSmoke',
					info: '#53C0F3',
					'info-content': '#032230',
					success: '#71EB95',
					'success-content': '#062d12',
					warning: '#EACE6C',
					'warning-content': '#43370a',
					error: '#EC8C78',
					'error-content': '#43130a',
					'--rounded-btn': '0.2rem',
					'base-content': '#282828',
					'base-100': 'WhiteSmoke',
					'base-200': '#d9d9d9', // two shade darker than base-100
					'base-300': '#bfbfbf' // two shades darker than base-100
				}
			}
		]
	}
};
