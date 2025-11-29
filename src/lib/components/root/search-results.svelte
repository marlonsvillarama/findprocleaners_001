<script>
    import Separator from "../ui/separator/separator.svelte";
    import SearchResultItem from "./search-result-item.svelte";

    let {
        filters,
        listings,
        sort = 'name',
        onresetfilters,
        onclearfilters,
        onsortchanged
    } = $props();

    let sortMethod = $state(sort);
    
    const updateSortMethod = () => {
        onsortchanged(sortMethod);
    };
</script>

<div class="border-0">
    <div class="flex items-center justify-between mb-2">
        <h2 class="text-2xl text-green-800 mb-1">Found {listings.length} result{listings.length === 1 ? '' : 's'}</h2>
        <div class="flex gap-3 items-center">
            <span class="text-sm">Sort results by:</span>
            <select class="border rounded-sm px-4 py-2 text-sm" bind:value={sortMethod}>
                <option value="name">Name</option>
                <option value="highest-rated">Highest rated</option>
                <option value="most-reviewed">Most reviewed</option>
            </select>
            <input type="button" value="Go" onclick={updateSortMethod}
                class="rounded-sm px-3 py-2 text-sm border cursor-pointer bg-gray-100 hover:bg-gray-200" />
        </div>
    </div>

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