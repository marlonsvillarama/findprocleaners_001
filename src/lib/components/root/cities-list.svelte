<script>
    import Separator from "../ui/separator/separator.svelte";

    let { data } = $props();
</script>

<div class="grid md:gap-2 border-0 border-gray-500 shadow-sm rounded-md">
    <h1 class="text-lg md:text-2xl text-gray-700/80 px-3 py-2 bg-gray-200 rounded-t-md">Select a city in this region</h1>

    <div class="city-grid gap-y-1 px-4 items-start text-sm border-0 border-red-500">
        {#each data.cities as city}
            <a href="/professional-cleaners-in-{data.slug}/{city.slug}" target="_self"
            >
                <h2
                    class="text-gray-600 hover:text-green-700 p-2 px-3 border-l-2 border-transparent
                        hover:border-green-700 hover:bg-green-700/5 mb-2"
                    >{city.name}</h2>
            </a>
        {/each}
    </div>

    <div class="px-4 text-sm pb-3 text-gray-400">
        Can't find your city?
        <a href="/contact?mode=request_city#contact-form" class="text-blue-600 underline">Request it to be listed.</a>
    </div>
</div>

<style>
    h1 {
        font-family: 'Noto Serif', serif;
    }
    .city-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
</style>