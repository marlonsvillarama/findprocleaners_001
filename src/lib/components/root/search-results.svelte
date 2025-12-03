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
        <h2 class="text-lg md:text-2xl text-green-800 mb-1">Found {listings.length} result{listings.length === 1 ? '' : 's'}</h2>
        <div class="flex items-center justify-between">
            <div class="flex gap-2 sm:gap-3 items-center">
                <span class="text-md sm:text-sm">Sort by:</span>
                <select class="border rounded-sm px-3 sm:px-4 py-1.5 sm:py-2 text-md sm:text-sm" bind:value={sortMethod}>
                    <option value="name">Name</option>
                    <option value="highest-rated">Highest rated</option>
                    <option value="most-reviewed">Most reviewed</option>
                </select>
                <input type="button" value="Go" onclick={updateSortMethod}
                    class="rounded-sm px-3 py-1.5 sm:py-2 text-md sm:text-sm border cursor-pointer bg-gray-100 hover:bg-gray-200" />
            </div>
            <Button size="icon" variant="outline" onclick={() => isOpen = !isOpen}>
                <Funnel size={20} />
            </Button>
        </div>
    </div>

    <Separator class="mb-2"/>

    <div class={isOpen ? 'block' : 'hidden'}>
        <div class="flex items-center gap-3 sm:gap-3 mb-8">
            <button class="text-md sm:text-sm px-2 py-1.5 bg-gray-200 rounded-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onresetfilters}>
                Select all types
            </button>
            <button class="text-md sm:text-sm px-2 py-1.5 bg-gray-200 rounded-sm border-b-2 border-transparent hover:border-green-700 cursor-pointer" onclick={onclearfilters}>
                Clear all types
            </button>
        </div>

        <div>
            {@render filters()}
        </div>
    </div>

    {#if listings.length > 0}
        <div class="grid gap-3 mt-8">
            {#each listings as item}
                <SearchResultItem {item} />
            {/each}
        </div>
    {/if}
</div>

<style>
    h2 {
        font-family: 'Noto Serif', serif;
    }
</style>