<script>
    import Separator from "../ui/separator/separator.svelte";
    import SearchResult from "./search-result.svelte";

    let {
        data
    } = $props();
</script>

<div class="results-container grid">
    <h1 class="text-green-800 text-2xl font-extrabold mb-1">Search Results for '{data.city?.name}'</h1>
    <Separator class="mb-1" />
    <span class="text-gray-500">Found <span class="text-gray-900 font-extrabold">{data.results?.length}</span> cleaners servicing this city</span>

    {#if data.featured.length > 0}
    <div class="grid gap-2 mt-4 mb-4">
        <!-- <h2 class="font-semibold pb-1 border-b-1 border-b-green-700">Featured Cleaners ({data.featured?.length})</h2> -->
        <h2 class="font-semibold pb-1 border-b-1 border-b-green-700">Featured Cleaner</h2>
        {#each data.featured.slice(0, 1) as d}
            <SearchResult data={d} />
        {/each}
    </div>
    {/if}

    {#if data.results.length > 0}
    <div class="grid gap-2 mt-4">
        <h2 class="font-semibold pb-1 border-b-1 border-b-green-700">Results Found ({data.results?.length})</h2>
        {#each data.results as d}
            <SearchResult data={d} />
        {/each}
    </div>
    {:else}
    <div class="grid gap-2 mt-8">
        <h1 class="font-bold pb-4 text-5xl">Uh-oh...</h1>
        <p class="">We did not find anything in {data.city?.name} at this time.</p>
        <p class="">Please feel free to read our articles, refer a cleaner you know, or write a review!</p>
    </div>
    <div class="flex flex-row gap-4 items-center mt-8">
        <a href="/blog" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Read our blog</a>
        <a href="/advertise" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Refer a cleaner</a>
        <a href="/advertise" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Advertise with us</a>
        <a href="/review" class="px-4 py-2 border-1 border-green-700 rounded-sm text-green-700 text-sm hover:bg-green-700 hover:text-white duration-[100ms] ease-in-out">Write a review</a>
    </div>
    {/if}
</div>