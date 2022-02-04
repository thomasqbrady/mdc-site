module.exports = {
	important: true,
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
			'serif': ['Montserrat', 'ui-serif', 'Georgia'],
			'mono': ['Montserrat', 'ui-monospace', 'SFMono-Regular'],
			'display': ['Montserrat', 'Oswald'],
			'body': ['Montserrat', '"Open Sans"'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
	require('@tailwindcss/typography'),
	require('daisyui'),
	],
	daisyui: {
		themes: [
		{
			'mdc': {
				'primary': '#ff006f',
				'primary-focus': '#eb0066',
				'primary-content': '#ffffff',

				'secondary': '#fb5609',
				'secondary-focus': '#ec4d04',
				'secondary-content': '#ffffff',

				'accent': '#41d2bd',
				'accent-focus': '#30cfb7',
				'accent-content': '#ffffff',

				'neutral': '#242423',
				'neutral-focus': '#1a1a19',
				'neutral-content': '#ffffff',

				'base-100': '#8236ec',
				'base-200': '#7724eb',
				'base-300': '#6c15e5',
				'base-content': '#ffffff',

				'info': '#2094f3',
				'success': '#29bf12',
				'warning': '#ffbe0a',
				'error': '#d9263e',
			}
		}
		]
	}
}