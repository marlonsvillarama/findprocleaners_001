<script>
    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import FAQ from "$lib/components/root/faq.svelte";
    import RegionsSection from "$lib/components/root/regions-section.svelte";
    import SearchResults from "$lib/components/root/search-results.svelte";
    import Section from "$lib/components/root/section.svelte";
    import Seo from "$lib/components/root/seo.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    let { data } = $props();
    let {
        allRegions,
        listings,
        params,
        region,
        serviceTypes,
        slug,
        sort,
        url
    } = data;

    let title = $derived.by(() =>
        data.slug === 'all' ? region.name : region.cities.find(c => c.slug === slug).name
    );

    let sortMethod = $state('name');
    let selectedFilters = $state(serviceTypes ? serviceTypes.map(s => s.slug) : []);

    let searchResults = $state(listings);
    /* let searchResults = $derived.by(() => {
        let list = [...listings].sort((a, b) => {
            if (sortMethod === 'name') {
                return a.data[sortMethod] - b.data[sortMethod];
            }

            return b.data[sortMethod] - a.data[sortMethod];
        });
        console.log('SORTEDmlistigs', list);
        return list.filter(d => {
            let types = d.data.services.map(s => s.service_type.slug);
            // console.log('*** d', d);
            // console.log('*** selectedFilters', selectedFilters);
            // console.log(' => types', types);
            let intersection = selectedFilters.filter(f => types.includes(f));
            // console.log(` => intersection ==> ${intersection.length > 0}`, intersection);

            return intersection.length > 0;
        });
    }); */
    const filterResults = () => {
        // console.log('searchResults', searchResults);
        searchResults = [...listings].sort((a, b) => {
            if (sortMethod === 'name') {
                return a.data[sortMethod] - b.data[sortMethod];
            }

            return b.data[sortMethod] - a.data[sortMethod];
        });
        // console.log(`filterResults sortMethod = "${sortMethod}"; AFTER SORT`, searchResults);
        searchResults = searchResults.filter(d => {
            let types = d.data.services.map(s => s.service_type.slug);
            // console.log('*** d', d);
            // console.log('*** selectedFilters', selectedFilters);
            // console.log(' => types', types);
            let intersection = selectedFilters.filter(f => types.includes(f));
            // console.log(` => intersection ==> ${intersection.length > 0}`, intersection);

            return intersection.length > 0;
        });
        // console.log(`filterResults sortMethod = "${sortMethod}"; AFTER FILTER`, searchResults);
    };

    const resetFilters = () => {
        selectedFilters = serviceTypes.map(s => s.slug);
        filterResults();
    };

    const clearFilters = () => {
        selectedFilters = [];
        filterResults();
    };

    const updateSort = (value) => {
        sortMethod = value;
        window.location = `${url}?sort=${sortMethod.toLowerCase()}`;
    };
</script>

<Seo
    title="Professional Cleaners In {title}"
/>

<div class="pt-4 mb-24 md:mx-auto md:w-[85%] md:max-w-6xl border-0 border-red-500">
    <h1 class="text-4xl text-green-800 mb-4">Professional Cleaners in {title}</h1>
    
    <div class="grid gap-4 md:gap-12 bg-background-light">
        <CitiesList data={region} />

        <SearchResults listings={searchResults} {sort}
            onresetfilters={resetFilters}
            onclearfilters={clearFilters}
            onsortchanged={updateSort}
        >
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