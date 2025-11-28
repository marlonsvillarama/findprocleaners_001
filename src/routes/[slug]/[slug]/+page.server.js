import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { supabase } from "$lib/supabaseClient";
import { error, redirect } from '@sveltejs/kit';

// async function getCities (id) {
//     let { data } = await supabase.from("fpc_regions").select(`
//         id,
//         name,
//         cities:fpc_cities (id, name)
//     `)
//     .eq('slug', id)
//     .order('name');
//     console.log(`*** /cleaners getCities id = "${id}"; count = ${(data || []).length}`, (data || ['error'])[0]);

//     return data || [];
// };

async function getRegions (slug) {
    let { data } = await supabase.from("fpc_regions").select(`
        id,
        name,
        slug,
        image_path,
        page_title,
        page_intro,
        cities:fpc_cities (id, name)
    `)
    .eq('is_active', 'true')
    .order('name');

    // console.log('*** /cleaners getRegion data', data);
    return data;
}

async function getServiceTypes (slug) {
    let { data } = await supabase.from("fpc_service_types").select(`
        id,
        name,
        slug
    `)
    .order('name');

    // console.log('*** /cleaners getRegion data', data);
    return data;
}

async function getListings ({ cities }) {
    console.log(`*** getListings cities => `, cities);
    let { data } = await supabase.from("fpc_listing_cities").select(`
        id,
        city:fpc_cities (
            id,
            name
        ),
        data:fpc_listings (
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
            image_path,
            multiple_cities,
            services:fpc_listing_service_types (
                id,
                listing,
                service_type:fpc_service_types (
                    id,
                    name,
                    slug
                )
            ),
            reviews:fpc_reviews (
                id,
                author_title,
                review_text
            )
        )
    `)
    .in('city', cities);
    console.log('server getListings', data);

    if (data) {
        data.forEach(d => d.image_url = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/fpc_listings/${d.image_path}`)
    }
    return data || [];
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    const PREFIX = '/professional-cleaners-in-';

    console.log('url path', url.pathname);
    console.log('url sort', url.searchParams.get('sort'));
    if (url.pathname.toLowerCase().indexOf(PREFIX) < 0) {
        redirect(302, '/not-found');
    }

    let regionId = url.pathname.slice(PREFIX.length);
    regionId = regionId.slice(0, regionId.indexOf('/'));
    
    let allRegions = await getRegions(regionId);
    let region = allRegions.find(d => d.slug === regionId);
    // console.log(`*** ${regionId} region`, region);

    if (!region) { redirect(302, '/not-found'); }
    if (region.length <= 0) { redirect(302, '/not-found'); }

    region.cities.forEach(city => city.slug = city.name.toLowerCase().replaceAll(' ', '-'));

    let slug = params.slug;
    if (slug.toLowerCase() !== 'all' && region.cities.map(r => r.slug).indexOf(slug) < 0) {
        redirect(302, '/not-found');
    }
    let serviceTypes = await getServiceTypes();
    let cities = slug === 'all' ? region.cities : region.cities.filter(c => c.slug === slug)
    console.log('*** slug/slug cities', cities);
    let listings = await getListings({ cities: cities.map(c => c.id) });

    return {
        allRegions,
        listings,
        params: url.searchParams,
        region,
        serviceTypes,
        slug
        // path: slug
    };
}
