<script>
    import Separator from "../ui/separator/separator.svelte";
    import SearchResultItem from "./search-result-item.svelte";

    let {
        filters,
        listings,
        onresetfilters,
        onclearfilters
    } = $props();
    // console.log('search results listings', listings);

    let activeFilters = $state([]);

    const toggleFilter = (slug, remove = false) => {
    };
</script>

<div class="border-0">
    <h2 class="text-2xl text-green-800 mb-1">Found {listings.length} result{listings.length === 1 ? '' : 's'}</h2>
    <Separator class="mb-2"/>

    <div class="flex items-center gap-6 mb-3">
        <button class="text-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onresetfilters}>
            Select all
        </button>
        <button class="text-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onclearfilters}>
            Clear all
        </button>
    </div>

    <div class="mb-8">
        {@render filters()}
    </div>

    <div class="grid gap-3">
        {#each listings as item}
            <SearchResultItem {item} />
        {/each}
    </div>
</div>

<style>
    h2 {
        font-family: 'Noto Serif', serif;
    }
</style>