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
        city,
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
    .eq('is_active', 'TRUE')
    .eq('is_featured', 'TRUE')
    .order('name');
    // .or(`city.is.null, city.eq.${city.id.toString()}`)
    // console.log('server getListings', data);

    return data;
};

async function getProducts () {
    let { data } = await supabase.from("fpc_products").select(`
        id,
        name,
        description,
        image_path
    `);
    console.log('server getProducts data', data);

    return data;
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    let slug = params.slug;

    // let citiesResponse = await supabase.from("fpc_cities").select(`
    //     id,
    //     name,
    //     fpc_countries(id, name)
    // `)
    // .eq('country', '1')
    // .order('name');

    // let cities = citiesResponse.data;
    // console.log('server cities', cities);
    let cities = await getCities();
    // let city = allCities.find(d => d.name.toLowerCase().replaceAll(' ', '+') === slug);
    // console.log('city', city);

    let listings = await getListings();
    let products = await getProducts();

    return {
        cities,
        // city: city || { name: slug },
        featured: listings.map(d => {
            return {
                ...d,
                city: cities.find(c => !!c.id === true && c.id.toString() === d.city)
            };
        }),
        products
        // results: listingsResponse.data.filter(d => d.is_featured === false)
    };
}