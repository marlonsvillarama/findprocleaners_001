<script>
    import Separator from "../ui/separator/separator.svelte";

    let { data } = $props();
    console.log()

    // const COLUMN_COUNT = 4;

    const getGroups = (count) => {
        let groups = [];
        let perColumn = Math.ceil(data.cities.length / count);

        let col = 0;
        let start = 0;
        do {
            groups.push(data.cities.slice((col * perColumn), (col * perColumn) + perColumn));
            col++;
        } while (col < count);

        return groups;
    };
</script>

<div class="mx-4 sm:w-7xl sm:mx-auto grid gap-4 mb-8">
    <h1 class="text-xl text-green-800 font-semibold mb-1 mx-auto">Select your city below</h1>
    <Separator />
    <!-- <div class="border grid sm:grid-cols-3 gap-4 sm:gap-12 items-start"> -->
    <!-- <div class="flex sm:flex-cols gap-4 sm:gap-12 items-start justify-between">
        {#each products as product}
            <ProductPreview {...product} />
        {/each}
    </div> -->

    <div class="flex flex-cols-3 sm:flex-cols-4 items-start justify-between px-4">
        {#each getGroups(5) as group}
            <div class="grid gap-2">
                {#each group as city}
                    <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self">
                        <h2 class="text-green-700">{city.name}</h2>
                    </a>
                {/each}
            </div>
        {/each}
    </div>
</div>