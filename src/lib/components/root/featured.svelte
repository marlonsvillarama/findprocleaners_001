<script>
    import FeaturedCard from "./featured-card.svelte";

    let { data } = $props();
    console.log('*** featured data', data);
</script>

<div class="mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl">
    <h1 class="text-4xl text-gray-700 font-semibold mb-12 text-center">Featured Cleaners</h1>
    <div class="grid gap-4 sm:flex sm:flex-row sm:items-start sm:justify-between">
        {#each data.featured.slice(0, 4) as featured}
            <FeaturedCard data={featured} />
        {/each}
    </div>
</div>