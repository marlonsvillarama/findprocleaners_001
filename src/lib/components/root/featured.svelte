<script>
    import FeaturedCard from "./featured-card.svelte";

    let { data } = $props();
</script>

<div class="mx-4 md:mx-auto md:w-[90%] md:max-w-7xl">
    <h1 class="text-xl md:text-4xl text-gray-700 font-semibold mb-6 md:mb-12 text-center">Featured Cleaners</h1>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:items-center justify-center sm:justify-between">
        {#each data.featured.slice(0, 4) as featured}
            <FeaturedCard data={featured} />
        {/each}
    </div>
</div>