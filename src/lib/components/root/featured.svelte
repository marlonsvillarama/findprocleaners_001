<script>
    import FeaturedCard from "./featured-card.svelte";

    let { data } = $props();
    // console.log('*** featured data', data);
</script>

<div class="mx-4 sm:w-7xl sm:mx-auto">
    <h1 class="text-xl text-green-800 font-bold mb-1">Featured Cleaners</h1>
    <div class="grid gap-4 sm:flex sm:flex-row sm:items-start sm:justify-between">
        {#each data.featured.slice(0, 4) as featured}
            <FeaturedCard data={featured} />
        {/each}
    </div>
</div>