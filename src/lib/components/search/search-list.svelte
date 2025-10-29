<script>
    import Separator from "../ui/separator/separator.svelte";
    import SearchResult from "./search-result.svelte";

    let {
        data
    } = $props();
</script>

<div class="results-container grid">
    <h1 class="text-green-800 text-2xl font-extrabold mb-2">Search Results for '{data.city?.name}'</h1>
    <!-- <Separator class="mb-2" /> -->
    <span>Found {data.results?.length} results</span>

    <div class="grid gap-2 mt-4">
        <h2 class="font-semibold pb-1 border-b-1 border-b-green-700">Featured Cleaners ({data.featured?.length})</h2>
        {#each data.featured as d}
            <SearchResult data={d} />
        {/each}
    </div>

    <div class="grid gap-2 mt-8">
        <h2 class="font-semibold pb-1 border-b-1 border-b-green-700">Results Found ({data.results?.length})</h2>
        {#each data.results as d}
            <SearchResult data={d} />
        {/each}
    </div>
</div>