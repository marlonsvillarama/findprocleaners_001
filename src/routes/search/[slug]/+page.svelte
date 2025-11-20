<script>
    import SearchFilters from "$lib/components/search/search-filters.svelte";
    import SearchList from "$lib/components/search/search-list.svelte";
    import Seo from "$lib/components/root/seo.svelte";

    let { data } = $props();
</script>

<Seo
    title="Cleaning Services in {data.city?.name}"
    description="Find the best professional cleaning services within {data.city?.name}"
/>

<div class="mx-4 sm:mx-auto sm:w-[90%] sm:max-w-7xl grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] gap-8 items-start bg-accent border-0 border-red-600">
    <SearchFilters { data } />
    <SearchList { data } />
</div>
