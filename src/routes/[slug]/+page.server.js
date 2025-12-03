import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { supabase } from "$lib/supabaseClient";
import { error, redirect } from '@sveltejs/kit';
// import regions from '$lib/data/regions';

async function getCities (id) {
    let { data } = await supabase.from("fpc_regions").select(`
        id,
        name,
        cities:fpc_cities (id, name, slug)
    `)
    .eq('slug', id)
    .order('name');
    // console.log(`server getCities id = "${id}"; count = ${(data || []).length}`, (data || ['error'])[0]);

    return data || [];
};

async function getRegionListings ({ cities }) {
    // console.log(`*** getRegionListings cities => `, cities);
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
            )
        )
    `)
    .in('city', cities);
    // console.log('server getListings', data);

    if (data) {
        data.forEach(d => d.image_url = `${PUBLIC_SUPABASE_URL}/storage/v1/object/public/fpc_listings/${d.image_path}`)
    }
    return data || [];
};

/* async function getProducts () {
    let { data } = await supabase.from("fpc_products").select(`
        id,
        name,
        description,
        image_path,
        link
    `);
    // console.log('server getProducts data', data);

    return data;
}; */

async function getRegions (slug) {
    let { data } = await supabase.from("fpc_regions").select(`
        id,
        name,
        slug,
        image_path,
        page_title,
        page_intro,
        cities:fpc_cities (id, name, slug)
    `)
    .eq('is_active', 'true')
    .order('name');

    return data;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, url }) {
    const PREFIX = 'professional-cleaners-in-';
    let slug = params.slug;
    if (slug.toLowerCase().indexOf(PREFIX) < 0) {
        redirect(302, '/not-found');
    }

    let regionId = slug.slice(PREFIX.length);
    let allRegions = await getRegions(regionId);
    let region = allRegions.find(d => d.slug === regionId);
    console.log(`*** ${regionId} region`, region);

    if (!region) {
        redirect(302, '/not-found');
    }
    if (region.length <= 0) {
        redirect(302, '/not-found');
    }

    let listings = await getRegionListings({ cities: region.cities.map(c => c.id) });

    return {
        allRegions,
        listings,
        region,
        path: slug
    };
}
