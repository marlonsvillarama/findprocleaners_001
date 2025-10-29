import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    console.log('+load slug', slug);

	if (slug.toLowerCase() === 'new') { return {}; }
	
	/* let urlParams = url.searchParams.has('json');
	console.log('+load urlParams', urlParams);
	let { data } = await supabase.from("clients").select(`
		*,
		client_status (id, name)
	`)
	.eq('id', slug);
	let obj = data.length > 0 ? data[0] : {}; */
	// obj.edit = url.searchParams.has('edit');

	let { data } = await supabase.from("fpc_cities").select(`
		id,
		name,
		fpc_countries(id, name)
	`)
	.eq('country', '1')
	.order('name');
	console.log('server data', data);

	let city = data.find(d => d.name.toLowerCase().replaceAll(' ', '+') === slug);

	return {
		allCities: data,
        city,
		featured: [
			{
				id: '1',
				city: 'Queenstown',
				img: '',
				name: 'Queenstown Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://queenstowncleaningservices.co.nz/',
				rating: 5,
				reviews: 50,
				comment: 'Incredible results, proactive and efficient execution. Really happy with the results. Feel Aman worked hard to get the best results possible for me in a timely manner. So happy and grateful for the effort. Thank you so much. Megan'
			},
		],
		results: [
			{
				id: '1',
				city: 'Queenstown',
				img: '',
				name: 'Queenstown Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://queenstowncleaningservices.co.nz/',
				rating: 5,
				reviews: 50,
				comment: 'Incredible results, proactive and efficient execution. Really happy with the results. Feel Aman worked hard to get the best results possible for me in a timely manner. So happy and grateful for the effort. Thank you so much. Megan'
			},
			{
				id: '2',
				city: 'Palmerston North',
				img: '',
				name: 'Palmerston North Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://www.superstarcleaning.biz/',
				rating: 5,
				reviews: 14,
				comment: 'We recently bought our first home and wanted to make sure that it was professionally cleaned before we moved in. The team was extremely professional and did a stellar job. Very friendly staff, and at a reasonable price as well. Would definitely recommend!'
			},
			{
				id: '3',
				city: 'Auckland',
				img: '',
				name: 'Auckland Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://www.purevistacleaninglimited.co.nz/',
				rating: 4.9,
				reviews: 15,
				comment: 'I am happy to share my recommendation for Swan Cleaning in Cromwell, New Zealand. Martina and her team exceeded all my expectations during the final cleaning of our house. Their meticulous attention to detail ensured that every nook and...'
			},
			{
				id: '1',
				city: 'Queenstown',
				img: '',
				name: 'Queenstown Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://queenstowncleaningservices.co.nz/',
				rating: 5,
				reviews: 50,
				comment: 'Incredible results, proactive and efficient execution. Really happy with the results. Feel Aman worked hard to get the best results possible for me in a timely manner. So happy and grateful for the effort. Thank you so much. Megan'
			},
			{
				id: '2',
				city: 'Palmerston North',
				img: '',
				name: 'Palmerston North Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://www.superstarcleaning.biz/',
				rating: 5,
				reviews: 14,
				comment: 'We recently bought our first home and wanted to make sure that it was professionally cleaned before we moved in. The team was extremely professional and did a stellar job. Very friendly staff, and at a reasonable price as well. Would definitely recommend!'
			},
			{
				id: '3',
				city: 'Auckland',
				img: '',
				name: 'Auckland Cleaning Co.',
				description: 'This is the default description',
				phone: '020 4185 7160',
				email: 'contact@cleaningco.com',
				website: 'https://www.purevistacleaninglimited.co.nz/',
				rating: 4.9,
				reviews: 15,
				comment: 'I am happy to share my recommendation for Swan Cleaning in Cromwell, New Zealand. Martina and her team exceeded all my expectations during the final cleaning of our house. Their meticulous attention to detail ensured that every nook and...'
			},
		]
    };

	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }
	// error(404, 'Not found');
}