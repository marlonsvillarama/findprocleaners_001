<script>
    import Separator from "../ui/separator/separator.svelte";

    import ProductPreview from "./product-preview.svelte";

    let { data } = $props();
</script>

<div class="bg-green-700/5 py-16">
    <div class="mx-4 sm:mx-auto sm:w-[90%] sm:max-w-7xl">
        <div class="mb-8 text-center">
            <h1 class="text-xl md:text-4xl text-gray-700 font-semibold mb-1 text-center">Recommended Products</h1>
            <span class="text-xs leading-[0.5px] sm:text-sm italic text-gray-400 font-light">FindProCleaners is a participant in the Amazon Affiliates Program, and may earn commissions on some products displayed through our product links.</span>
        </div>
        <div class="grid gap-12 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:items-start justify-center sm:justify-between">
            {#each data.products as product}
                <ProductPreview data={product} />
            {/each}
        </div>
    </div>
</div>