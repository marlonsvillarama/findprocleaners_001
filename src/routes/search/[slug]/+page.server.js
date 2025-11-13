import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

async function getCities () {
	let { data } = await supabase.from("fpc_cities").select(`
		id,
		name,
		fpc_countries(id, name)
	`)
	.eq('country', '1')
	.order('name');

	// let cities = citiesResponse.data;
	// console.log('server getCities', data);

	return data;
};

async function getListings () {
	let { data } = await supabase.from("fpc_listings").select(`
		id,
		name,
		types,
		address_1,
		address_2,
		city,
		zip,
		website,
		email_1,
		email_2,
		phone_1,
		phone_2,
		is_active,
		is_featured,
		review_count,
		rating_ave,
		area_service,
		image_path
	`)
	.eq('is_active', true)
	// .eq('is_featured', false)
	.order('name');
	// .or(`city.is.null, city.eq.${city.id.toString()}`)
	// console.log('server getListings', data);

	data.forEach(d => d.image_url = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/fpc_listings/${d.image_path}`)
	return data;
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    // console.log('+load slug', slug);

	// if (slug.toLowerCase() === 'new') { return {}; }
	
	/* let urlParams = url.searchParams.has('json');
	// console.log('+load urlParams', urlParams);
	let { data } = await supabase.from("clients").select(`
		*,
		client_status (id, name)
	`)
	.eq('id', slug);
	let obj = data.length > 0 ? data[0] : {}; */
	// obj.edit = url.searchParams.has('edit');

	/* let citiesResponse = await supabase.from("fpc_cities").select(`
		id,
		name,
		fpc_countries(id, name)
	`)
	.eq('country', '1')
	.order('name'); */
	// console.log('server citiesResponse data', citiesResponse.data);
	// let allCities = citiesResponse.data;

    let cities = await getCities();
	let city = cities.find(d => d.name.toLowerCase().replaceAll(' ', '+') === slug);
	// console.log('city', city);

    let listings = await getListings();
	/* let listingsResponse = await supabase.from("fpc_listings").select(`
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
	.order('name'); */
	// console.log('listingsResponse', listingsResponse);

	return {
        cities,
        featured: listings.filter(d => d.is_featured === true),
		// cities: citiesResponse.data,
        city: city || { name: slug },
		// featured: listingsResponse.data.filter(d => d.is_featured === true),
		results: listings.filter(d => d.is_featured === false)
    };
}