/** @type {import('tailwindcss').Config} */
import flowBitePlugin from 'flowbite/plugin'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				primary: '#B16841',
				'primary-dark': '#66440D',
				'main-analogous': '#b14152',
				'secondary-analogous': '#b1a041',
				complementary: '#418ab1',
				'p-white': '#fbfbfb',
  			'p-black': '#1D1305',
				secondary: '#592418',
				'dark-blue': '#141c2e'
			}
		},
	},
	plugins: [flowBitePlugin],
}
