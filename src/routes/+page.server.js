import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

/* async function getCities () {
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
}; */

async function getRegions () {
    let { data } = await supabase.from("fpc_regions").select(`
        id,
        name,
        slug,
        image_path,
        page_title,
        page_intro,
        cities:fpc_cities (
            id,
            name,
            slug
        )
    `)
    .eq('is_active', 'true')
    .order('name');

    // console.log('getRegions data', data);
    return data;
}

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
}

async function getProducts () {
    let { data } = await supabase.from("fpc_products").select(`
        id,
        name,
        description,
        image_path,
        link
    `);
    // console.log('server getProducts data', data);

    return data;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    // let slug = params.slug;

    // let citiesResponse = await supabase.from("fpc_cities").select(`
    //     id,
    //     name,
    //     fpc_countries(id, name)
    // `)
    // .eq('country', '1')
    // .order('name');

    // let cities = citiesResponse.data;
    // console.log('server cities', cities);
    // let cities = await getCities();
    let regions = await getRegions();
    regions = regions.map(r => {
        return {
            ...r,
            cities: r.cities.map(c => {
                return {
                    ...c,
                    region: { id: r.id, name: r.name, slug: r.slug }
                };
            })
        };
    });
    let allCities = regions.reduce((sum, next) => [ ...sum, ...next.cities ], []);
    let allCityIds = [ ...new Set(allCities.map(c => c.id)) ];
    let cities = allCities.filter(c => allCityIds.includes(c.id));
    cities.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
        // ...new Set(regions.reduce((sum, next) => [...sum, ...next.cities ], []))
    // console.log('HOME +server cities', cities);
    // let city = allCities.find(d => d.name.toLowerCase().replaceAll(' ', '+') === slug);
    // console.log('city', city);
    // console.log('cities', cities);

    // let listings = await getListings();
    // console.log('listings', listings);
    // let products = await getProducts();
    // console.log('products', products);

    return {
        cities,
        regions
        // featured: listings.filter(d => d.is_featured === true),
        // city: city || { name: slug },
        // featured: listings.filter(d => d.is_featured === true).map(d => {
        //     return {
        //         ...d,
        //         city: cities.find(c => !!c.id === true && c.id.toString() === d.city)
        //     };
        // }),
        // products: products.slice(0, 4)
        // results: listingsResponse.data.filter(d => d.is_featured === false)
    };
}