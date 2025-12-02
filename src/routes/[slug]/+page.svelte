<script>
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import Featured from "$lib/components/root/featured.svelte";
    import Footer from "$lib/components/root/footer.svelte";
    import Header from "$lib/components/root/header.svelte";
    import Hero from "$lib/components/root/hero.svelte";
    import RegionsSection from "$lib/components/root/regions-section.svelte";
    import SearchMoreLink from "$lib/components/root/search-more-link.svelte";
    import Section from "$lib/components/root/section.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    import {
        // BrushCleaning,
        ChevronDown,
        ChevronRight
    } from "@lucide/svelte";
    
    let {
        data
    } = $props();
    let {
        allRegions,
        listings,
        path,
        region
    } = data;
    console.log(`+page slug=${region.slug}; listings`, listings);

    let page_content = region.page_intro.split('|');
    let featured = listings.filter(d => d.data.is_featured === true);
    let nonFeatured = listings.filter(d => d.data.is_featured === false);
    
    listings.sort((a, b) => parseFloat(b.data.rating_ave || '0') - parseFloat(a.data.rating_ave || '0'));
    console.log('listings SORTED BY rating_ave', listings);
    let highestRated = listings.slice(0, 3);

    listings.sort((a, b) => parseInt(b.data.review_count || '0') - parseInt(a.data.review_count || '0'));
    console.log('listings SORTED BY review_count', listings);
    let mostReviewed = listings.slice(0, 3);
</script>

<Seo
    title="Find Professional Cleaners In {region.name}"
/>

<div class="grid gap-12 md:gap-24 bg-background-light">
    <Hero title="Find Professional Cleaners in {region.name}" image="regions/{region.image_path}" />

    <!-- <div class="flex items-center justify-between"> -->
    <!-- <div class="md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500 grid gap-6">
        <a href="#featured" title="Featured Cleaners"
            class="text-blue-500 underline hover:text-blue-700">
            Featured Cleaners
        </a>
    </div> -->

    <Section title={region.page_title}>
        {#snippet content()}
            {#each page_content as pc}
                <div class="grid items-center">
                    <p class="font-light tracking-[0.25px] leading-[1.75rem]">{pc}</p>
                </div>
            {/each}
        {/snippet}
    </Section>

    <Section>
        {#snippet content()}
            <CitiesList data={region} />
        {/snippet}
    </Section>

    {#if listings.length > 0}
        {#if featured.length > 0}
        <!-- <a id="featured"> -->
        <Section title="Featured Cleaners">
            {#snippet content()}
                <Featured data={featured} />
                <SearchMoreLink link="{path}/all?sort=featured" />
            {/snippet}
        </Section>
        {/if}

        <Section title="Highest-Rated Cleaners">
            {#snippet content()}
                <Featured data={highestRated} />
                <SearchMoreLink link="{path}/all?sort=highest-rated" />
            {/snippet}
        </Section>

        <Section title="Most-Reviewed Cleaners">
            {#snippet content()}
                <Featured data={mostReviewed} />
                <SearchMoreLink link="{path}/all?sort=most-reviewed" />
            {/snippet}
        </Section>
    {/if}

    <Section title="Search Professional Cleaners by Region">
        {#snippet content()}
            <RegionsSection data={allRegions} />
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
            <FAQ place={region.name} />
        {/snippet}
    </Section>
</div>
