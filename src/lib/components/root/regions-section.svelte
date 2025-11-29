<script>
    import Region from "./region.svelte";

    let { data } = $props();
</script>

<div class="grid regions justify-between gap-12 border-0 border-gray-500">
    {#each data as region}
        <Region data={region} />
    {/each}
</div>

<style>
    .regions {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
</style>