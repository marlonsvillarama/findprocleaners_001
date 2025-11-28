<script>
    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
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
    // console.log('slug/slug serviceTypes', serviceTypes);

    let title = $derived.by(() =>
        data.slug === 'all' ? region.name : region.cities.find(c => c.slug === slug).name
    );

    let selectedFilters = $state(serviceTypes ? serviceTypes.map(s => s.slug) : []);
    // $effect(() => console.log('selectedFilters', selectedFilters));

    let searchResults = $state(listings);
    const filterResults = () => {
        // console.log('searchResults', searchResults);    
        searchResults = listings.filter(d => {
            let types = d.data.services.map(s => s.service_type.slug);
            // console.log('*** d', d);
            // console.log('*** selectedFilters', selectedFilters);
            // console.log(' => types', types);
            let intersection = selectedFilters.filter(f => types.includes(f));
            // console.log(` => intersection ==> ${intersection.length > 0}`, intersection);

            return intersection.length > 0;
        });
        // console.log('searchResults', searchResults);
    };

    const resetFilters = () => {
        selectedFilters = serviceTypes.map(s => s.slug);
        filterResults();
    };

    const clearFilters = () => {
        selectedFilters = [];
        filterResults();
    };
</script>

<Seo
    title="Professional Cleaners In {title}"
/>

<div class="pt-4 mb-24 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
    <h1 class="text-4xl text-green-800 mb-4">Professional Cleaners in {title}</h1>
    
    <div class="grid gap-4 md:gap-12 bg-background-light">
        <CitiesList data={region.cities} />

        <SearchResults listings={searchResults} onresetfilters={resetFilters} onclearfilters={clearFilters}>
            {#snippet filters()}
                <div class="flex flex-wrap gap-2 items-center w-full border-0 border-gray-200">
                    {#each serviceTypes as st}
                        <div class="tile border rounded-sm flex items-center gap-2 relative px-3 py-1 text-sm cursor-pointer">
                            <label for={st.slug} class="cursor-pointer">
                                <span>{st.name}</span>
                            </label>
                            <input type="checkbox" name={st.slug} id={st.slug} bind:group={selectedFilters} value={st.slug}
                                onchange={filterResults}
                                class="rounded-sm cursor-pointer outline-none border hover:bg-gray-100">
                        </div>
                    {/each}
                    <!-- <div class="tile border rounded-sm flex items-center gap-2 relative px-3 py-1 text-sm cursor-pointer">
                        <label for="commercial" class="cursor-pointer">
                            <span>Commercial</span>
                        </label>
                        <input type="checkbox" name="commercial" id="commercial"
                            class="rounded-sm cursor-pointer outline-none border hover:bg-gray-100">
                    </div>
                    <div class="tile border rounded-sm flex items-center gap-2 relative px-3 py-1 text-sm cursor-pointer">
                        <label for="pressure-wash" class="cursor-pointer">
                            <span>Pressure Wash</span>
                        </label>
                        <input type="checkbox" name="pressure-wash" id="pressure-wash"
                            class="rounded-sm cursor-pointer outline-none border hover:bg-gray-100">
                    </div> -->
                </div>
                <!-- selected: {JSON.stringify(selectedFilters)} -->
            {/snippet}
        </SearchResults>
        
        <CitiesList data={region.cities} />
    </div>
</div>

<div class="grid gap-24">
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
    /* .tile input[type=checkbox] {
        position: relative;
        height: 100%;
        width: 100%;
        transition: background-color 100ms ease-in-out;
    }
    .tile input[type=checkbox]:after {
        position: absolute;
        font-size: 0.875rem;
        content: '\f111';
        top: 10px;
        left: 10px;
    }
    .tile input[type=checkbox]:checked {
        background-color: #ccc;
    }
    .tile input[type=checkbox]:checked:after {
        content: '\f058';
    } */
</style>