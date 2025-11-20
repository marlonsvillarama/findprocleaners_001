<script>
    import Separator from "../ui/separator/separator.svelte";

    let { data } = $props();
</script>

<div class="mx-4 sm:mx-auto sm:w-[90%] sm:max-w-7xl grid md:gap-8 mb-8 border-0 border-red-500">
    <h1 class="text-xl md:text-3xl text-gray-700 font-semibold mb-1 text-center">Select your city below</h1>

    <div class="city-grid items-start mt-4 mb-8">
        {#each data.cities as city}
            <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self"
                class="hover:bg-green-700/5 mb-2"
            >
                <h2 class="font-light text-sm text-gray-600 hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                    hover:border-green-700
                ">{city.name}</h2>
            </a>
        {/each}
    </div>
</div>

<style>
    .city-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
</style>