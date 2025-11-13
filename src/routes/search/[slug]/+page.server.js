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

async function getFeatured (options) {
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
	.eq('is_featured', true)
	.or(`city.eq.${options.slug}`, 'city.eq.null')
	.not('website', 'eq', null)
	.range(0, 2)
	.order('rating_ave', { ascending: false })
	.order('review_count', { ascending: false })
	.order('name');

	data.forEach(d => d.image_url = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/fpc_listings/${d.image_path}`)
	return data;
};

async function getListings (options) {
	const PAGE_SIZE = 20;
	const PAGE_START = PAGE_SIZE * ((options.page || 1) - 1);
	const PAGE_END = PAGE_START + PAGE_SIZE - 1;
	console.log('getListings', { PAGE_SIZE, PAGE_START, PAGE_END });

	let { count, error } = await supabase.from("fpc_listings")
		.select('id', { count: 'exact', head: true })
		.eq('is_active', true)
		.not('website', 'eq', null);
		// .or(`city.eq.${options.slug}`, 'city.eq.null')

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
	.eq('is_featured', false)
	.or(`city.eq.${options.slug}`, 'city.eq.null')
	.not('website', 'eq', null)
	.range(PAGE_START, PAGE_END)
	.order('name');
	// .or(`city.is.null, city.eq.${city.id.toString()}`)
	// console.log('server getListings', data);

	data.forEach(d => d.image_url = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/fpc_listings/${d.image_path}`)
	console.log('getListings return...', {
		count,
		hasNext: PAGE_END < count,
		hasPrevious: PAGE_START >= PAGE_SIZE
	});
	return {
		count,
		data,
		hasNext: PAGE_END < count,
		hasPrevious: PAGE_START >= PAGE_SIZE,
		firstIndex: PAGE_START + 1,
		lastIndex: Math.min(PAGE_END + 1, count)
	};
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    let slug = params.slug;
    // console.log('+load slug', slug);

	// if (slug.toLowerCase() === 'new') { return {}; }
	
	/* let urlParams = url.searchParams.has('page');
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

	let pageParam = url.searchParams.get('page') || 1;

	let featured = await getFeatured({ slug });
    let listings = await getListings({ page: pageParam, slug });
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
        city: city || { name: slug },
		count: listings.count,
        featured,
		firstIndex: listings.firstIndex,
		hasNext: listings.hasNext,
		hasPrevious: listings.hasPrevious,
		lastIndex: listings.lastIndex,
		results: listings.data.filter(d => d.is_featured === false),
		page: pageParam,
		slug
    };
}