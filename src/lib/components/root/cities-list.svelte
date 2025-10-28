<script>
    import Separator from "../ui/separator/separator.svelte";

    let cities = [
        'Auckland',
        'Christchurch',
        'Dunedin',
        'Invercargill',
        'Marlborough',
        'Nelson',
        'Palmerston North',
        'Queenstown',
        'Te Anau',
        'Wellington'
    ];

    let cityGroups = [];
</script>

<div class="mx-4 sm:w-7xl sm:mx-auto grid gap-4">
    <h1 class="text-xl text-green-800 font-semibold mb-1 mx-auto">Select your city below</h1>
    <Separator />
    <!-- <div class="border grid sm:grid-cols-3 gap-4 sm:gap-12 items-start"> -->
    <!-- <div class="flex sm:flex-cols gap-4 sm:gap-12 items-start justify-between">
        {#each products as product}
            <ProductPreview {...product} />
        {/each}
    </div> -->
</div>