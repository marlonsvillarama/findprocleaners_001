<script>
    // import * as Select from '$lib/components/ui/select/index';
    // import Button from '../ui/button/button.svelte';
    import * as Dialog from '$lib/components/ui/dialog/index';

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
    // $effect(() => console.log('selectedCity', selectedCity))
    const cityTrigger = $derived(data.cities.find((c) => c.id === selectedCity)?.name ?? '--');

    let value = $state('');
    const triggerContent = $derived.by(() => {
        // console.log('selected value', value);
        return data.cities.find(f => f.name === value)?.name ?? 'Select my city'
    });

    const searchCity = () => {
        // console.log('selected city', value);
        if (!value) { return; }

        window.location = `/search/${value.toLowerCase().replaceAll(' ', '+')}`;
    };
</script>

<div class="bg-green-700/20">
    <div class="grid grid-cols-2 items-center justify-between mx-2 sm:mx-auto sm:w-[90%] sm:max-w-7xl">
        <div class="grid gap-8 text-left">
            <h2 class="text-5xl/12 text-green-800 font-semibold">Find the best cleaners near you</h2>
            <div class="flex gap-4 items-center">
                <Dialog.Root>
                    <Dialog.Trigger>
                        <div class="flex items-center gap-3 px-16 py-3 border-b-2 border-green-700 w-full bg-white rounded-sm text-green-700 cursor-pointer
                            hover:shadow-lg">
                            <Building2 size={20} />
                            <span>Select your city</span>
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Content class="absolute bg-white rounded-sm min-w-[800px] max-h-[550px] overflow-auto" side="right">
                        <div class="flex gap-4 items-center justify-center">
                            <Building2 size={20} />
                            <h1 class="text-xl text-left text-green-700 font-bold">Select your city</h1>
                        </div>
                        <div class="grid grid-cols-3 items-start px-4 mx-4 mt-4 mb-8">
                            {#each groups as group}
                                <div class="grid gap-2">
                                    {#each group as city}
                                        <a href="/search/{city.name.toLowerCase().replaceAll(' ', '+')}" target="_self"
                                            class="hover:bg-green-700/5"
                                        >
                                            <h2 class="text-gray-600 hover:text-green-700 p-1 pl-2 border-l-2 border-transparent
                                                hover:border-green-700
                                            ">{city.name}</h2>
                                        </a>
                                    {/each}
                                </div>
                            {/each}
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
                <!-- <Select.Root type="single" bind:value>
                    <Select.Trigger class="border-green-500 border-b-[2px] border-t-[0px] border-l-[0px] border-r-[0px]
                        cursor-pointer bg-white w-[250px] rounded-sm p-5 font-normal text-lg hover:shadow-md">
                        {triggerContent}
                    </Select.Trigger>
                    <Select.Content>
                        {#each data.cities as city}
                            <Select.Item value={city.name}>{city.name}</Select.Item>
                        {/each}
                    </Select.Content>
                </Select.Root>
                <Button class="bg-green-700 p-5 rounded-sm hover:bg-green-800 font-normal cursor-pointer hover:shadow-md" onclick={searchCity}>
                    Search
                </Button> -->
            </div>
        </div>
        <div class="w-full bg-[url(/images/hero-01.jpg)] bg-right bg-cover
            lg:h-[420px]
        ">
            <!-- <img src="/images/hero-01.jpg" alt="Hero" class="h-[480px] w-[480px]"> -->
        </div>
    </div>
</div>
