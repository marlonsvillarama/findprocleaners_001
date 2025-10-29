<script>
    import SearchFilters from "$lib/components/search/search-filters.svelte";
    import SearchList from "$lib/components/search/search-list.svelte";

    let { data } = $props();
</script>

<div class="search-results m-auto sm:w-[90%] gap-8">
    <SearchFilters {data} />
    <SearchList { data } />
    <div class="ads w-[250px]">ads</div>
</div>

<style>
    .search-results {
        display: grid;
        grid-template-columns: auto 1fr auto;
    }
</style>