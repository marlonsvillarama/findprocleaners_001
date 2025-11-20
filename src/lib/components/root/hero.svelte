<script>
    import * as Dialog from '$lib/components/ui/dialog/index';
    import * as Select from '$lib/components/ui/select/index';

    import { Building2 } from '@lucide/svelte';
    
    let { data } = $props();

    const COLUMN_COUNT = 3;

    let groups = [];
    let perColumn = Math.ceil(data.cities.length / COLUMN_COUNT);

    let col = 0;
    let start = 0;
    do {
        groups.push(data.cities.slice((col * perColumn), (col * perColumn) + perColumn));
        col++;
    } while (col < COLUMN_COUNT);

    let selectedCity = $state('');
    const cityTrigger = $derived.by(() => {
        let city = data.cities.find((c) => c.id === selectedCity);
        return data.cities.find((c) => c.id === selectedCity)?.name ?? 'Select your city';
    });

    const searchCity = () => {
        if (!selectedCity) { return; }

        let city = data.cities.find((c) => c.id === selectedCity);
        window.location = `/search/${city.name.toLowerCase().replaceAll(' ', '+')}`;
    };
</script>

<div class="bg-green-700/20">
    <div class="grid lg:grid-cols-2 items-center justify-center lg:justify-between gap-8 mx-2 py-12 lg:py-0 md:mx-auto md:w-[90%] md:max-w-7xl">
        <div class="flex flex-col lg:grid gap-8 text-left items-center justify-center lg:justify-left">
            <h2 class="text-3xl text-center md:text-left lg:text-4xl/12 text-green-800 font-semibold">Find the best cleaners near you</h2>
            <div class="hidden md:block">
                <Dialog.Root class="hidden md:block">
                    <Dialog.Trigger>
                        <div class="flex items-center gap-3 px-16 py-2 md:py-3 border-b-2 border-green-700 w-full bg-white rounded-sm text-xs md:text-sm text-green-700 cursor-pointer
                            hover:shadow-lg">
                            <Building2 size={20} />
                            <span>Select your city</span>
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto" side="right">
                        <div class="flex gap-4 items-center justify-center">
                            <Building2 size={20} />
                            <h1 class="text-md text-left text-green-700 font-medium">Select your city</h1>
                        </div>
                        <div class="city-grid items-start px-4 mx-4 mt-4 mb-8">
                            {#each data.cities as city}
                                <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self"
                                    class="hover:bg-green-700/5 mb-2"
                                >
                                    <div class="text-sm text-gray-600 font-light hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                                        hover:border-green-700
                                    ">{city.name}</div>
                                </a>
                            {/each}
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                </div>

                <div class="md:hidden">
                <Select.Root type="single" bind:value={selectedCity} onValueChange={searchCity}>
                    <Select.Trigger class="flex items-center gap-3 px-12 py-5 md:py-3 border-0 border-b-2 border-green-700 w-full bg-white rounded-sm
                            hover:shadow-lg">
                        <div class="flex items-center gap-3 text-xs md:text-sm text-green-700 cursor-pointer">
                            <Building2 class=" text-green-700" size={20} />
                            <span>{cityTrigger}</span>
                        </div>
                    </Select.Trigger>
                    <Select.Content>
                        <div class="max-h-[400px] overflow-scroll">
                        {#each data.cities as city}
                            <Select.Item value={city.id}>
                                <div class="text-xs text-gray-600 font-light hover:text-green-700 p-1 px-2 border-l-2 border-transparent
                                    hover:border-green-700
                                ">{city.name}</div>
                            </Select.Item>
                        {/each}
                        </div>
                    </Select.Content>
                </Select.Root>
            </div>
        </div>
        <div class="hidden lg:block w-full bg-[url(/images/hero-01.jpg)] bg-right bg-cover
            h-auto lg:h-[420px]
        ">
        </div>
    </div>
</div>

<style>
    .city-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }
</style>