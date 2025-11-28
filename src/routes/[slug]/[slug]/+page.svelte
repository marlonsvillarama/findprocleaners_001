<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import RegionsSection from "$lib/components/root/regions-section.svelte";
    import SearchResults from "$lib/components/root/search-results.svelte";
    import Section from "$lib/components/root/section.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    let { data } = $props();
    let {
        allRegions,
        listings,
        params,
        region,
        serviceTypes,
        slug
    } = data;
    // console.log('slug/slug region', region);

    let title = $derived.by(() =>
        data.slug === 'all' ? region.name : region.cities.find(c => c.slug === slug).name
    );
</script>

<Seo
    title="Professional Cleaners In {title}"
/>

<div class="pt-4 mb-12 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
    <h1 class="text-4xl text-green-800 mb-4">Professional Cleaners in {title}</h1>
    <div class="grid gap-8 md:gap-12 bg-background-light">
        <!-- {slug} -->

        <CitiesList data={region.cities} />

        <SearchResults {listings} />
         
        <CitiesList data={region.cities} />
    </div>
</div>

<div class="grid gap-12">
    <Section title="Search Professional Cleaners by Region">
        {#snippet content()}
            <RegionsSection data={allRegions} />
        {/snippet}
    </Section>

    <Section title="Frequently Asked Questions">
        {#snippet content()}
            <FAQ place={region.name} />
        {/snippet}
    </Section>
</div>

<style>
    h1 {
        font-family: 'Noto Serif', serif;
    }
</style>