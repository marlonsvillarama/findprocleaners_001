<script>
    import CitiesList from "$lib/components/root/cities-list.svelte";
    import SearchFilters from "$lib/components/search/search-filters.svelte";
    import SearchList from "$lib/components/search/search-list.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>FindProCleaners - Professional Cleaners in {data.city?.name}</title>
    <meta name="description" content="Find the best professional cleaners within {data.city?.name}.">
</svelte:head>

<div class="mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl">
    
</div>

<div class="mx-4 sm"></div>
<div class="search-results m-auto sm:w-[90%] gap-8">
    <SearchFilters { data } />
    <SearchList { data } />
    <div class="ads w-[250px]">ads</div>
</div>

<CitiesList { data } />

<style>
    .search-results {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: start;
    }
</style>