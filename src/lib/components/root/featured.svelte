<script>
    import FeaturedCard from "./featured-card.svelte";

    let { data } = $props();
</script>

<div class="grid featured justify-between gap-3 md:gap-12 border-0 border-gray-500">
    {#each data.slice(0, 3) as featured}
        <FeaturedCard city={featured.city} data={featured.data} />
    {/each}
</div>

<!-- <div class="mx-4 md:mx-auto md:w-[90%] md:max-w-7xl">
    <h1 class="text-xl md:text-4xl text-gray-700 font-semibold mb-6 md:mb-12 text-center">Featured Cleaners</h1>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:items-center justify-center sm:justify-between">
        {#each data.slice(0, 3) as featured}
            <FeaturedCard data={featured} />
        {/each}
    </div>
</div> -->

<style>
    .featured {
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    }
</style>