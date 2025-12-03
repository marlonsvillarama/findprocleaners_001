<script>
    import Separator from "../ui/separator/separator.svelte";

    let { data } = $props();
    console.log('+CITIES-LIST cities', data.cities);
    data.cities.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
</script>

<div class="grid md:gap-1 border-0 border-gray-500 shadow-sm rounded-md ">
    <h1 class="text-sm md:text-lg text-gray-700/80 px-3 py-2 bg-gray-200 rounded-t-md">Select a city in this region</h1>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-y-1 px-4 py-2 items-start text-sm border-0 border-red-500">
        {#each data.cities as city}
            <a href="/professional-cleaners-in-{data.slug}/{city.slug}" target="_self">
                <h2 class="text-gray-600 hover:text-green-700 p-2 px-3 border-l-2 border-transparent
                    hover:border-green-700 hover:bg-green-700/5"
                >
                    {city.name}
                </h2>
            </a>
        {/each}
    </div>

    <div class="px-4 text-sm sm:text-xs pb-3 text-gray-400">
        Can't find your city?
        <a href="/contact?mode=request_city#contact-form" class="text-blue-600 underline">Request it to be listed.</a>
    </div>
</div>

<style>
    h1 {
        font-family: 'Noto Serif', serif;
    }
    /* .city-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    } */
</style>