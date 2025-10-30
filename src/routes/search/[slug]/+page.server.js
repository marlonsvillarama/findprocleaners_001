import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    // console.log('+load slug', slug);

	// if (slug.toLowerCase() === 'new') { return {}; }
	
	/* let urlParams = url.searchParams.has('json');
	console.log('+load urlParams', urlParams);
	let { data } = await supabase.from("clients").select(`
		*,
		client_status (id, name)
	`)
	.eq('id', slug);
	let obj = data.length > 0 ? data[0] : {}; */
	// obj.edit = url.searchParams.has('edit');

	let citiesResponse = await supabase.from("fpc_cities").select(`
		id,
		name,
		fpc_countries(id, name)
	`)
	.eq('country', '1')
	.order('name');
	console.log('server citiesResponse data', citiesResponse.data);
	// let allCities = citiesResponse.data;

	let city = citiesResponse.data.find(d => d.name.toLowerCase().replaceAll(' ', '+') === slug);
	console.log('city', city);

	let listingsResponse = await supabase.from("fpc_listings").select(`
		id,
		name,
		description,
		website,
		email_1,
		email_2,
		phone_1,
		phone_2,
		is_active,
		is_featured,
		review_count,
		review_ave,
		image_path
	`)
	.or(`city.is.null, city.eq.${city.id.toString()}`)
	.eq('is_active', 'TRUE')
	.order('name');
	console.log('listingsResponse', listingsResponse);

	return {
		cities: citiesResponse.data,
        city: city || { name: slug },
		featured: listingsResponse.data.filter(d => d.is_featured === true),
		results: listingsResponse.data.filter(d => d.is_featured === false)
    };
}