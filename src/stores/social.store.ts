import { readable } from 'svelte/store';

export const owner = readable({
	identification: {
		email: 'sylvainka12@gmail.com',
		firstName: 'Sylvain',
		lastName: 'Kadjo'
	},
	social: {
		github: 'https://github.com/sylvain12',
		linkedin: 'https://www.linkedin.com/in/sylvain-kadjo-374a4911b/',
		dribbble: 'https://dribbble.com/sylvain12',
		instagram: 'https://www.instagram.com/sylainka12/'
	}
});
