<script>
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import FeaturedProducts from "$lib/components/root/featured-products.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Header from "$lib/components/root/header.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import LatestArticles from "$lib/components/root/latest-articles.svelte";
    import Region from "$lib/components/root/region.svelte";
    import Section from "$lib/components/root/section.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    // import regions from "$lib/data/regions.js";

    import {
        BrushCleaning,
        ChevronDown,
        ChevronRight
    } from "@lucide/svelte";

    let { data } = $props();
    let {
        cities,
        regions
        // featured,
        // products
    } = data;

    const searchByCity = () => {};
</script>

<!-- <svelte:head>
    <title>FindProCleaners - Find the best cleaners near you</title>
    <meta name="description" content="Find the best professional cleaners within your area.">
</svelte:head> -->

<Seo />

<div class="grid gap-12 md:gap-24 bg-background-light">
    <Hero subtitle="Discover the best professional cleaning services in your city."
        {data} search={true} {cities} />

    <Section title="Why Hire Professional Cleaners?">
        {#snippet content()}
            <div class="flex gap-8 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    While many New Zealanders take pride in keeping their spaces tidy, the reality of modern life—with demanding work schedules, family commitments, and the desire to make the most of our beautiful outdoors—often leaves little time for thorough cleaning.
                </p>
            </div>

            <div class="flex gap-8 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    Our climate, with its mix of humidity in the north and dampness in many regions, can also create unique challenges such as mould growth, especially in older homes with limited insulation.
                </p>
            </div>

            <div class="flex gap-8 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    This makes regular, professional cleaning not just a luxury, but sometimes a necessity for maintaining a healthy home environment!
                </p>
            </div>
        {/snippet}
    </Section>

    <Section title="Search Professional Cleaners by Region">
        {#snippet content()}
            <div class="grid categories justify-between gap-12 border-0 border-gray-500">
                {#each regions as region}
                    <a href="/professional-cleaners-in-{region.slug}"
                        class="grid rounded-md shadow-md bg-gray-200/70 hover:bg-gray-200 duration-[100ms]"
                        alt="Professional Cleaners in {region.name}"
                        target="_self"
                    >
                        <div class="h-[200px] border-0 border-red-500 home-cleaning rounded-t-md"
                            style="background-image: url(/images/regions/{region.image_path}); background-size: cover;"></div>
                        <div class="flex justify-center pt-1 pb-2 rounded-b-md">{region.name}</div>
                    </a>
                {/each}
            </div>
        {/snippet}
    </Section>

    <Section title="For Kiwis Across the Country">
        {#snippet content()}
            <div class="grid gap-4 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    Professional cleaning services have become increasingly popular across New Zealand as people recognise the value of their time and the expertise that trained cleaners bring.
                </p>
            </div>

            <div class="flex gap-8 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    Whether you're a busy professional in Wellington, a family in Hamilton juggling work and school runs, or a retiree in Nelson wanting to maintain your home without the physical strain, professional cleaners offer tailored solutions to meet diverse needs.
                </p>
            </div>

            <div class="flex gap-8 items-center">
                <p class="font-light tracking-[0.25px] leading-[1.75rem]">
                    From regular domestic cleaning and deep cleans to specialised services like carpet cleaning, window washing, and end-of-tenancy cleans, these professionals use commercial-grade equipment and products that achieve results beyond what's possible with standard household supplies.
                </p>
            </div>
        {/snippet}
    </Section>
    
    <!-- <Section title="Search Professional Cleaners by Category">
        {#snippet content()}
            <div class="grid categories justify-between gap-12 border-0 border-gray-500">
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category home-cleaning rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Home</div>
                </a>
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category commercial rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Commercial</div>
                </a>
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category pressure-wash rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Pressure Wash</div>
                </a>
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category carpet rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Carpet & Upholstery</div>
                </a>
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category window rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Window</div>
                </a>
                <a href="/" class="grid rounded-md shadow-md border bg-green-700/80 hover:bg-green-700 duration-[100ms]">
                    <div class="h-[200px] border-0 border-red-500 category vehicles rounded-t-md"></div>
                    <div class="flex justify-center pt-1 pb-2 text-white rounded-b-md">Vehicles</div>
                </a>
            </div>
        {/snippet}
    </Section> -->

    <Section title="Frequently Asked Questions">
        {#snippet content()}
        <FAQ />
        {/snippet}
    </Section>
    <!-- </div> -->

    <!-- {#if data.featured.length > 0}
        <Featured { data } />
    {/if} -->

    <!-- <LatestArticles /> -->

    <!-- <FeaturedProducts { data } /> -->

    <!-- <CitiesList { data } /> -->

    <!-- <Footer /> -->
</div>

<style>
    /* .categories {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    } */
    .category {
        background-size: cover;
        height: 240px;
    }
    .home-cleaning {
        background-image: url('/images/home_cleaning.jpg');
    }
    .commercial {
        background-image: url('/images/commercial.jpg');
    }
    .pressure-wash {
        background-image: url('/images/pressure_wash.jpg');
    }
    .carpet {
        background-image: url('/images/carpet.jpg');
    }
    .window {
        background-image: url('/images/window.jpg');
    }
    .vehicles {
        background-image: url('/images/vehicle.jpg');
    }
    .faq {
        font-family: 'Noto Serif', serif;
    }
    .categories,
    .regions {
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
</style>