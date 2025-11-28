<script>
    import Separator from "../ui/separator/separator.svelte";
    import SearchResultItem from "./search-result-item.svelte";

    let { listings } = $props();
    console.log('search results listings', listings);
</script>

<div class="border-0">
    <h2 class="text-2xl text-green-800 mb-1">Found {listings.length} results</h2>
    <Separator class="mb-2"/>
    <!-- Filters -->
    <div class="mb-4 border">Filters</div>

    <div class="grid gap-6">
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