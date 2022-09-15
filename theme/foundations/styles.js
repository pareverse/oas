export default {
	global: {
		'*, *::before, *::after': {
			letterSpacing: 'inherit'
		},
		html: {
			scrollBehavior: 'smooth',
			lineHeight: 1.5,
			letterSpacing: '0.025rem'
		},
		body: {
			bg: 'bg-surface',
			color: 'subtle'
		},
		'*::placeholder': {
			opacity: 1,
			color: 'placeholder'
		}
	}
}
