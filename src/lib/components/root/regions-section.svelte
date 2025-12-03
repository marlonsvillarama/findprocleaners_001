<script>
    import Region from "./region.svelte";

    let { data } = $props();
</script>

<div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-between gap-6 md:gap-12 border-0 border-gray-500">
    {#each data as region}
        <Region data={region} />
    {/each}
</div>
