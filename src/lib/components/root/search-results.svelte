<script>
    import Button from "../ui/button/button.svelte";
    import Separator from "../ui/separator/separator.svelte";
    import SearchResultItem from "./search-result-item.svelte";

    import { Funnel } from "@lucide/svelte";

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

    let isOpen = $state(false);
</script>

<div class="border-0">
    <div class="sm:flex items-center justify-between mb-2">
        <h2 class="text-md md:text-2xl text-green-800 font-semibold mb-1">Found {listings.length} cleaner{listings.length === 1 ? '' : 's'}</h2>
        <div class="flex items-center justify-between">
            <div class="flex gap-2 sm:gap-3 items-center">
                <span class="text-sm sm:text-sm">Sort by:</span>
                <select class="border rounded-xs px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-sm" bind:value={sortMethod}>
                    <option value="name">Name</option>
                    <option value="highest-rated">Highest rated</option>
                    <option value="most-reviewed">Most reviewed</option>
                </select>
                <button onclick={updateSortMethod}
                    class="rounded-xs px-3 py-1.5 sm:py-2 text-sm sm:text-sm border cursor-pointer bg-gray-100 hover:bg-gray-200">
                    Go
                </button>
            </div>
            <button class="border p-1.5 border-1 border-amber-400 bg-{isOpen ? 'amber-400' : 'transparent'} rounded-sm" onclick={() => isOpen = !isOpen}>
                <Funnel size={20} fill="white"/>
            </button>
        </div>
    </div>

    <Separator class="mb-2"/>

    <div class="border-1 border-amber-400 rounded-sm p-2 mb-6 {isOpen ? 'block' : 'hidden'}">
        <div class="flex items-center gap-3 sm:gap-3 mb-6">
            <button class="text-sm sm:text-sm px-2 py-1.5 bg-gray-200 rounded-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onresetfilters}>
                Select all types
            </button>
            <button class="text-sm sm:text-sm px-2 py-1.5 bg-gray-200 rounded-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onclearfilters}>
                Clear all types
            </button>
        </div>

        <div>
            {@render filters()}
        </div>
    </div>

    {#if listings.length > 0}
        <div class="grid gap-3 mt-3">
            {#each listings as item}
                <SearchResultItem {item} />
            {/each}
        </div>
    {/if}
</div>

<style>
    /* h2 {
        font-family: 'Gabarito', sans-serif;
    } */
</style>